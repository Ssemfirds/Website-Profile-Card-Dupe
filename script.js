// Navigasi antar halaman: home -> social -> portfolio
const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach((page) => page.classList.toggle("active", page.id === id));
}

// Semua tombol yang punya atribut data-go akan membuka halaman tujuannya
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

// Tombol Escape = kembali satu halaman
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const active = document.querySelector(".page.active");
  if (active.id === "portfolio") showPage("social");
  else if (active.id === "social") showPage("home");
});