// ===== DATA =====
const shortsData=[
{src:"https://preview.redd.it/opinions-on-soldier-boy-v0-h9dxh5qztabd1.jpeg?width=640&crop=smart&auto=webp&s=dd4cb60ee25871a35872600f779fc996cf4e8872",video:"https://www.youtube.com/embed/4u16jsspB4s?autoplay=1&mute=0&controls=1"},{src:"https://cdn.fastora.uz/backdrop_8146002445_1764176094.jpg",video:"https://www.youtube.com/embed/akJ2pkIETUI?autoplay=1&mute=0&controls=1"}
];

const genresData=["Jangari","Fantastika","Qo‘rqinchli","Kriminal","Triller","Komediya","Harbiy"];

const moviesData=[
  {
    title:"G'aroyib odam 1-qism",
    sliderIcon:"https://cdn.fastora.uz/backdrop_8146002445_1764176094.jpg",
    image:"https://cdn.fastora.uz/poster_8146002445_1764176088.jpg",
    video:["https://fayllar1.ru/29/Seriallar/G'aroyib odam/G'aroyib odam 1-qism 480p (asilmedia.net).mp4","https://fayllar1.ru/29/Seriallar/G'aroyib odam/G'aroyib odam 2-qism 480p (asilmedia.net).mp4"],
    type:"series",
    genre:"Fantastika • Sarguzasht",
    desc:"G'aroyib odam serialining 1-qismi.",
    actors:[],
    images:[
      "https://cdn.fastora.uz/backdrop_8146002445_1764867277.jpg",
      "https://cdn.fastora.uz/poster_8146002445_1764867256.jpg"
    ]
  },
    { title:"Yigitlar / The boys",
      sliderIcon:"https://images.thedirect.com/media/photos/1boys_uChbHkz.png", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://m.media-amazon.com/images/I/51qqRny2YLL.jpg",
    video:["https://vk.com/video_ext.php?oid=-236571148&id=456239018&hd=2","https://vk.com/video_ext.php?oid=-236571148&id=456239025&hd=2","https://vk.com/video_ext.php?oid=-236571148&id=456239026&hd=2" ],
    type:"series",
    genre:"Qo‘rqinchli • Triller • Fantastika",
    desc:"Serialning harakati 2000-yillarda super qahramonlar mavjud bo'lgan dunyoda sodir bo'ladi. Ular hamma biladigan va sevadigan haqiqiy yulduzlardir. Ammo mukammal jabhaning orqasida giyohvand moddalar va jinsiy aloqaning ancha qorong'i dunyosi yotadi va hayotdagi belgilarning aksariyati eng yoqimli odamlar emas. Superqahramonlarni nazorat qilish uchun Markaziy razvedka boshqarmasi norasmiy ravishda Yigitlar nomi bilan mashhur bo'lgan maxsus otryadni yaratadi, uning qo'pol a'zolari har doim takabbur qahramonni eng shafqatsiz tarzda uning o'rniga qo'yishga tayyor.",
     actors: [ {tmdbId:1372}, {tmdbId:1030513}, {tmdbId:60373}, {tmdbId:990393}, {tmdbId:198847}, {tmdbId:1461608}, {tmdbId:10964}, {tmdbId:1550587}, {tmdbId:60899}, {tmdbId:115146}, {tmdbId:49624}, {tmdbId:1157294}, {tmdbId:229422}, {tmdbId:1443420}, {tmdbId:1696015}, {tmdbId:4808}, {tmdbId:47296}, {tmdbId:3084833}, {tmdbId:1181426}, {tmdbId:11108} ],
    images:[
      "https://bloody-disgusting.com/wp-content/uploads/2020/11/the-boys-gore.png",     "https://pyxis.nymag.com/v1/imgs/d12/177/4ef088a72d82ae2c1c8424ed7baf4c8e98-the-boys-ep-5.2x.rsocial.w600.jpg",
      "https://fwmedia.fandomwire.com/wp-content/uploads/2025/12/06123350/the-boys-season-5-starlight-twist-theory.jpg",
"https://www.giantfreakinrobot.com/wp-content/uploads/2024/07/the-boys-billy-butcher-tentacles-karl-urban-900x506.jpg"
    ]
  }, 
      {title:"Kelajak Urushi",
   sliderIcon:"https://api.toolofna.com/wp-content/uploads/2022/09/The_Tomorrow_War-1024x576-1.jpg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
  image:"https://m.media-amazon.com/images/S/pv-target-images/63cd50771d0b5c6c8bb5077db8de02fbbe298754744d6f96b173e6c7fd549214.jpg",
    video:["https://vk.com/video_ext.php?oid=-230696351&id=456239053&hd=2"],
    type:"movie",
    genre:"Jangari • Triller • Fantastika",
    desc:"Kelajakda begona irq bilan vayron qiluvchi ziddiyat mavjud. Urush oqimini burish uchun olimlar o'tmishdagi askarlarni o'zlarining armiyasiga jalb qilishni boshlaydilar.",
  actors: [ {tmdbId:73457},{tmdbId:63312},{tmdbId:18999},{tmdbId:2072566},{tmdbId:56679},{tmdbId:92572},{tmdbId:1429453} ],
    images:[
      "https://images.bauerhosting.com/legacy/media/60d6/1f31/c55a/dfdc/00ea/3770/tomorrow-war-1.jpg?ar=16:9&fit=crop&crop=top", 
      "https://www.framestore.com/sites/default/files/2023-11/The-Tomorrow-War-Case-Study-Header-1980x820.jpg", 
       "https://www.syfy.com/sites/syfy/files/the-tomorrow-war-twar_fg_feature_00512211_still01185r_rgb.jpg",
      "https://ew.com/thmb/XUa27eLzN2sdlUobJhuCzNJQL84=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-tomorrow-war-1-bede5ae8a52541afaefe6f30880690d5.jpg"]
}, 
  {title:"Yirtqich Yovvoyi yerlar",
   sliderIcon:"https://cdn.fastora.uz/backdrop_8146002445_1764176094.jpg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
  image:"https://cdn.fastora.uz/poster_8146002445_1764176088.jpg",
    video:["https://vk.com/video_ext.php?oid=-234817045&id=456239031&hd=2"],
    type:"movie",
    genre:"Jangari • Triller • Fantastika",
    desc:"O'z urug'idan quvilgan yosh Yirtqich buzilgan androidda kutilmagan ittifoqchi topadi va asosiy dushmanni qidirish uchun xavfli safarga chiqadi.",
  actors: [ {tmdbId:18050} ],
    images:[
      "https://cdn.fastora.uz/backdrop_8146002445_1764867277.jpg", 
      "https://cdn.fastora.uz/poster_8146002445_1764867256.jpg", 
       "https://cdn.fastora.uz/backdrop_8146002445_1764867486.jpg",
      "https://substackcdn.com/image/fetch/$s_!cgMh!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77c141f6-2cd7-4abf-91d7-678fa0b7f08f_2160x905.jpeg"]
}, 
  
   { title:"Yengilmas / Invinsible",
      sliderIcon:"https://miro.medium.com/1*TQusJA0dGM2IA7H_VrqOsw.jpeg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://upload.wikimedia.org/wikipedia/en/0/09/Invincible_season_2_Poster.jpg",
    video:["https://vk.com/video_ext.php?oid=-230696351&id=456239035&hd=2","premium","premium","premium","premium","premium","premium","premium"],
    type:"anime",
    genre:"Triller • Jangari • Fantastika",
    desc:"17 yoshli Mark Greyson er yuzidagi eng kuchli superqahramonning o'g'lidir va tez orada uning o'zi ham super kuchlarga ega bo'lishi va ularni boshqarishni o'rganishi kerak.",
  actors: [],
    images:[
      "https://images.immediate.co.uk/production/volatile/sites/3/2021/03/Omni-Man-6c9cb30.jpg",
      "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2025/02/invincible-season-3-white-room-turns-red.jpg?w=1200&h=675&fit=crop",
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/09/invinciblemark.jpg",
"https://pbs.twimg.com/media/G_NLJNRWsAA-AVj.jpg"
    ]},  
  
  { title:"Godzilla Monarx maxluqlar merosi ",
      sliderIcon:"https://img.kinochilar.com/uploads/posts/2023-12/6532c9061ce0c.jpg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://thumb.cineserie.com/media/265449/2641354.jpg",
    video:["https://vk.com/video_ext.php?oid=-230696351&id=456239034&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239038&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239039&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239040&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239041&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239047&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239043&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239044&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239045&hd=2","https://vk.com/video_ext.php?oid=-230696351&id=456239046&hd=2"],
    type:"series",
    genre:"Qo‘rqinchli • Fantastika",
    desc:"Godzillaning San-Frantsiskoga hujumidan omon qolgan Keyt yana bir bor hayratlanarli sirdan hayratda qoladi. U oilasi va Monarx deb nomlanuvchi sirli tashkilot haqidagi haqiqatni bilish uchun dunyo bo'ylab sayohatga chiqadi.",
     actors: [ {tmdbId:1434487}, {tmdbId:986808}, {tmdbId:6856} ],
    images:[
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25144523/Monarch_Legacy_of_Monsters_Photo_010315.jpg",
      "https://www.4pareteita.it/wp-content/uploads/2024/04/Monarch-Legacy-Of-Monsters-confermata-la-seconda-stagione.jpg",
      "https://www.indiewire.com/wp-content/uploads/2023/11/Monarch-Legacy-of-Monsters-Godzilla-TV-show-e1700258855502.jpg",
"https://vfxvoice.com/wp-content/uploads/2024/02/PIX-23-HRG_102_48_0040_x1179.jpg"
    ]
  },  
  
   {title:"Shavqat",
   sliderIcon:"https://external-preview.redd.it/mercy-2026-v0-Quem9REyvU-ct60ZHxjL5Gf2xKafX_tksZtAvKPHLM4.jpeg?auto=webp&s=33e53d4ca581f18d248e3b0d1bec8277d01ded9e", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
  image:"https://regalcdn.azureedge.net/CW/Mercy/HO00014089/TV_SmallPosterImage/20251217-114928385.jpg",
    video:["https://vk.com/video_ext.php?oid=-232370190&id=456239063&hd=2"],
    type:"movie",
    genre:"Jangari • Kriminal • Fantastika",
    desc:"Yaqin kelajak, Los-Anjeles. Politsiyachi Kris Reyven o‘z xotinini o‘ldirishda ayblanib hibsga olinadi. 90 daqiqa ichida Kris sudya va jallod vazifasini bajaruvchi ilg‘or sun’iy intellektga o‘zining aybsizligini isbotlashi kerak.",
      actors: [ {tmdbId:73457}, {tmdbId:933238}, {tmdbId:82809} ],
    images:[
      "https://www.kinonews.ru/insimgs/2025/shotimg/shotimg137205_5.webp", 
      "https://www.flickeringmyth.com/chris-pratt-faces-trial-by-ai-in-trailer-for-sci-fi-thriller-mercy/mercy_day2_41624_01243_r/", 
       "https://media.outnow.ch/Movies/Bilder/2026/Mercy/009.jpg",
      "https://www.vitalthrills.com/wp-content/uploads/2025/10/mercynycc2.jpg"]
}, 
  
    {title:"Harbiy Asir",
   sliderIcon:"https://www.martialjournal.com/wp-content/uploads/2026/02/POW1.jpg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
  image:"https://m.media-amazon.com/images/M/MV5BN2JjMjNjNzItYWIzZS00YTliLWJjNjMtODAzYjI3ZGRmZGZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    video:["https://vk.com/video_ext.php?oid=-230237290&id=456239074&hd=2"],
    type:"movie",
    genre:"Jangari • Triller • Harbiy",
    desc:"Britaniya maxsus kuchlari SAS zobiti Jeyms Rayt yaponlar tomonidan asirga olinadi va Filippindagi harbiy asirlar lagerida saqlanadi. Mashhur Bataan o'lim marshiga yuborilishidan oldin, qo'riqchilarni ko'ngilxush qilish uchun asirlarni shafqatsiz, o'lim bilan yakunlanadigan janglarda qatnashishga majbur qilishadi. Umidsiz vaziyatda qolgan Rayt o'z safdoshlari uchun so'nggi umidga aylanadi.",
  actors: [ {tmdbId:78110}, {tmdbId:172994}, {tmdbId:1949603} ],
    images:[
      "https://keithandthemovies.com/wp-content/uploads/2025/10/pow1.png?w=750", 
      "https://i0.wp.com/www.bulletproofaction.com/wp-content/uploads/2025/09/FightPOW.jpg?ssl=1", 
       "https://i0.wp.com/www.bulletproofaction.com/wp-content/uploads/2025/09/CoponAdkinsPOW.jpg?ssl=1",
      "https://m.media-amazon.com/images/M/MV5BYTQ1NzE2ZjAtMGE4Mi00N2JkLTkxM2ItOTBmZTBmMzJkYzRiXkEyXkFqcGc@._V1_.jpg"]
}, 

 
  {title:"O'lmas SISU",
   sliderIcon:"https://d6isf1yxni2j5.cloudfront.net/large_escena_sisu_1cb54705e2.jpg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
  image:"https://upload.wikimedia.org/wikipedia/en/c/c0/Sisu_Road_to_Revenge.jpg",
    video:["https://vk.com/video_ext.php?oid=-186124728&id=456247864&hd=2"],
    type:"movie",
    genre:"Jangari • Kriminal • Harbiy",
    desc:"Finlyandiya, 1944 yil. Nemislar orqalaridan kuygan tuproqni qoldirib, orqaga chekinadilar. Finlyandiyaning sobiq askari Laplandiyada oltin konini topadi, lekin uyiga qaytayotganda u fashistlar otryadiga duch keladi.",
  actors: [ {tmdbId:148012}, {tmdbId:76547}, {tmdbId:116265} ],
    images:[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBf1g-ceYkz8C6jd58D4SbrdMjvSNzy7JCw&s", 
      "https://cdn.kayiprihtim.com/wp-content/uploads/2025/08/Sisu-2-Ilk-Fragman.jpg", 
       "https://muropaketti.com/wp-content/uploads/2025/10/sisu-2-stephen-lang-1024x683.jpg",
      "https://i-viaplay-com.akamaized.net/viaplay-prod/930/308/1765443567-bf48369a318961c5224f8d40063b060972f67e04_SE.jpg?width=1600&height=900"]
}, 

  
{title:"Bo'ysunmas 2 / Boyka",
  image:"https://preview.redd.it/undisputed-2-v0-pcczpx29n7mf1.png?width=640&crop=smart&auto=webp&s=aa8d1afa1e0f76b09c489844ff62d44e72870283",
    video:["https://vk.com/video_ext.php?oid=-186124728&id=456240289&hd=2"],
    type:"movie",
    genre:"Jangari ",
    desc:"Rossiyaga tashrifi chog'ida boks bo'yicha sobiq jahon chempioni tasodifan eng yuqori davlat amaldorlari bilan jinoiy to'qnashuvga tushib qoladi va unga qarshi soxta ish uydiriladi. Qattiq rus qamoqxonasidan o'tib, uyga qaytish uzoq va qiyin bo'ladi...",
  actors: [ {tmdbId:64856}, {tmdbId:78110}, {tmdbId:29068} ],
    images:[
      "https://m.media-amazon.com/images/S/pv-target-images/a99df028fd898b5d0f4fc0c20407daf5f2a76deed4f29dcff24ab02a3eb8e0aa.png", 
      "https://live.staticflickr.com/7037/6790917890_2b0d5be86d_h.jpg", 
       "https://upload.wikimedia.org/wikipedia/it/a/ae/Undisputed_II_-_Last_M%D0%B0n_Standing.png",
      "https://scottadkins.com/images/undisputed-ii--last-man-standing_gallery4_main.jpg"]
}, 
  
  {title:"O'rgimchak odam: Uyga yo'l yo'q",
       sliderIcon:"https://media.vanityfair.com/photos/612508e0b105ece2f5fa7ea3/master/pass/spider-man-no-way-home-film-still-01.jpg", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://freekino.net/storage/uploads/poster/orgimchak-odam-uyga-yol-yoq_1640324133.jpg",
    video:["https://vk.com/video_ext.php?oid=-230288707&id=456239244&hd=2"],
    type:"movie",
    genre:"Fantastika • Sarguzasht",
    desc:"Peter Parker yangi sarguzashtlarga kiradi.",
  actors: [ {tmdbId:1136406}, {tmdbId:505710},{tmdbId:71580},{tmdbId:134},{tmdbId:5293},{tmdbId:37625},{tmdbId:2219}, {tmdbId:1265629},{tmdbId:30082},{tmdbId:15277} ,{tmdbId:18999},{tmdbId:1649152},{tmdbId:3141},{tmdbId:41089}],
    images:[
      "https://ychef.files.bbci.co.uk/1280x720/p0bb670h.jpg", 
      "https://cdn.marvel.com/content/1x/maguiregarfieldholland_opt.jpg"
      , "https://media.gq.com/photos/612523b17624a4b10c7eed7d/16:9/w_1280,c_limit/14.png",
      "https://images.mubicdn.net/images/film/360584/cache-827372-1745500600/image-w1280.jpg?size=800x"]
}, 
  

  {
    title:"Wednesday 2",
      sliderIcon:"https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQYOeCCpkwPAFykI7lEUIouxmiXsvxOnDs_bjQGo2Whf9FrwPXpQ6VmVKlnmMbxHBfqja2iOaEOayofhH0erJrzKxVkRz5-yQZDVFcRWnALggiACpb-9VbXOi6r6bFDT2EIPaW59Vh6GKpjsGRuvP-aASPhs.jpg?r=af7", // ⭐ SHU BO‘LSA SLIDERGA CHIQADI
    image:"https://lh6.googleusercontent.com/proxy/qXI6vibRqi0HKywUtJg-KTxFHe_ecDkcXiLtf3oKU7FNko0Tx1lzo41kAjOoWS34GDo1Nuf10uPylwIKLUTpGcmQgWRXvi2aId8GgD63",
    video:["https://vk.com/video_ext.php?oid=-230696351&id=456239033&hd=2","https://vk.com/video_ext.php?oid=-231301225&id=456239149&hd=2"],
    type:"series",
    genre:"Qo‘rqinchli • Fantastika",
    desc:"Wednesday Adams yangi sarguzashtlar bilan qaytadi.",
  actors: [ {tmdbId:974169}, {tmdbId:2604515}, {tmdbId:3131371}, {tmdbId:40481}, {tmdbId:1908241}, {tmdbId:6886} ],
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
const playerContainer = document.getElementById("playerContainer");
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
const premiumMessage = document.getElementById("premiumMessage");

// ==================== TMDB ====================
const TMDB_API_KEY = "c86f82502e750953b61a3fc9895c95a2";

// ==================== VIDEO PLAYER ====================
function loadVideo(url){
  playerContainer.innerHTML="";
  if(url === "premium"){
    premiumMessage.style.display="block";
    return;
  }
  premiumMessage.style.display="none";
  if(url.endsWith(".mp4")){
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.style.width="100%";
    video.style.height="100%";
    playerContainer.appendChild(video);
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = url.includes("hd=") ? url : (url.includes("?") ? url+"&hd=2": url+"?hd=2");
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    iframe.style.width="100%";
    iframe.style.height="100%";
    playerContainer.appendChild(iframe);
  }
}

// ==================== HOME / MOVIE ====================
function goHome(){
  playerContainer.innerHTML="";
  moviePage.classList.add("hidden");
  home.classList.remove("hidden");
}

// ==================== EPISODES ====================
function changeEpisode(btn, videoUrl){
  document.querySelectorAll(".episodes button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  loadVideo(videoUrl);
}

// ==================== RENDER MOVIE PAGE ====================
async function openMoviePage(item){
  home.classList.add("hidden");
  moviePage.classList.remove("hidden");

  loadVideo(item.video[0]);

  episodesDiv.innerHTML="";
  if(item.video.length>1){
    item.video.forEach((v, idx)=>{
      const btn = document.createElement("button");
      btn.textContent = `${idx+1}-qism`;
      if(idx===0) btn.classList.add("active");
      btn.onclick=()=>changeEpisode(btn, v);
      episodesDiv.appendChild(btn);
    });
  }

  movieTitle.textContent=item.title;
  movieGenre.textContent=item.genre;
  movieDesc.textContent=item.desc;

  await renderActorsTMDB(item.actors);

  movieImages.innerHTML="";
  item.images.forEach(img=>{
    const im=document.createElement("img");
    im.src=img;
    im.style.cursor="pointer";
    im.style.margin="5px";
    im.style.borderRadius="6px";
    im.onclick=()=>{ modalImg.src=img; imageModal.style.display="flex"; };
    movieImages.appendChild(im);
  });
}

// ==================== ACTORS (TMDB + LOCAL) ====================
async function renderActorsTMDB(actors){
  movieActors.innerHTML="";
  for(const actor of actors){
    let actorName=actor.name||"";
    let actorImg=actor.img||"";
    if(actor.tmdbId){
      try{
        const res=await fetch(`https://api.themoviedb.org/3/person/${actor.tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`);
        const data=await res.json();
        actorName=data.name;
        actorImg=data.profile_path ? "https://image.tmdb.org/t/p/w185"+data.profile_path : actorImg;
      } catch(e){ console.log("TMDB error", e);}
    }
    const div=document.createElement("div");
    div.className="actor-item";
    div.innerHTML=`<img src="${actorImg}"><span>${actorName}</span>`;
    div.onclick=()=>showActorMovies(actor.tmdbId);
    movieActors.appendChild(div);
  }
}

async function showActorMovies(actorId){
  try{
    const res=await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${TMDB_API_KEY}&language=en-US`);
    const actorData=await res.json();
    actorModalImg.src=actorData.profile_path ? "https://image.tmdb.org/t/p/w185"+actorData.profile_path : "";
    actorModalName.textContent=actorData.name||"";

    actorMoviesDiv.innerHTML="";
    const localMovies = moviesData.filter(m=>m.actors?.some(a=>a.tmdbId===actorId));
    if(localMovies.length===0){
      actorMoviesDiv.innerHTML=`<p style="color:#fff;padding:10px;">Bu aktyor uchun film topilmadi.</p>`;
    } else {
      localMovies.forEach(item=>{
        const d=document.createElement("div");
        d.className="card";
        d.innerHTML=`<img src="${item.image}"><div>${item.title}</div>`;
        d.onclick=()=>{ closeActorModal(); setTimeout(()=>openMoviePage(item), 100); };
        actorMoviesDiv.appendChild(d);
      });
    }
    actorModal.style.display="flex";
    history.pushState({ actorModal:true }, null, "");
  } catch(err){ console.log(err); }
}

function closeActorModal(){
  actorModal.style.display="none";
  playerContainer.innerHTML="";
}

// ==================== LIST MODAL ====================
function openListModal(items){
  listModalContent.innerHTML="";
  items.forEach(item=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${item.image}"><div>${item.title}</div>`;
    div.onclick=()=>{ openMoviePage(item); closeListModal(); };
    listModalContent.appendChild(div);
  });
  listModal.style.display="flex";
  history.pushState({ listModal:true }, null, "");
}

function closeListModal(){
  listModal.style.display="none";
  playerContainer.innerHTML="";
  history.back();
}

// ==================== PREMIERES ====================
premieresData.forEach(item=>{
  const div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<img src="${item.sliderIcon}"><div>${item.title}</div>`;
  div.onclick=()=>openMoviePage(item);
  premieresInner.appendChild(div);
});

// ==================== MOVIES / SERIES ====================
function renderCards(arr, container){
  container.innerHTML="";
  arr.forEach(item=>{
    const d=document.createElement("div");
    d.className="card";
    d.innerHTML=`<img src="${item.image}"><div>${item.title}</div>`;
    d.onclick=()=>openMoviePage(item);
    container.appendChild(d);
  });
}

renderCards(moviesData.filter(m=>m.type==="movie").slice(0,3), moviesContainer);
renderCards(moviesData.filter(m=>m.type==="series").slice(0,3), seriesContainer);
renderCards(moviesData.filter(m=>m.type==="anime").slice(0,3), animeContainer);

// ==================== SHORTS ====================
let currentShortIndex=0;
function renderShorts(){
  shortsContainer.innerHTML="";
  shortsData.forEach((item, idx)=>{
    const div=document.createElement("div");
    div.className="short";
    div.style.transition="transform 0.5s, opacity 0.5s";
    div.innerHTML=`<img src="${item.src}">`;
    div.onclick=()=>openShort(idx);
    shortsContainer.appendChild(div);
  });
}
function openShort(idx){
  currentShortIndex=idx;
  const item=shortsData[idx];
  shortModal.innerHTML=`
    <div class="back" onclick="closeShort()">← Orqaga</div>
    <iframe src="${item.video}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    <button id="prevShortBtn" style="position:absolute;bottom:20px;left:20px;padding:10px 20px;z-index:10;">Oldingi</button>
    <button id="nextShortBtn" style="position:absolute;bottom:20px;right:20px;padding:10px 20px;z-index:10;">Keyingi</button>
  `;
  shortModal.style.display="flex";
  document.getElementById("nextShortBtn").onclick=()=>nextShort();
  document.getElementById("prevShortBtn").onclick=()=>prevShort();
  history.pushState({ shortModal:true }, null, "");
}
function nextShort(){
  currentShortIndex++;
  if(currentShortIndex>=shortsData.length) currentShortIndex=0;
  openShort(currentShortIndex);
}
function prevShort(){
  currentShortIndex--;
  if(currentShortIndex<0) currentShortIndex=shortsData.length-1;
  openShort(currentShortIndex);
}
function closeShort(){ shortModal.style.display="none"; }

// Dastlab render
renderShorts();

// ==================== GENRES ====================
genresData.forEach(g=>{
  const s=document.createElement("span");
  s.textContent=g;
  s.style.cursor="pointer";
  s.onclick=()=>openListModal(moviesData.filter(m=>m.genre.includes(g)));
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
  const query=searchInput.value.toLowerCase();
  searchResults.innerHTML="";
  if(!query) return;

  const actorRes=await fetch(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}`);
  const actorData=await actorRes.json();
  const actors=actorData.results.filter(a=>a.profile_path);
  if(actors.length>0){
    const actorRow=document.createElement("div");
    actorRow.className="actor-row";
    actors.forEach(actor=>{
      const div=document.createElement("div");
      div.className="actor-card";
      div.innerHTML=`<img src="https://image.tmdb.org/t/p/w185${actor.profile_path}"><span>${actor.name}</span>`;
      div.onclick=()=>{ showActorMovies(actor.id); closeSearch(); };
      actorRow.appendChild(div);
    });
    searchResults.appendChild(actorRow);
  }

  const movies=moviesData.filter(m=>m.title.toLowerCase().includes(query));
  if(movies.length>0){
    const movieRow=document.createElement("div");
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

// ==================== IMAGE MODAL ====================
const imageModal=document.createElement("div");
imageModal.id="imageModal";
imageModal.style.cssText=`
  display:none; position:fixed; top:0; left:0;
  width:100%; height:100%; background:rgba(0,0,0,0.9);
  justify-content:center; align-items:center; z-index:1000;
`;
imageModal.innerHTML=`<img id="modalImg" style="max-width:90%; max-height:90%; border-radius:8px;">
<span id="closeImgModal" style="position:absolute;top:20px;right:30px;font-size:30px;color:#fff;cursor:pointer;">&times;</span>`;
document.body.appendChild(imageModal);
const modalImg=document.getElementById("modalImg");
const closeImgModal=document.getElementById("closeImgModal");
closeImgModal.onclick=()=>{ imageModal.style.display="none"; };

// ==================== PREMIERE SLIDER ====================
let premiereOffset=0;
function getCardWidth(){
  const card=premieresInner.querySelector(".card");
  if(!card) return 0;
  const style=getComputedStyle(card);
  const gap=parseInt(style.marginRight)||12;
  return card.offsetWidth+gap;
}
function slidePremieres(){
  const cardWidth=getCardWidth();
  premiereOffset+=cardWidth;
  if(premiereOffset>=cardWidth*premieresInner.children.length) premiereOffset=0;
  premieresInner.style.transform=`translateX(-${premiereOffset}px)`;
}
let premiereInterval=setInterval(slidePremieres,5000);

// ===== SLIDER BUTTONS =====
const prevBtn=document.createElement("button");
prevBtn.innerText="<"; prevBtn.className="premiere-nav-btn prev-btn";
const nextBtn=document.createElement("button");
nextBtn.innerText=">"; nextBtn.className="premiere-nav-btn next-btn";
const premieresContainer=document.getElementById("premieres");
premieresContainer.style.position="relative";
premieresContainer.appendChild(prevBtn);
premieresContainer.appendChild(nextBtn);
const styleTag=document.createElement("style");
styleTag.innerHTML=`
.premiere-nav-btn{position:absolute;top:50%;transform:translateY(-50%);
background:rgba(0,0,0,0.5);color:#fff;border:none;padding:6px 10px;border-radius:6px;cursor:pointer;z-index:10;}
.prev-btn{left:5px;} .next-btn{right:5px;}
`;
document.head.appendChild(styleTag);
prevBtn.addEventListener("click",()=>{
  const cardWidth=getCardWidth();
  premiereOffset-=cardWidth;
  if(premiereOffset<0) premiereOffset=cardWidth*(premieresInner.children.length-1);
  premieresInner.style.transform=`translateX(-${premiereOffset}px)`;
  resetInterval();
});
nextBtn.addEventListener("click",()=>{ slidePremieres(); resetInterval(); });
function resetInterval(){ clearInterval(premiereInterval); premiereInterval=setInterval(slidePremieres,5000); }

// ===== TOUCH SUPPORT =====
let startX=0,isDragging=false;
premieresInner.addEventListener("touchstart",e=>{ startX=e.touches[0].clientX; isDragging=true; });
premieresInner.addEventListener("touchmove",e=>{
  if(!isDragging) return;
  const diff=startX-e.touches[0].clientX;
  if(diff>30){ slidePremieres(); resetInterval(); isDragging=false; }
  if(diff<-30){ prevBtn.click(); isDragging=false; }
});
premieresInner.addEventListener("touchend",()=>{ isDragging=false; });

// ===== HISTORY POPSTATE =====
window.addEventListener("popstate",()=>{
  if(shortModal.style.display==="flex") closeShort();
  else if(listModal.style.display==="flex") closeListModal();
  else if(actorModal.style.display==="flex") closeActorModal();
  else if(searchModal.style.display==="flex") closeSearch();
});
