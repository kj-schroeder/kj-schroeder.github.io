document.addEventListener("DOMContentLoaded", () => {

  /* NAVIGATION */

  // Alle Elemente mit der Klasse "menu-collapsed" auswählen
  const menuItems = document.querySelectorAll(".menu-collapsed");

  // Durch alle Elemente iterieren und einen Click-Event-Listener hinzufügen
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      // Klasse "menu-expanded" toggeln
      item.classList.toggle("menu-expanded");
    });
  });

  const elements = document.querySelectorAll('.scrollFade');

  const checkVisibility = () => {
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const offset = 100; // Puffer in Pixeln

      if (rect.top <= windowHeight - offset && rect.bottom >= offset) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();

  //Modal
  const impressumModal = document.getElementById('impressumModal');
  const impressumLink = document.querySelector('#impressumLink');
  const closeBtn = document.getElementById('impressumClose');

  impressumLink.addEventListener('click', function (e) {
    e.preventDefault();
    impressumModal.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    impressumModal.classList.remove('active');
  });

  // ESC-Taste schließt das Modal
  document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
      impressumModal.classList.remove('active');
    }
  });
});