// ==================== DATA ====================
const genresData = ["Jangari","Fantastika","Qo‘rqinchli","Kriminal","Triller","Komediya","Harbiy"];
const premieresData = moviesData.filter(m => m.sliderIcon);

// ==================== DOM ====================
const animeContainer = document.getElementById("anime");
const moviesContainer = document.getElementById("movies");
const seriesContainer = document.getElementById("series");
const genresContainer = document.getElementById("genres");
const premieresInner = document.getElementById("premieres-inner");
const shortsContainer = document.getElementById("shorts");
const searchBtn = document.getElementById("searchBtn");

// ==================== SAFE ====================
function safe(el){ return el !== null && el !== undefined; }

// ==================== OPEN MOVIE ====================
function openMovie(item){
  const index = moviesData.indexOf(item);
  if(index === -1) return;
  window.location.href = `list.html?id=${index}`;
}

// ==================== FULL PAGE ====================
function openFullPage(type){
  window.location.href = `full.html?type=${type}`;
}

function openGenrePage(genre){
  window.location.href = `full.html?genre=${encodeURIComponent(genre)}`;
}

// ==================== PREMIERES ====================
if(safe(premieresInner)){
  premieresData.forEach(item=>{
    const div=document.createElement("div");
    div.className="card";

    div.innerHTML = `
      <img src="${item.sliderIcon}">
      <div>${item.title}</div>
    `;

    div.onclick = ()=>openMovie(item);
    premieresInner.appendChild(div);
  });
}

// ==================== CARDS ====================
function renderCards(arr, container){
  if(!safe(container)) return;

  container.innerHTML="";

  arr.slice(0,3).forEach(item=>{
    const d=document.createElement("div");
    d.className="card";

    d.innerHTML = `
      <img src="${item.image}">
      <div>${item.title}</div>
    `;

    d.onclick = ()=>openMovie(item);
    container.appendChild(d);
  });
}

renderCards(moviesData.filter(m=>m.type==="movie"), moviesContainer);
renderCards(moviesData.filter(m=>m.type==="series"), seriesContainer);
renderCards(moviesData.filter(m=>m.type==="anime"), animeContainer);

// ==================== BARCHASI ====================
document.getElementById("allMoviesBtn")?.addEventListener("click", ()=>openFullPage("movie"));
document.getElementById("allSeriesBtn")?.addEventListener("click", ()=>openFullPage("series"));
document.getElementById("allAnimeBtn")?.addEventListener("click", ()=>openFullPage("anime"));

// ==================== GENRES ====================
if(safe(genresContainer)){
  genresData.forEach(g=>{
    const s=document.createElement("span");
    s.textContent=g;
    s.style.cursor="pointer";
    s.onclick=()=>openGenrePage(g);
    genresContainer.appendChild(s);
  });
}

// ==================== SHORTS ====================
function renderShorts(){
  if(!safe(shortsContainer)) return;

  shortsContainer.innerHTML="";

  shortsData.forEach((item, idx)=>{
    const div=document.createElement("div");
    div.className="short";

    div.innerHTML=`<img src="${item.src}">`;

    div.onclick=()=>window.location.href=`short.html?id=${idx}`;

    shortsContainer.appendChild(div);
  });
}
renderShorts();

// ==================== SEARCH ====================
if(safe(searchBtn)){
  searchBtn.onclick=()=>window.location.href="search.html";
}

// ==================== 🔥 SLIDER (SMOOTH + INFINITE) ====================
let currentIndex = 0;
let autoSlide;

function initSlider(){
  if(!safe(premieresInner)) return;

  const cards = premieresInner.children;
  if(cards.length === 0) return;

  const first = cards[0].cloneNode(true);
  const last = cards[cards.length - 1].cloneNode(true);

  premieresInner.appendChild(first);
  premieresInner.insertBefore(last, cards[0]);

  currentIndex = 1;
  updateSlider(true);
}

function getCardWidth(){
  const card = premieresInner.querySelector(".card");
  if(!card) return 0;
  return card.offsetWidth + 12;
}

function updateSlider(instant=false){
  const width = getCardWidth();
  if(width === 0) return;

  premieresInner.style.transition = instant ? "none" : "transform 0.5s ease";
  premieresInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide(){
  currentIndex++;
  updateSlider();

  if(currentIndex === premieresInner.children.length - 1){
    setTimeout(()=>{
      currentIndex = 1;
      updateSlider(true);
    }, 500);
  }
}

function prevSlide(){
  currentIndex--;
  updateSlider();

  if(currentIndex === 0){
    setTimeout(()=>{
      currentIndex = premieresInner.children.length - 2;
      updateSlider(true);
    }, 500);
  }
}

function startAutoSlide(){
  autoSlide = setInterval(nextSlide, 4000);
}

function resetAutoSlide(){
  clearInterval(autoSlide);
  startAutoSlide();
}

// INIT
initSlider();
startAutoSlide();

// ==================== TOUCH ====================
if(safe(premieresInner)){
  let startX = 0;

  premieresInner.addEventListener("touchstart", e=>{
    startX = e.touches[0].clientX;
    clearInterval(autoSlide);
  });

  premieresInner.addEventListener("touchend", e=>{
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if(diff > 50){
      nextSlide();
    } else if(diff < -50){
      prevSlide();
    }

    resetAutoSlide();
  });
}
