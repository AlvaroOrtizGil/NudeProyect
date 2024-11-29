document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");
  
    if (menuIcon) {
      menuIcon.addEventListener("click", () => {
        dropdownMenu.classList.toggle("active");
      });
    } else {
      console.error("No se encontró el ícono del menú.");
    }
  });
  