// ==================== GENRES ====================
const genresData = ["Jangari","Fantastika","Qo‘rqinchli","Kriminal","Triller","Komediya","Harbiy"];

// ==================== FILTER ====================
const premieresData = moviesData.filter(m => m.sliderIcon);

// ==================== DOM ELEMENTS ====================
const animeContainer = document.getElementById("anime");
const home = document.getElementById("home");
const moviePage = document.getElementById("movie");
const player = document.getElementById("player");
const episodesDiv = document.getElementById("episodes");
const movieTitle = document.getElementById("movie-title");
const movieGenre = document.getElementById("movie-genre");
const movieDesc = document.getElementById("movie-desc");
const movieActors = document.getElementById("movie-actors");
const movieImages = document.getElementById("movie-images");
const shortsContainer = document.getElementById("shorts");
const premieresInner = document.getElementById("premieres-inner");
const moviesContainer = document.getElementById("movies");
const seriesContainer = document.getElementById("series");
const genresContainer = document.getElementById("genres");
const actorModalImg = document.getElementById("actorModalImg");
const actorModalName = document.getElementById("actorModalName");
const shortModal = document.getElementById("shortModal");
const listModal = document.getElementById("listModal");
const listModalContent = document.getElementById("listModalContent");
const actorModal = document.getElementById("actorModal");
const actorMoviesDiv = document.getElementById("actorMovies");
const searchBtn = document.getElementById("searchBtn");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const closeActorBtn = document.getElementById("closeActorModal");
// ==================== TMDB ====================
const TMDB_API_KEY = "c86f82502e750953b61a3fc9895c95a2";

// ==================== RENDER SHORTS ====================
let currentShortIndex = 0;

function renderShorts() {
  shortsContainer.innerHTML = "";
  shortsData.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "short";
    div.innerHTML = `<img src="${item.src}">`;
    div.onclick = () => openShort(idx);
    shortsContainer.appendChild(div);
  });
}

function openShort(idx) {
  currentShortIndex = idx;
  const item = shortsData[idx];
  shortModal.innerHTML = `
    <div class="back" onclick="closeShort()">← Orqaga</div>
    <iframe src="${item.video}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    <button id="prevShortBtn" style="position:absolute;bottom:20px;left:20px;padding:10px 20px;z-index:10;">Oldingi</button>
    <button id="nextShortBtn" style="position:absolute;bottom:20px;right:20px;padding:10px 20px;z-index:10;">Keyingi</button>
  `;
  shortModal.style.display = "flex";

  document.getElementById("nextShortBtn").onclick = () => nextShort();
  document.getElementById("prevShortBtn").onclick = () => prevShort();

  history.pushState({ shortModal: true }, null, "");
}

function closeShort() {
  shortModal.style.display = "none";
  shortModal.innerHTML = "";
  history.back();
}

function nextShort() {
  currentShortIndex++;
  if (currentShortIndex >= shortsData.length) currentShortIndex = 0;
  openShort(currentShortIndex);
}

