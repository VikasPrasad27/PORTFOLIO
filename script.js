function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
 const themetoggle = document.getElementById("theme-toggle");
 const body = document.body

 document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.qualification__button');
  const contents = document.querySelectorAll('.qualification__content');

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          // Remove active class from all contents
          contents.forEach(content => {
              content.classList.remove('qualification__active');
          });
          // Remove active class from all tabs
          tabs.forEach(button => {
              button.classList.remove('qualification__active');
          });

          // Add active class to the clicked tab and content
          const target = document.querySelector(tab.dataset.target);
          target.classList.add('qualification__active');
          tab.classList.add('qualification__active');
      });
  });
});
