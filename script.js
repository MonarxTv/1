// ===== DATA =====
const shortsData=[
  {src:"https://grapodpada.pl/wp-content/uploads/2021/12/nowayhome-1024x569.jpg",video:"https://www.youtube.com/embed/2nyUYqrUfuY?autoplay=1&mute=1&loop=1&playlist=2nyUYqrUfuY" },
  {src:"https://i.pinimg.com/736x/a1/2a/d0/a12ad067c21daedad609a52573be6e92.jpg",video:"https://www.youtube.com/embed/5h_WslzvuC8?autoplay=1&mute=0&controls=1"}
];

const genresData=["Jangari","Fantastika","Qo‘rqinchli","Triller","Komediya"];

const moviesData=[
{
  title:"O'rgimchak odam: Uyga yo'l yo'q",
       sliderIcon:"https://www.filmfreakcentral.net/6a0168ea36d6b2970c02788060b95a200d-800wi", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://i.pinimg.com/736x/78/a2/b7/78a2b784386264eefc3175b69e26077d.jpg",
    video:["https://vk.com/video_ext.php?oid=-230288707&id=456239244&hd=2"],
    type:"movie",
    genre:"Fantastika • Sarguzasht",
    desc:"Peter Parker yangi sarguzashtlarga kiradi.",
    actors:[
      {name:"Tom Holland", img:"https://external-preview.redd.it/tom-holland-interview-esquire-magazine-v0-MwNLsZ2Trv3mz-KJwGhMe13wfMABzr7YdpkkHO0P9ks.jpeg?width=1080&crop=smart&auto=webp&s=b6bb40525ad54b23664cd0c3e8140bd5810ad53a"},
      {name:"Zendaya", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqx4GecDFxfuZSejRkvvN6hjAve5NgArPZYSBfOU5phZ_n-TUIULtTSnYlvIgPJYt03R0Dmp9ArG0Pky9KunV_v7QX_Ed3DNq202rYA&s=10"},
      {name:"Benedict Cumberbatch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsA4wnFYWZRgbM-dPVkRPdw9UbUbGtwQYGHjrm8ClyKOFpDL178Ug9FDYpmJLA6TFdEKqsM09YaHTQOQ42Gd3vHWDmBJK8pVEtgYqkj-E&s=10"}
    ],
    images:[
      "https://ychef.files.bbci.co.uk/1280x720/p0bb670h.jpg", 
      "https://cdn.marvel.com/content/1x/maguiregarfieldholland_opt.jpg"
      , "https://media.gq.com/photos/612523b17624a4b10c7eed7d/16:9/w_1280,c_limit/14.png",
      "https://images.mubicdn.net/images/film/360584/cache-827372-1745500600/image-w1280.jpg?size=800x"]
}, 
  {
    title:"Naruto Shippuden",
      sliderIcon:"https://nerdarena.in/cdn/shop/articles/Naruto_Shippuden_Banner.jpg?v=1718480380&width=2048", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg/250px-Naruto_-_Shippuden_DVD_season_1_volume_1.jpg",
    video:["https://vk.com/video_ext.php?oid=-230696351&id=456239033&hd=2","https://vk.com/video_ext.php?oid=-231301225&id=456239149&hd=2"],
    type: "anime",
    genre:"Qo‘rqinchli • Fantastika",
    desc:"Wednesday Adams yangi sarguzashtlar bilan qaytadi.",
    actors:[
      {name:"Jenna Ortega", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1seytGE26prWcF-DUuc59ueHN9X7dyCMJQ&s"},
      {name:"Emma Myers", img:"https://www.famousbirthdays.com/faces/myers-emma-image.jpg"},
      {name:"Evie Templeton", img:"https://m.media-amazon.com/images/M/MV5BMTVmNGRhMjQtYTY0ZS00ODVjLTg4Y2EtOWMyMGRjYmM0NDNmXkEyXkFqcGc@._V1_CR0,0,1023,1535_QL75_UX140_CR0,1,140,207_.jpg"}
    ],
    images:[
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/07/Wednesday_n_S2_E3_00_26_46_14R3-H-2025.jpg?w=1296",
      "https://www.indiewire.com/wp-content/uploads/2025/04/WEDNESDAY_201_Unit_04963RC2.jpg?w=600&h=337&crop=1",
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/09/WEDNESDAY_203_Unit_00756RC2.jpg?w=2000&h=1126&crop=1",
      "https://media.glamour.com/photos/6894a906af38fb5953089138/4:3/w_1440,h_1080,c_limit/WEDNESDAY%20ENID%20060825%20MAIN-Wednesday_n_S2_E1_00_49_15_04R2.jpg"
    ]
  } , 
  {
    title:"Wednesday 2",
      sliderIcon:"https://static0.cbrimages.com/wordpress/wp-content/uploads/2022/11/wednesday-jenna-ortega-thing-netflix.jpg?w=1200&h=675&fit=crop", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://media.vogue.fr/photos/6387ce0bf952f38a67424d61/2:3/w_2560%2Cc_limit/Netflix-la-danse-de-Mercredi-Addams-enflamme-deja-la-Toile.jpg",
    video:["https://vk.com/video_ext.php?oid=-230696351&id=456239033&hd=2","https://vk.com/video_ext.php?oid=-231301225&id=456239149&hd=2"],
    type:"series",
    genre:"Qo‘rqinchli • Fantastika",
    desc:"Wednesday Adams yangi sarguzashtlar bilan qaytadi.",
    actors:[
      {name:"Jenna Ortega", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1seytGE26prWcF-DUuc59ueHN9X7dyCMJQ&s"},
      {name:"Emma Myers", img:"https://www.famousbirthdays.com/faces/myers-emma-image.jpg"},
      {name:"Evie Templeton", img:"https://m.media-amazon.com/images/M/MV5BMTVmNGRhMjQtYTY0ZS00ODVjLTg4Y2EtOWMyMGRjYmM0NDNmXkEyXkFqcGc@._V1_CR0,0,1023,1535_QL75_UX140_CR0,1,140,207_.jpg"}
    ],
    images:[
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/07/Wednesday_n_S2_E3_00_26_46_14R3-H-2025.jpg?w=1296",
      "https://www.indiewire.com/wp-content/uploads/2025/04/WEDNESDAY_201_Unit_04963RC2.jpg?w=600&h=337&crop=1",
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/09/WEDNESDAY_203_Unit_00756RC2.jpg?w=2000&h=1126&crop=1",
      "https://media.glamour.com/photos/6894a906af38fb5953089138/4:3/w_1440,h_1080,c_limit/WEDNESDAY%20ENID%20060825%20MAIN-Wednesday_n_S2_E1_00_49_15_04R2.jpg"
    ]
  }
];

// ==================== DATA FILTER ====================
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

const shortModal = document.getElementById("shortModal");
const listModal = document.getElementById("listModal");
const listModalContent = document.getElementById("listModalContent");
const actorModal = document.getElementById("actorModal");
const actorMoviesDiv = document.getElementById("actorMovies");
const searchBtn = document.getElementById("searchBtn");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// ==================== RENDER SHORTS ====================
shortsData.forEach(item => {
  const div = document.createElement("div");
  div.className = "short";
  div.innerHTML = `<img src="${item.src}">`;
  div.addEventListener("click", () => openShort(item.video));
  shortsContainer.appendChild(div);
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

// ==================== OPEN MOVIE PAGE ====================
function openMoviePage(item) {
  home.classList.add("hidden");
  moviePage.classList.remove("hidden");
  player.src = item.video[0];
  episodesDiv.innerHTML = "";

  if (item.video.length > 1) {
    item.video.forEach((v, idx) => {
      const btn = document.createElement("button");
      btn.textContent = `${idx + 1}-qism`;
      if (idx === 0) btn.classList.add("active");
      btn.onclick = () => changeEpisode(btn, v);
      episodesDiv.appendChild(btn);
    });
  }

  movieTitle.textContent = item.title;
  movieGenre.textContent = item.genre;
  movieDesc.textContent = item.desc;

  renderActors(item.actors);

  movieImages.innerHTML = "";
  item.images.forEach(img => {
    const im = document.createElement("img");
    im.src = img;
    movieImages.appendChild(im);
  });
}

function goHome() {
  player.src = "";
  moviePage.classList.add("hidden");
  home.classList.remove("hidden");
  history.back();
}

function changeEpisode(btn, src) {
  player.src = src;
  episodesDiv.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

renderCards(moviesData.filter(m => m.type === "anime").slice(0, 3), animeContainer);
document.getElementById("allAnimeBtn").addEventListener("click", () => {
  openListModal(moviesData.filter(m => m.type === "anime"));
});

// ==================== SHORT MODAL ====================
function openShort(videoSrc) {
  // VK video iframe
  shortModal.innerHTML = `
    <div class="back" onclick="closeShort()">← Orqaga</div>
    <iframe src="${videoSrc}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
  `;
  shortModal.style.display = "flex";
  history.pushState({ shortModal: true }, null, "");
}

function closeShort() {
  shortModal.style.display = "none";
  shortModal.innerHTML = "";
  history.back();
};
// ==================== LIST MODAL ====================
function openListModal(items) {
  listModalContent.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${item.image}"><div>${item.title}</div>`;
    div.onclick = () => { openMoviePage(item); closeListModal(); };
    listModalContent.appendChild(div);
  });
  listModal.style.display = "flex";
  history.pushState({ listModal: true }, null, "");
}

function closeListModal() {
  listModal.style.display = "none";
  player.src = "";
  history.back();
}

// ==================== ACTOR MODAL ====================
function renderActors(actors) {
  movieActors.innerHTML = "";
  actors.forEach(a => {
    const div = document.createElement("div");
    div.className = "actor-item";
    div.innerHTML = `<img src="${a.img}"><span>${a.name}</span>`;
    div.onclick = () => openActorModal(a.name);
    movieActors.appendChild(div);
  });
}

function openActorModal(actorName) {
  const filtered = moviesData.filter(m => m.actors.some(a => a.name === actorName));
  actorMoviesDiv.innerHTML = "";
  filtered.forEach(item => {
    const d = document.createElement("div");
    d.className = "card";
    d.innerHTML = `<img src="${item.image}"><div>${item.title}</div>`;
    d.onclick = () => { openMoviePage(item); closeActorModal(); };
    actorMoviesDiv.appendChild(d);
  });
  actorModal.style.display = "flex";
  history.pushState({ actorModal: true }, null, "");
}

function closeActorModal() {
  actorModal.style.display = "none";
  player.src = "";
  history.back();
}

// ==================== ALL BUTTONS ====================
document.getElementById("allMoviesBtn").addEventListener("click", () => {
  openListModal(moviesData.filter(m => m.type === "movie"));
});
document.getElementById("allSeriesBtn").addEventListener("click", () => {
  openListModal(moviesData.filter(m => m.type === "series"));
});

// ==================== GENRES ====================
genresData.forEach(g => {
  const s = document.createElement("span");
  s.textContent = g;
  s.style.cursor = "pointer";
  s.onclick = () => { openListModal(moviesData.filter(m => m.genre.includes(g))); };
  genresContainer.appendChild(s);
});

// ==================== SEARCH ====================
searchBtn.addEventListener("click", () => {
  searchModal.style.display = "flex";
  searchInput.value = "";
  searchResults.innerHTML = "";
});

function closeSearch() { searchModal.style.display = "none"; }

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const results = moviesData.filter(m => m.title.toLowerCase().includes(query));
  searchResults.innerHTML = "";
  results.forEach(item => {
    const d = document.createElement("div");
    d.className = "card";
    d.innerHTML = `<img src="${item.image}"><div>${item.title}</div>`;
    d.onclick = () => { openMoviePage(item); closeSearch(); };
    searchResults.appendChild(d);
  });
});

// ==================== PREMIERE SLIDER JS ====================
let premiereOffset = 0;

function getCardWidth() {
  const card = premieresInner.querySelector(".card");
  if (!card) return 0;
  const style = getComputedStyle(card);
  const gap = parseInt(style.marginRight) || 12;
  return card.offsetWidth + gap;
}

function slidePremieres() {
  const cardWidth = getCardWidth();
  premiereOffset += cardWidth;
  if (premiereOffset >= cardWidth * premieresInner.children.length) premiereOffset = 0;
  premieresInner.style.transform = `translateX(-${premiereOffset}px)`;
}

let premiereInterval = setInterval(slidePremieres, 5000);

// ===== QOLDA SURISH TUGMALARI =====
const prevBtn = document.createElement("button");
prevBtn.innerText = "<";
prevBtn.className = "premiere-nav-btn prev-btn";

const nextBtn = document.createElement("button");
nextBtn.innerText = ">";
nextBtn.className = "premiere-nav-btn next-btn";

const premieresContainer = document.getElementById("premieres");
premieresContainer.style.position = "relative";
premieresContainer.appendChild(prevBtn);
premieresContainer.appendChild(nextBtn);

const styleTag = document.createElement("style");
styleTag.innerHTML = `
.premiere-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  z-index: 10;
}
.prev-btn { left: 5px; }
.next-btn { right: 5px; }
`;
document.head.appendChild(styleTag);

prevBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  premiereOffset -= cardWidth;
  if (premiereOffset < 0) premiereOffset = cardWidth * (premieresInner.children.length - 1);
  premieresInner.style.transform = `translateX(-${premiereOffset}px)`;
  resetInterval();
});

nextBtn.addEventListener("click", () => { slidePremieres(); resetInterval(); });

function resetInterval() {
  clearInterval(premiereInterval);
  premiereInterval = setInterval(slidePremieres, 5000);
}

// ===== TOUCH SUPPORT =====
let startX = 0;
let isDragging = false;

premieresInner.addEventListener("touchstart", e => { startX = e.touches[0].clientX; isDragging = true; });
premieresInner.addEventListener("touchmove", e => {
  if (!isDragging) return;
  const diff = startX - e.touches[0].clientX;
  if (diff > 30) { slidePremieres(); resetInterval(); isDragging = false; }
  if (diff < -30) { prevBtn.click(); isDragging = false; }
});
premieresInner.addEventListener("touchend", () => { isDragging = false; });
