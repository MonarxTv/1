
// ==================== DATA ====================
const genresData = ["Jangari","Fantastika","Qo‘rqinchli","Kriminal","Triller","Komediya","Harbiy"];

// ==================== DOM ====================
const animeContainer = document.getElementById("anime");
const moviesContainer = document.getElementById("movies");
const seriesContainer = document.getElementById("series");
const genresContainer = document.getElementById("genres");
const searchBtn = document.getElementById("searchBtn");

// ==================== HERO SLIDER ====================
const heroTrack = document.getElementById("heroTrack");
const dotsBox = document.getElementById("dots");

let currentSlide = 0;
const sliderMovies = moviesData.filter(m => m.sliderIcon);

// ==================== OPEN MOVIE ====================
function openMovie(item){
  const index = moviesData.indexOf(item);
  if(index === -1) return;
  window.location.href = `list.html?id=${index}`;
}

// ==================== HERO SLIDER ====================
function renderSlider(){
  if(!heroTrack || !dotsBox) return;

  heroTrack.innerHTML = "";
  dotsBox.innerHTML = "";

  sliderMovies.forEach((m, i)=>{
    const slide = document.createElement("div");
    slide.className = "hero-slide";

    slide.innerHTML = `
      <img src="${m.sliderIcon}">
      <div class="hero-title">
        ${m.title}
        <div class="hero-rating">⭐ ${m.rating || "N/A"}</div>
      </div>
    `;

    slide.onclick = ()=>openMovie(m);

    heroTrack.appendChild(slide);

    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");

    dot.onclick = ()=>goToSlide(i);
    dotsBox.appendChild(dot);
  });
}

// ==================== SLIDER CONTROL ====================
function updateSlider(){
  heroTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll(".dots span").forEach((d,i)=>{
    d.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide(){
  currentSlide++;
  if(currentSlide >= sliderMovies.length) currentSlide = 0;
  updateSlider();
}

function prevSlide(){
  currentSlide--;
  if(currentSlide < 0) currentSlide = sliderMovies.length - 1;
  updateSlider();
}

function goToSlide(i){
  currentSlide = i;
  updateSlider();
}

// autoplay
let auto = setInterval(nextSlide, 4000);

function resetAuto(){
  clearInterval(auto);
  auto = setInterval(nextSlide, 4000);
}

// buttons
document.getElementById("nextBtn")?.addEventListener("click", ()=>{
  nextSlide();
  resetAuto();
});

document.getElementById("prevBtn")?.addEventListener("click", ()=>{
  prevSlide();
  resetAuto();
});

// swipe
let startX = 0;

heroTrack?.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
});

heroTrack?.addEventListener("touchend", e=>{
  const endX = e.changedTouches[0].clientX;

  if(startX - endX > 50) nextSlide();
  if(startX - endX < -50) prevSlide();

  resetAuto();
});

// ==================== CARDS ====================
function renderCards(arr, container){
  if(!container) return;

  container.innerHTML = "";

  arr.slice(0,3).forEach(item=>{
    const d = document.createElement("div");
    d.className = "card";

    d.innerHTML = `
      <div class="card-img">
        <img src="${item.image}">
        <div class="rating-badge">⭐ ${item.rating || "N/A"}</div>
      </div>
      <div class="card-title">${item.title}</div>
    `;

    d.onclick = ()=>openMovie(item);
    container.appendChild(d);
  });
}

// ==================== FULL PAGES ====================
function openFullPage(type){
  window.location.href = `full.html?type=${type}`;
}

function openGenrePage(genre){
  window.location.href = `full.html?genre=${encodeURIComponent(genre)}`;
}

// ==================== INIT CARDS ====================
renderCards(moviesData.filter(m=>m.type==="movie"), moviesContainer);
renderCards(moviesData.filter(m=>m.type==="series"), seriesContainer);
renderCards(moviesData.filter(m=>m.type==="anime"), animeContainer);

// ==================== GENRES ====================
if(genresContainer){
  genresData.forEach(g=>{
    const s = document.createElement("span");
    s.textContent = g;
    s.style.cursor = "pointer";
    s.onclick = ()=>openGenrePage(g);
    genresContainer.appendChild(s);
  });
}

// ==================== SEARCH ====================
searchBtn?.addEventListener("click", ()=>{
  window.location.href = "search.html";
});

// ==================== INIT ====================
renderSlider();
updateSlider();