function prevShort() {
  currentShortIndex--;
  if (currentShortIndex < 0) currentShortIndex = shortsData.length - 1;
  openShort(currentShortIndex);
}
closeActorBtn.addEventListener("click", () => {
  actorModal.style.display = "none";
});
// ==================== RENDER PREMIERES ====================
premieresData.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<img src="${item.sliderIcon}"><div>${item.title}</div>`;
  div.onclick = () => openMoviePage(item);
  premieresInner.appendChild(div);
});

// ==================== MOVIES / SERIES ====================
function renderCards(arr, container) {
  container.innerHTML = "";
  arr.forEach(item => {
    const d = document.createElement("div");
    d.className = "card";
    d.innerHTML = `<img src="${item.image}"><div>${item.title}</div>`;
    d.onclick = () => openMoviePage(item);
    container.appendChild(d);
  });
}

renderCards(moviesData.filter(m => m.type === "movie").slice(0, 3), moviesContainer);
renderCards(moviesData.filter(m => m.type === "series").slice(0, 3), seriesContainer);
renderCards(moviesData.filter(m => m.type === "anime").slice(0, 3), animeContainer);

// ==================== HOME / MOVIE PAGE ====================
function goHome() {
  player.src = "";
  moviePage.classList.add("hidden");
  home.classList.remove("hidden");
}

function changeEpisode(btn, src) {
  if (!src.includes("hd=")) src += src.includes("?") ? "&hd=2" : "?hd=2";
  player.src = src;
  episodesDiv.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// ==================== OPEN MOVIE PAGE ====================
async function openMoviePage(item) {
  home.classList.add("hidden");
  moviePage.classList.remove("hidden");

  let videoSrc = item.video[0];
  if (!videoSrc.includes("hd=")) videoSrc += videoSrc.includes("?") ? "&hd=2" : "?hd=2";
  player.src = videoSrc;

  episodesDiv.innerHTML = "";
  if (item.video.length > 1) {
    item.video.forEach((v, idx) => {
      const btn = document.createElement("button");
      btn.textContent = `${idx+1}-qism`;
      if (idx === 0) btn.classList.add("active");
      btn.onclick = () => changeEpisode(btn, v);
      episodesDiv.appendChild(btn);
    });
  }

  movieTitle.textContent = item.title;
  movieGenre.textContent = item.genre;
  movieDesc.textContent = item.desc;

  await renderActorsTMDB(item.actors);

  movieImages.innerHTML = "";
  item.images.forEach(img => {
    const im = document.createElement("img");
    im.src = img;
    im.style.cursor = "pointer";
    im.style.margin = "5px";
    im.style.borderRadius = "6px";
    im.onclick = () => {
      modalImg.src = img;
      imageModal.style.display = "flex";
    };
    movieImages.appendChild(im);
  });
}

// ==================== ACTORS ====================
async function renderActorsTMDB(actors) {
  movieActors.innerHTML = "";

  for (const actor of actors) {
    let actorName = actor.name || "";
    let actorImg = actor.img || "";

    if (actor.tmdbId) {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/person/${actor.tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`);
        const data = await res.json();
        actorName = data.name;
        actorImg = data.profile_path ? "https://image.tmdb.org/t/p/w185" + data.profile_path : actorImg;
      } catch(e) { console.log("TMDB error", e); }
    }

    const div = document.createElement("div");
    div.className = "actor-item";
    div.innerHTML = `<img src="${actorImg}"><span>${actorName}</span>`;
    div.onclick = () => showActorMovies(actor.tmdbId);
    movieActors.appendChild(div);
  }
}

async function showActorMovies(actorId) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${TMDB_API_KEY}&language=en-US`);
    const actorData = await res.json();
    actorModalImg.src = actorData.profile_path ? "https://image.tmdb.org/t/p/w185" + actorData.profile_path : "";
    actorModalName.textContent = actorData.name || "";

    actorMoviesDiv.innerHTML = "";
    const localMovies = moviesData.filter(m => m.actors?.some(a => a.tmdbId === actorId));

    if(localMovies.length === 0){
      actorMoviesDiv.innerHTML = `<p style="color:#fff; padding:10px;">Bu aktyor uchun film topilmadi.</p>`;
    } else {
      localMovies.forEach(item => {
        const d = document.createElement("div");
        d.className = "card";
        d.innerHTML = `<img src="${item.image}"><div>${item.title}</div>`;
        d.onclick = () => { closeActorModal(); setTimeout(()=>openMoviePage(item),100); };
        actorMoviesDiv.appendChild(d);
      });
    }

    actorModal.style.display = "flex";
    history.pushState({ actorModal:true }, null, "");
  } catch(err){ console.log(err); }
}

function closeActorModal() { actorModal.style.display = "none"; player.src = ""; }

// ==================== MODALS ====================
const imageModal = document.createElement("div");
imageModal.id = "imageModal";
imageModal.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); justify-content:center; align-items:center; z-index:1000;";
imageModal.innerHTML = `<img id="modalImg" style="max-width:90%; max-height:90%; border-radius:8px;"><span id="closeImgModal" style="position:absolute; top:20px; right:30px; font-size:30px; color:#fff; cursor:pointer;">&times;</span>`;
document.body.appendChild(imageModal);
const modalImg = document.getElementById("modalImg");
document.getElementById("closeImgModal").onclick = ()=> { imageModal.style.display = "none"; };

// ==================== BUTTONS ====================
document.getElementById("allMoviesBtn").addEventListener("click", ()=>openListModal(moviesData.filter(m=>m.type==="movie")));
document.getElementById("allSeriesBtn").addEventListener("click", ()=>openListModal(moviesData.filter(m=>m.type==="series")));
document.getElementById("allAnimeBtn").addEventListener("click", ()=>openListModal(moviesData.filter(m=>m.type==="anime")));

function openListModal(items){
  listModalContent.innerHTML = "";
  items.forEach(item=>{
    const d = document.createElement("div");
    d.className = "card";
    d.innerHTML = `<img src="${item.image}"><div>${item.title}</div>`;
    d.onclick = ()=>{ openMoviePage(item); closeListModal(); };
    listModalContent.appendChild(d);
  });
  listModal.style.display = "flex";
  history.pushState({ listModal:true }, null, "");
}

function closeListModal(){ listModal.style.display="none"; player.src=""; }

// ==================== GENRES ====================
genresData.forEach(g=>{
  const s = document.createElement("span");
  s.textContent = g;
  s.style.cursor = "pointer";
  s.onclick = ()=> openListModal(moviesData.filter(m=>m.genre.includes(g)));
  genresContainer.appendChild(s);
});

// ==================== SEARCH ====================
searchBtn.addEventListener("click", ()=>{
  searchModal.style.display="flex";
  searchInput.value="";
  searchResults.innerHTML="";
});

function closeSearch(){ searchModal.style.display="none"; }

searchInput.addEventListener("input", async ()=>{
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML="";
  if(!query) return;

  // TMDB actors
  const actorRes = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}`);
  const actorData = await actorRes.json();
  const actors = actorData.results.filter(a=>a.profile_path);

  if(actors.length>0){
    const actorRow = document.createElement("div");
    actorRow.className="actor-row";
    actors.forEach(actor=>{
      const div = document.createElement("div");
      div.className="actor-card";
      div.innerHTML=`<img src="https://image.tmdb.org/t/p/w185${actor.profile_path}"><span>${actor.name}</span>`;
      div.onclick=()=>{ showActorMovies(actor.id); closeSearch(); };
      actorRow.appendChild(div);
    });
    searchResults.appendChild(actorRow);
  }

  // Local movies
  const movies = moviesData.filter(m=>m.title.toLowerCase().includes(query));
  if(movies.length>0){
    const movieRow = document.createElement("div");
    movieRow.className="movie-row";
    movies.forEach(m=>{
      const div=document.createElement("div");
      div.className="card";
      div.innerHTML=`<img src="${m.image}"><div>${m.title}</div>`;
      div.onclick=()=>{ openMoviePage(m); closeSearch(); };
      movieRow.appendChild(div);
    });
    searchResults.appendChild(movieRow);
  }
});

