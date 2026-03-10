const btn1 = document.getElementById("openInChromeBtn");
const btn2 = document.getElementById("premiumBtn");
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

// PREMIUM USERLAR
const validUsers = [
  { phone:"332630001", password:CryptoJS.SHA256("56964").toString() },
  { phone:"987654321", password:CryptoJS.SHA256("54321").toString() },
  { phone:"901112233", password:CryptoJS.SHA256("11111").toString() }
];

// LINK OCHISH
function openLink(url){
  const ua = navigator.userAgent;
  if(/android/i.test(ua)){
    window.location.href = `intent://${url.replace(/^https?:\/\//,'')}#Intent;package=com.android.chrome;scheme=https;end`;
  } else {
    window.open(url,"_blank");
  }
}

// KIRISH BUTTON
btn1.addEventListener("click", () => { 
  openLink("https://kholkuziev.github.io/RTV/"); 
});

// PREMIUM BUTTON – faqat bosilganda modal ochiladi
btn2.addEventListener("click", () => { 
  loginModal.style.display = "flex"; 
});

// TELEFON – faqat raqam, raqamli klaviatura
phoneInput.setAttribute("inputmode", "numeric"); // mobil qurilmalarda raqamli klaviatura
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, ""); // faqat raqam qoldiradi
});

// PAROL – faqat raqam, maksimal 5 belgi
passwordInput.setAttribute("inputmode", "numeric"); // mobil qurilmalarda raqamli klaviatura
passwordInput.addEventListener("input", () => {
  passwordInput.value = passwordInput.value.replace(/\D/g, ""); // faqat raqam
  if(passwordInput.value.length > 5) passwordInput.value = passwordInput.value.slice(0,5); // maksimal 5 belgi
});

// LOGIN
loginBtn.addEventListener("click", () => {
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  if(phone.length !== 9){ 
    status.innerText = "Telefon raqamni kiriting"; 
    return; 
  }
  if(password.length !== 5){ 
    status.innerText = "Parolni kiriting"; 
    return; 
  }

  const hash = CryptoJS.SHA256(password).toString();
  const user = validUsers.find(u => u.phone === phone && u.password === hash);

  if(user){
    localStorage.setItem("premiumUser", phone);
    loginModal.style.display = "none";
    openLink("https://kholkuziev.github.io/RTV2/");
  } else {
    status.innerText = "Telefon yoki parol xato";
  }
});

// ENTER BOSILSA LOGIN
passwordInput.addEventListener("keyup", (e) => { 
  if(e.key === "Enter") loginBtn.click(); 
});

// MODALNI FON BOSILSA YOPISH
loginModal.addEventListener("click", (e) => { 
  if(e.target === loginModal) loginModal.style.display = "none"; 
});
