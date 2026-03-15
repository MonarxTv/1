```javascript
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

// BEPUL TUGMA
btn1.addEventListener("click", () => { 
  window.location.href = "2index.html";
});

// PREMIUM BUTTON – modal ochish
btn2.addEventListener("click", () => { 
  loginModal.style.display = "flex"; 
});

// TELEFON – faqat raqam
phoneInput.setAttribute("inputmode", "numeric");

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "");
});

// PAROL – faqat raqam va 5 ta
passwordInput.setAttribute("inputmode", "numeric");

passwordInput.addEventListener("input", () => {

  passwordInput.value = passwordInput.value.replace(/\D/g, "");

  if(passwordInput.value.length > 5){
    passwordInput.value = passwordInput.value.slice(0,5);
  }

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

  const user = validUsers.find(
    u => u.phone === phone && u.password === hash
  );

  if(user){

    localStorage.setItem("premiumUser", phone);

    loginModal.style.display = "none";

    window.location.href = "3index.html";

  } else {

    status.innerText = "Telefon yoki parol xato";

  }

});

// ENTER BOSILSA LOGIN
passwordInput.addEventListener("keyup", (e) => {

  if(e.key === "Enter"){
    loginBtn.click();
  }

});

// MODALNI FON BOSILSA YOPISH
loginModal.addEventListener("click", (e) => {

  if(e.target === loginModal){
    loginModal.style.display = "none";
  }

});
```
