const translations = {
  ru: {
    nav_home: "Главная",
    nav_learning: "Обучение",
    nav_courses: "Курсы",
    nav_about: "О нас",
    hero_title: "Бесплатное образование для каждого",
    hero_text: "learnit.tj — платформа для бедных и талантливых учеников",
    edu_title: "Как мы обучаем",
    edu_how_title: "Как мы учим",
    edu_how_text: "Теория + практика + проекты",
    edu_what_title: "Чему мы учим",
    edu_what_text: "IT, языки, кибербезопасность",
    edu_more_title: "Подробнее",
    edu_more_text: "Более 100 бесплатных курсов",
    edu_button: "Начать обучение",
    courses_title: "Наши курсы",
    course_en_title: "Английский язык",
    course_en_text: "С нуля до B2",
    course_web_title: "Web-разработка",
    course_web_text: "HTML, CSS, JS",
    course_sec_title: "Кибербезопасность",
    course_sec_text: "Этичный хакинг",
    about_title: "О платформе",
    about_text: "learnit.tj создана для помощи детям с финансовыми трудностями."
    hero_title: "Бесплатное образование для всех",
    hero_subtitle: "Учись бесплатно и меняй своё будущее"
  },
  en: {
    nav_home: "Home",
    nav_learning: "Learning",
    nav_courses: "Courses",
    nav_about: "About",
    hero_title: "Free education for everyone",
    hero_text: "learnit.tj is a free educational platform",
    edu_title: "How We Teach",
    edu_how_title: "Learning process",
    edu_how_text: "Theory + practice + projects",
    edu_what_title: "What we teach",
    edu_what_text: "IT, languages, cybersecurity",
    edu_more_title: "More",
    edu_more_text: "Over 100 free courses",
    edu_button: "Start learning",
    courses_title: "Our courses",
    course_en_title: "English language",
    course_en_text: "From zero to B2",
    course_web_title: "Web development",
    course_web_text: "HTML, CSS, JS",
    course_sec_title: "Cybersecurity",
    course_sec_text: "Ethical hacking",
    about_title: "About platform",
    about_text: "learnit.tj helps students with financial difficulties."
    hero_title: "Free education for everyone",
    hero_subtitle: "Learn for free and change your future"
  },
  tj: {
    nav_home: "Асосӣ",
    nav_learning: "Омӯзиш",
    nav_courses: "Курсҳо",
    nav_about: "Дар бораи мо",
    hero_title: "Маорифи ройгон барои ҳама",
    hero_text: "Платформаи таълимии ройгон",
    edu_title: "Тарзи омӯзиш",
    edu_how_title: "Чӣ гуна меомӯзем",
    edu_how_text: "Назария + амалия + лоиҳаҳо",
    edu_what_title: "Чиро меомӯзем",
    edu_what_text: "IT, забонҳо, амнияти киберӣ",
    edu_more_title: "Маълумоти бештар",
    edu_more_text: "Зиёда аз 100 курс",
    edu_button: "Оғози омӯзиш",
    courses_title: "Курсҳои мо",
    course_en_title: "Забони англисӣ",
    course_en_text: "Аз сифр то B2",
    course_web_title: "Веб-барномасозӣ",
    course_web_text: "HTML, CSS, JS",
    course_sec_title: "Киберамният",
    course_sec_text: "Хакинги этикӣ",
    about_title: "Дар бораи платформа",
    about_text: "learnit.tj барои кӯдакони ниёзманд сохта шудааст."
    hero_title: "Маорифи ройгон барои ҳама",
    hero_subtitle: "Бепул омӯз ва ояндаи худро тағйир деҳ"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang") || "ru");

  document.getElementById("langSwitcher").addEventListener("change", e => {
    setLanguage(e.target.value);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
});

const languageSelect = document.getElementById("languageSelect");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
});

const savedLang = localStorage.getItem("lang") || "ru";
languageSelect.value = savedLang;
setLanguage(savedLang);
