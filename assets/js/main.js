/*====== MENU =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("show");
  });
});

/*====== RELLAX =====*/
var rellax = new Rellax(".parallax");

/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 30,
  ease: "expo.out",
});
gsap.from(".nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 0.7,
  y: 30,
  ease: "expo.out",
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 0.7,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});

/*Text*/
gsap.from(".home__title", {
  opacity: 0,
  duration: 1,
  delay: 1.3,
  y: 35,
  ease: "expo.out",
});
gsap.from(".home__subtitle", {
  opacity: 0,
  duration: 1,
  delay: 1.1,
  y: 35,
  ease: "expo.out",
});

/*Scroll*/
gsap.from(".home__scroll", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
});
gsap.delayedCall(1.7, () => {
  document.querySelector(".home__title .highlight").classList.add("active");
});

/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
  duration: 2500,
  reset: true,
});

/*Data*/
sr.reveal(".section__data", { origin: "left", distance: "70px" });

/*Imgs*/
sr.reveal(".section__img", { origin: "left", distance: "90px", delay: 200 });

/*Resume Section*/
sr.reveal(".resume-skills", {
  origin: "left",
  distance: "70px",
  beforeReveal: () => {
    const fills = document.querySelectorAll(".skill__fill");
    fills.forEach((fill) => {
      fill.style.width = "0";
    });
    gsap.to(fills, {
      width: (i) => fills[i].dataset.level,
      duration: 1,
      ease: "bounce.out",
      stagger: 0.2,
    });
  },
});
sr.reveal(".resume-download", {
  origin: "right",
  distance: "90px",
  delay: 200,
});

/*Projects Section*/
sr.reveal(".project-card", {
  origin: "bottom",
  distance: "50px",
  interval: 200, 
  easing: "ease-in-out",
  reset: true     
});

/*====== FADE OUT LOADER ======*/
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 1000);
  });
  
/*====== 3D TILT FOR PROJECT SECTION CARDS ======*/
document.querySelectorAll('.project-card').forEach(card => {
  const inner = card.querySelector('.project-card__inner');
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;   // ±10°
    const rotateX = ((y / rect.height) - 0.5) * -20; // ±10°
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateX(0) rotateY(0)';
  });
});

