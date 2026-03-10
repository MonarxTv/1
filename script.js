const freeBtn = document.getElementById("freeBtn");
const premiumBtn = document.getElementById("premiumBtn");
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const status = document.getElementById("status");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

/* ===== PREMIUM USERLAR (HASH KO‘RINISHIDA) ===== */
const validUsers = [
  { phone: "332630001", password: CryptoJS.SHA256("56964").toString() },
  { phone: "987654321", password: CryptoJS.SHA256("54321").toString() },
  { phone: "901112233", password: CryptoJS.SHA256("11111").toString() }
];

/* ===== FREE BUTTON ===== */
freeBtn.addEventListener("click", () => {
  window.location.href = "https://kholkuziev.github.io/RTV/";
});

/* ===== PREMIUM BUTTON ===== */
premiumBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
  phoneInput.focus();
});

/* ===== FAQAT RAQAM KIRITISH ===== */
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "");
});

/* ===== LOGIN FUNCTION ===== */
loginBtn.addEventListener("click", () => {
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  if (phone.length !== 9) {
    status.innerText = "Oxirgi 9 raqamni kiriting!";
    return;
  }

  if (password.length !== 5) {
    status.innerText = "Parol 5 ta belgi bo‘lishi kerak!";
    return;
  }

  const hash = CryptoJS.SHA256(password).toString();

  const user = validUsers.find(
    u => u.phone === phone && u.password === hash
  );

  if (user) {
    localStorage.setItem("premiumUser", phone);
    window.location.href = "https://kholkuziev.github.io/RTV/";
  } else {
    status.innerText = "Telefon raqam yoki parol noto‘g‘ri!";
  }
});

/* ===== MODAL YOPISH ===== */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") loginModal.style.display = "none";
});

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
});

/* ===== ENTER BOSILSA LOGIN ===== */
passwordInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") loginBtn.click();
});
