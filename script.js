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

// ==================== SLIDER ====================
let premiereIndex = 0;

function getCardWidth(){
  if(!safe(premieresInner)) return 0;

  const card = premieresInner.querySelector(".card");
  if(!card) return 0;

  return card.offsetWidth + 12;
}

function updateSlider(){
  const cardWidth = getCardWidth();
  premieresInner.style.transition = "transform 0.4s ease";
  premieresInner.style.transform = `translateX(-${premiereIndex * cardWidth}px)`;
}

// ▶️ NEXT
function nextSlide(){
  if(!safe(premieresInner)) return;

  premiereIndex++;

  if(premiereIndex >= premieresInner.children.length){
    premiereIndex = 0;
  }

  updateSlider();
}

// ◀️ PREV
function prevSlide(){
  if(!safe(premieresInner)) return;

  premiereIndex--;

  if(premiereIndex < 0){
    premiereIndex = premieresInner.children.length - 1;
  }

  updateSlider();
}

// AUTO SLIDE
let sliderInterval = setInterval(nextSlide, 5000);

// RESET TIMER
function resetSlider(){
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
}

// ==================== TOUCH ====================
if(safe(premieresInner)){
  let startX = 0;

  premieresInner.addEventListener("touchstart", e=>{
    startX = e.touches[0].clientX;
  });

  premieresInner.addEventListener("touchend", e=>{
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if(diff > 50){
      nextSlide(); // 👉 chapga surish
      resetSlider();
    }

    if(diff < -50){
      prevSlide(); // 👉 o‘ngga surish
      resetSlider();
    }
  });
}
