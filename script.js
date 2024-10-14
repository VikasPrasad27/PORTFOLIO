function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
 const themetoggle = document.getElementById("theme-toggle");
 const body = document.body

 themetoggle.addEventListener("click",()=>{
  body.classList.toggle("dark-mode");
 });