// ==================== PREMIERE SLIDER ====================
let premiereOffset=0;
function getCardWidth(){
  const card = premieresInner.querySelector(".card");
  if(!card) return 0;
  const style = getComputedStyle(card);
  const gap = parseInt(style.marginRight)||12;
  return card.offsetWidth+gap;
}

function slidePremieres(){
  const cardWidth = getCardWidth();
  premiereOffset+=cardWidth;
  if(premiereOffset >= cardWidth*premieresInner.children.length) premiereOffset=0;
  premieresInner.style.transform=`translateX(-${premiereOffset}px)`;
}

let premiereInterval = setInterval(slidePremieres,5000);

// ===== NAV BUTTONS =====
const prevBtn = document.createElement("button");
prevBtn.innerText="<";
prevBtn.className="premiere-nav-btn prev-btn";
const nextBtn = document.createElement("button");
nextBtn.innerText=">";
nextBtn.className="premiere-nav-btn next-btn";
const premieresContainer = document.getElementById("premieres");
premieresContainer.style.position="relative";
premieresContainer.appendChild(prevBtn);
premieresContainer.appendChild(nextBtn);

const styleTag=document.createElement("style");
styleTag.innerHTML=`
.premiere-nav-btn {
  position:absolute; top:50%; transform:translateY(-50%);
  background: rgba(0,0,0,0.5); color:#fff; border:none;
  padding:6px 10px; border-radius:6px; cursor:pointer; z-index:10;
}
.prev-btn{left:5px;} .next-btn{right:5px;}
`;
document.head.appendChild(styleTag);

prevBtn.onclick=()=>{
  const cardWidth=getCardWidth();
  premiereOffset-=cardWidth;
  if(premiereOffset<0) premiereOffset=cardWidth*(premieresInner.children.length-1);
  premieresInner.style.transform=`translateX(-${premiereOffset}px)`;
  resetInterval();
};
nextBtn.onclick=()=>{ slidePremieres(); resetInterval(); };
function resetInterval(){ clearInterval(premiereInterval); premiereInterval=setInterval(slidePremieres,5000); }

// ===== TOUCH SUPPORT =====
let startX=0, isDragging=false;
premieresInner.addEventListener("touchstart", e=>{ startX=e.touches[0].clientX; isDragging=true; });
premieresInner.addEventListener("touchmove", e=>{
  if(!isDragging) return;
  const diff=startX-e.touches[0].clientX;
  if(diff>30){ slidePremieres(); resetInterval(); isDragging=false; }
  if(diff<-30){ prevBtn.click(); isDragging=false; }
});
premieresInner.addEventListener("touchend", ()=>{ isDragging=false; });

// ===== HISTORY POPSTATE =====
window.addEventListener("popstate", (e)=>{
  if(shortModal.style.display==="flex") closeShort();
  else if(listModal.style.display==="flex") closeListModal();
  else if(actorModal.style.display==="flex") closeActorModal();
  else if(searchModal.style.display==="flex") closeSearch();
});

// ===== INITIAL RENDER =====
renderShorts();
