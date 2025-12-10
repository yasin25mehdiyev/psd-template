const openBtn = document.getElementById("menuOpen");
const closeBtn = document.getElementById("menuClose");
const overlay = document.getElementById("menuOverlay");
const wrapper = document.getElementById("mobileMenuWrapper");
const menu = document.getElementById("mobileMenu");

const level1 = document.getElementById("menuLevel1");
const level2 = document.getElementById("menuLevel2");
const submenuItems = document.getElementById("submenuItems");
const submenuTitle = document.getElementById("submenuTitle");
const submenuBack = document.getElementById("submenuBack");

const menuData = {
  campaigns: ["Special Offers", "Weekly Deals", "Clearance", "New Arrivals"],
  personal: ["Hair Care", "Body Care", "Oral Care", "Deodorants", "Men Personal Care"],
  skin: ["Facial Treatment", "Hand & Face Care", "Masks", "Natural Skin Products", "Dermocosmetics"],
  makeup: ["Face", "Eyes", "Lips", "Nails", "Make-up Accessories"],
  mother: ["Baby Food", "Diapers & Wipes", "Baby Care", "Mother Care", "Maternity Products"],
  healthy: ["Vitamins & Supplements", "Sport Nutrition", "Medical Products", "Health Devices"],
  brands: ["Watsons", "L'Oréal", "Maybelline", "Nivea", "Garnier", "Gillette"]
};

/* OPEN */
openBtn?.addEventListener("click", () => {
  wrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    menu.classList.remove("-translate-x-full");
  });
});

/* CLOSE */
function closeMenu() {
  menu.classList.add("-translate-x-full");
  document.body.style.overflow = "";
  setTimeout(() => wrapper.classList.add("hidden"), 300);
  level1.classList.remove("-translate-x-full");
}

closeBtn?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);


/* BACK */
submenuBack?.addEventListener("click", () => {
  level1.classList.remove("-translate-x-full");
  level2.classList.add("translate-x-full");
});


/* FOOTER ACCORDION (MOBILE) */
document.querySelectorAll(".footer-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector("i");

    const isOpen = !content.classList.contains("hidden");

    // Close all others (optional, accordion behavior)
    document.querySelectorAll(".footer-content").forEach(c => {
      c.classList.add("hidden");
    });
    document.querySelectorAll(".footer-toggle i").forEach(i => {
      i.classList.remove("rotate-180");
    });

    // Toggle clicked one
    if (!isOpen) {
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");
    }
  });
});
