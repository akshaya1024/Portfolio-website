/* Add your real links here. Anything left empty stays disabled; nothing is invented. */
const LINKS = {
resume: "assets/Akshaya_S_Resume.pdf",
email: "mailto:akshayavanitha24@gmail.com",
phone: "tel:+917200364293",
github: "https://github.com/akshaya1024",
linkedin: "https://www.linkedin.com/in/akshaya-s-11547941",

"library-github": "https://github.com/akshaya1024/Digital-book-Hub",
"meesho-github": "https://github.com/akshaya1024/frontend-project",
"meesho-demo": "https://akshaya1024.github.io/frontend-project/",
"employee-github": "https://github.com/akshaya1024/Employee-Management-System",
"atm-github": "https://github.com/akshaya1024/ATM-Project"
};

let missing = 0;
document.querySelectorAll("[data-link]").forEach(a => {
  const url = LINKS[a.dataset.link];
  if (url) {
    a.href = url;
    if (!url.startsWith("mailto:") && !url.startsWith("tel:") && !url.startsWith("assets/")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    if (a.dataset.link !== "resume") a.removeAttribute("download");
  } else {
    a.removeAttribute("href"); a.removeAttribute("download");
    a.setAttribute("aria-disabled", "true"); a.title = "Link not added yet"; missing++;
  }
});
if (missing) document.getElementById("note").hidden = false;

const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

document.getElementById("yr").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".menu a[href^='#']")];
  new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" }).observe && sections.forEach(s =>
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + s.id));
    }), { rootMargin: "-45% 0px -50% 0px" }).observe(s));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".card,.pcard,.timeline li,.stats div").forEach(el => { el.classList.add("reveal"); io.observe(el); });
}
