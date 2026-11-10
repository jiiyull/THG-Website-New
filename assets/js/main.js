"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".mobile-toggle");
  const navigation = document.getElementById("navigation");
  if (!button || !navigation) return;
  button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.setAttribute("aria-expanded", String(navigation.classList.contains("open")));
  });
});
