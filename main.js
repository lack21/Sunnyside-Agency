// lear
// Sunnyside Agency

window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelector(".links");
  const linksBtn = document.querySelector(".links-btn");

  linksBtn.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});
