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

const listModal = document.getElementById("listModal");
const listModalContent = document.getElementById("listModalContent");

const searchBtn = document.getElementById("searchBtn");

// ==================== SAFE CHECK ====================
function safe(el){ return el !== null && el !== undefined; }

// ==================== OPEN MOVIE ====================
function openMovie(item){
  const index = moviesData.indexOf(item);
  if(index === -1) return;
  window.location.href = `list.html?id=${index}`;
}

// ==================== PREMIERES ====================
if(safe(premieresInner)){
  premieresData.forEach(item=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${item.sliderIcon}"><div>${item.title}</div>`;
    div.onclick=()=>openMovie(item);
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
    d.innerHTML=`<img src="${item.image}"><div>${item.title}</div>`;
    d.onclick=()=>openMovie(item);
    container.appendChild(d);
  });
}

renderCards(moviesData.filter(m=>m.type==="movie"), moviesContainer);
renderCards(moviesData.filter(m=>m.type==="series"), seriesContainer);
renderCards(moviesData.filter(m=>m.type==="anime"), animeContainer);

// ==================== LIST MODAL ====================
function openListModal(items){
  if(!safe(listModal) || !safe(listModalContent)) return;

  listModalContent.innerHTML="";

  items.forEach(item=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${item.image}"><div>${item.title}</div>`;
    div.onclick=()=>openMovie(item);
    listModalContent.appendChild(div);
  });

  listModal.style.display="flex";
}

function closeListModal(){
  if(safe(listModal)) listModal.style.display="none";
}

// ==================== "BARCHASI" ====================
document.getElementById("moviesMore")?.addEventListener("click", ()=>{
  openListModal(moviesData.filter(m=>m.type==="movie"));
});

document.getElementById("seriesMore")?.addEventListener("click", ()=>{
  openListModal(moviesData.filter(m=>m.type==="series"));
});

document.getElementById("animeMore")?.addEventListener("click", ()=>{
  openListModal(moviesData.filter(m=>m.type==="anime"));
});

// ==================== GENRES ====================
if(safe(genresContainer)){
  genresData.forEach(g=>{
    const s=document.createElement("span");
    s.textContent=g;
    s.style.cursor="pointer";

    s.onclick=()=>{
      openListModal(
        moviesData.filter(m=>m.genre.includes(g))
      );
    };

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

    div.onclick=()=>{
      window.location.href=`short.html?id=${idx}`;
    };

    shortsContainer.appendChild(div);
  });
}
renderShorts();

// ==================== SEARCH ====================
if(safe(searchBtn)){
  searchBtn.onclick=()=>{
    window.location.href="search.html";
  };
}

// ==================== ACTOR CLICK (UNIVERSAL) ====================
function attachActorClick(container){
  if(!safe(container)) return;

  container.querySelectorAll(".actor-item").forEach(el=>{
    const id = el.getAttribute("data-id");

    if(id){
      el.onclick=()=>{
        window.location.href=`actor.html?id=${id}`;
      };
    }
  });
}

// ==================== SLIDER ====================
let premiereOffset=0;

function getCardWidth(){
  if(!safe(premieresInner)) return 0;

  const card=premieresInner.querySelector(".card");
  if(!card) return 0;

  return card.offsetWidth+12;
}

function slidePremieres(){
  if(!safe(premieresInner)) return;

  const cardWidth=getCardWidth();
  if(cardWidth === 0) return;

  premiereOffset+=cardWidth;

  if(premiereOffset>=cardWidth*premieresInner.children.length){
    premiereOffset=0;
  }

  premieresInner.style.transform=`translateX(-${premiereOffset}px)`;
}

setInterval(slidePremieres,5000);

// ==================== TOUCH ====================
if(safe(premieresInner)){
  let startX=0,isDragging=false;

  premieresInner.addEventListener("touchstart",e=>{
    startX=e.touches[0].clientX;
    isDragging=true;
  });

  premieresInner.addEventListener("touchmove",e=>{
    if(!isDragging) return;

    const diff=startX-e.touches[0].clientX;

    if(diff>30){
      slidePremieres();
      isDragging=false;
    }
  });

  premieresInner.addEventListener("touchend",()=>{
    isDragging=false;
  });
}
// ==================== 🔥 BARCHASI ====================
const allMoviesBtn = document.getElementById("allMoviesBtn");
const allSeriesBtn = document.getElementById("allSeriesBtn");
const allAnimeBtn = document.getElementById("allAnimeBtn");

if(allMoviesBtn){
  allMoviesBtn.onclick = ()=>{
    openListModal(moviesData.filter(m=>m.type==="movie"));
  };
}

if(allSeriesBtn){
  allSeriesBtn.onclick = ()=>{
    openListModal(moviesData.filter(m=>m.type==="series"));
  };
}

if(allAnimeBtn){
  allAnimeBtn.onclick = ()=>{
    openListModal(moviesData.filter(m=>m.type==="anime"));
  };
}
