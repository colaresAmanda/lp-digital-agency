function toggleMenu() {
  const toggleMenuBtn = document.querySelector(".toggle-menu");
  const nav = document.querySelector("nav");

  toggleMenuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");
  });

  // Add a scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Check the scroll position
    if (window.scrollY > 100) {
      // You can change 100 to the desired scroll threshold
      // Add a class to change the background color
      nav.classList.add("bg");
    } else {
      // Remove the class to revert to the original background color
      nav.classList.remove("bg");
    }
  });
}

toggleMenu();
