export default function animaScroll() {
  const titulosToAnimate = document.querySelectorAll("[data-anime='titulo']");
  const skillsToAnimate = document.querySelectorAll("[data-anime='skill']");
  const worksRightToAnimate = document.querySelectorAll(
    "[data-anime='work-right']"
  );
  const worksLeftToAnimate = document.querySelectorAll(
    "[data-anime='work-left']"
  );

  const windowTrigger = window.innerHeight * 0.75;

  function animateTitulo() {
    titulosToAnimate.forEach((titulo) => {
      const sectionTop = titulo.getBoundingClientRect().top - windowTrigger;
      sectionTop <= 0 && titulo.classList.add("scroll-right");
    });
  }

  async function addClassSkills(skill, cont) {
    await setTimeout(() => {
      skill.classList.add("scroll-down");
    }, cont);
  }

  function animateSkills() {
    let cont = 0;
    skillsToAnimate.forEach((skill) => {
      const sectionTop = skill.getBoundingClientRect().top - windowTrigger;
      sectionTop <= 0 && sectionTop >= -200 && addClassSkills(skill, cont);
      cont += 200;
    });
  }

  function animateWork() {
    worksRightToAnimate.forEach((work) => {
      const sectionTop = work.getBoundingClientRect().top - windowTrigger;
      sectionTop <= 0 && work.classList.add("scroll-left");
    });
    worksLeftToAnimate.forEach((work) => {
      const sectionTop = work.getBoundingClientRect().top - windowTrigger;
      sectionTop <= 0 && work.classList.add("scroll-right");
    });
  }

  function scrollDown() {
    animateTitulo();
    animateSkills();
    animateWork();
  }

  window.addEventListener("scroll", scrollDown);
}
