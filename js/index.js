try {
  var map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map).bindPopup("Our location.").openPopup();
} catch (error) {
  console.log(error.message);
}

const header = document.querySelector(".header");
const scrollBtn = document.querySelector(".btn-scroll-top");

const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;

// setInterval(function () {
//   curSlide++;
//   console.log("hello world");
// }, 2000);

const gotToSlide = function (sNum) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - sNum) * 110}%)`;
  });
};

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="dot" data-slide="${i}"></div>`
    );
  });
};

const activateDot = function (sNum) {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot--active"));

  document
    .querySelector(`.dot[data-slide="${sNum}"]`)
    .classList.add("dot--active");
};

gotToSlide(curSlide);
createDots();
activateDot(curSlide);

const nextSlide = () => {
  if (curSlide < slides.length - 1) {
    curSlide++;
  } else {
    curSlide = 0;
  }
  gotToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = () => {
  if (curSlide > 0) {
    curSlide--;
  } else {
    curSlide = slides.length - 1;
  }
  gotToSlide(curSlide);
  activateDot(curSlide);
};

// auto move slide
// setInterval(nextSlide, 10000);

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    // const slide = e.target.dataset.slide;
    // This is destructuring
    const { slide } = e.target.dataset;
    gotToSlide(slide);
    activateDot(slide);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
};

const obsOps = {
  root: null,
  threshold: 0.4,
};

const observer = new IntersectionObserver(obsCallback, obsOps);

observer.observe(header);

// This part is for blog post

// attaching an event handler to the Button that take the user back to top
document
  .querySelector(".btn-scroll-top")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navigation__nav");
  // selecting all the link on the page that has an href containing a (#) symbol.
  const links = document.querySelectorAll('a[href^="#"]');
  // looping through all the links to attach the event handler to.
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const toggleInput = document.querySelector(".navigation__checkbox");
      toggleInput.checked = false;

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetTop =
          window.innerWidth > 600 ? elementTop - navbarHeight : elementTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// the element that contains the courses.
const coursesGrid = document.getElementById("coursesGrid");
// Courses data
const courses = [
  {
    id: "quran-memorization",
    title: "Qur'an Memorization",
    shortDescription: "Learn to memorize the Holy Qur'an with proper tajweed.",
    fullDescription:
      "This comprehensive course focuses on memorizing the Qur'an using proven techniques and daily practice sessions. Students will learn proper tajweed rules, develop a beautiful recitation style, and establish a strong connection with the Holy Book. The course includes regular assessments, revision strategies, and personalized feedback from experienced teachers.",
    duration: "12 months",
    teacher: "Ustadh Ahmad",
    level: "Beginner to Advanced",
    category: "quran",
    // image:
    //   "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
  {
    id: "tajweed-rules",
    title: "Tajweed Rules Mastery",
    shortDescription: "Master the rules of proper Qur'anic recitation.",
    fullDescription:
      "This course covers all aspects of tajweed rules, from basic to advanced levels. Students will learn the correct pronunciation of Arabic letters, rules of elongation, stopping, and other essential tajweed principles. The course includes practical exercises, audio recordings, and one-on-one feedback sessions.",
    duration: "6 months",
    teacher: "Ustadh Muhammad",
    level: "Intermediate",
    category: "quran",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
  {
    id: "hadith-studies",
    title: "Hadith Studies",
    shortDescription: "Study authentic hadiths and their meanings.",
    fullDescription:
      "This course provides a comprehensive study of authentic hadiths, their chains of narration, and their practical applications in daily life. Students will learn about hadith classification, major hadith collections, and how to understand and implement the teachings of the Prophet Muhammad (peace be upon him).",
    duration: "8 months",
    teacher: "Ustadh Ibrahim",
    level: "Intermediate",
    category: "hadith",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
  {
    id: "islamic-finance",
    title: "Islamic Finance",
    shortDescription: "Learn about Islamic banking and finance principles.",
    fullDescription:
      "This course covers the principles of Islamic finance, including Islamic banking, insurance, and investment. Students will learn about halal financial transactions, modern Islamic financial instruments, and how to apply Islamic financial principles in contemporary settings.",
    duration: "6 months",
    teacher: "Ustadh Omar",
    level: "Intermediate",
    category: "finance",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
];

// function to render the courses
function renderCourses(coursesToRender) {
  coursesGrid.innerHTML = coursesToRender
    .map(
      (course) => `
        <div class="course-card" data-id="${course.id}">
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <h3>${course.title}</h3>
                <div class="course-meta">
                    <span><i class="fas fa-clock"></i>${course.duration}</span>
                    <span><i class="fas fa-user"></i>${course.teacher}</span>
                </div>
                <p>${course.shortDescription}</p>
                <span class="course-level">${course.level}</span>
            </div>
        </div>
    `
    )
    .join("");
}

// render the courses for the index page
renderCourses(courses);

// The cordinates that the function take for the first time
const latitude = 51.508515;
const longitude = -0.125487;
// This method variable is specifing the
const method = 2;

// btn load player.
const btnLoadPrayer = document.querySelector("#load-prayer");
// the prayer container element in HTML.
const prayerContainer = document.querySelector("#prayers-container");

// function loading the prayer times
async function LoadPrayers(lat, lng) {
  const height = prayerContainer.getBoundingClientRect().height;
  prayerContainer.style.height = `${height}px`;
  prayerContainer.innerHTML = `<div class="loader-container"><p class="loader">Loading...</p></div>`;
  let data;

  const prayerTimes = [];
  for (let i = 0; i < 6; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    try {
      btnLoadPrayer.textContent = "Loading...";

      btnLoadPrayer.disabled = true;
      const resp = await fetch(
        `https://api.aladhan.com/v1/timings/${`${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()}`}?latitude=${lat}&longitude=${lng}&method=${method}`
      );

      data = await resp.json();
      console.log(data);
      prayerTimes[i] = {
        ...data.data.timings,
        dateOf: data.data.date.gregorian.date,
      };
    } catch (e) {
      console.error(e.message);
    } finally {
      btnLoadPrayer.textContent = "Use My Location";
      prayerContainer.innerHTML = "";
    }
  }

  // To convert the 24hr time format to 12hr format

  for (let i = 0; i < prayerTimes.length; i++) {
    const timings = prayerTimes[i];
    const convertedTimings = {};

    for (const [key, value] of Object.entries(timings)) {
      if (key == "dateOf") {
        convertedTimings[key] = value;
        continue;
      }
      convertedTimings[key] = convertTo12Hour(value);
    }

    prayerTimes[i] = convertedTimings;
  }

  // Render the prayer html for each prayer
  prayerTimes.forEach((prayer, i) => {
    const html = `
              <div class="prayer ${i == 0 ? "prayer-active" : ""}">
            <p class="prayer__time--date">${
              i == 0 ? "Today" : prayer.dateOf
            }</p>
                <p class="prayer__name">Fajr</p>
            <p class="prayer__time--num">${prayer.Fajr}</p>
            <p class="prayer__name">DHUHR</p>
            <p class="prayer__time--num">${prayer.Dhuhr}</p>
            <p class="prayer__name">ASR</p>
            <p class="prayer__time--num">${prayer.Asr}</p>
            <p class="prayer__name">MAGHRIB</p>
            <p class="prayer__time--num">${prayer.Maghrib}</p>
            <p class="prayer__name">ISHA</p>
            <p class="prayer__time--num">${prayer.Isha}</p>
            </div>

    `;
    prayerContainer.insertAdjacentHTML("beforeend", html);
  });

  prayerContainer.style.height = "auto";

  btnLoadPrayer.disabled = false;
}

// To render the pryaer times for the first time

LoadPrayers(latitude, longitude);

// Load prayer times when the user click on the btn.
btnLoadPrayer.addEventListener("click", () => {
  let lat;
  let lng;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
      LoadPrayers(lat, lng);
    },
    (err) => {
      btnLoadPrayer.innerHTML = err.message;
    }
  );
});

function convertTo12Hour(time24) {
  const [hour, minute] = time24.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

const teachersData = [
  {
    fullName: "Ahmad Omari",
    job: "Manager",
    info: "The founder of the Noor Islamic academy and founder of islamic University of Noor",
    img: "imgs/founder.png",
    socialMediaLink: [
      { img: "./icons/facebook-f.svg", link: "#" },
      { img: "./icons/instagram.svg", link: "#" },
      { img: "./icons/whatsapp.svg", link: "#" },
      { img: "./icons/x-twitter.svg", link: "#" },
    ],
  },
  {
    fullName: "Ali Shafaq",
    job: "Teacher",
    info: "Our teacher in Noor Islmaic Academy and a very talented person.",
    img: "imgs/teacher-1.png",
    socialMediaLink: [
      { img: "./icons/facebook-f.svg", link: "#" },
      { img: "./icons/instagram.svg", link: "#" },
      { img: "./icons/whatsapp.svg", link: "#" },
      { img: "./icons/x-twitter.svg", link: "#" },
    ],
  },
  {
    fullName: "Fahim Nasiri",
    job: "Teacher",
    info: "Our teacher in Noor Islmaic Academy and a very talented person.",
    img: "imgs/teacher-1.png",
    socialMediaLink: [
      { img: "./icons/facebook-f.svg", link: "#" },
      { img: "./icons/instagram.svg", link: "#" },
      { img: "./icons/whatsapp.svg", link: "#" },
      { img: "./icons/x-twitter.svg", link: "#" },
    ],
  },
  {
    fullName: "Wais Badri",
    job: "Teacher",
    info: "Our  teacher in Noor Islmaic Academy and a very talented person.",
    img: "imgs/teacher-3.png",
    socialMediaLink: [
      { img: "./icons/facebook-f.svg", link: "#" },
      { img: "./icons/instagram.svg", link: "#" },
      { img: "./icons/whatsapp.svg", link: "#" },
      { img: "./icons/x-twitter.svg", link: "#" },
    ],
  },
];

const profCardsContainer = document.getElementById("profile-cards");
teachersData.forEach((teacher) => {
  const html = `

        <div>
            <div class="profile__card">
              <div class="grid grid-2-col">
                <div class="profile__card-img-box">
                  <img
                    src="${teacher.img}"
                    alt="img"
                  />
                </div>
                <div class="profile__card-agent">
                  <p class="profile__card-agent--name">${teacher.fullName}</p>
                  <p class="profile__card-agent--job ${
                    teacher.job == "Manager" ? "m-m" : ""
                  }">${teacher.job}</p>
                  <p class="profile__card-agent--info">
                      ${teacher.info}
                  </p>
                  <div class="row mt-2">
                  ${teacher.socialMediaLink
                    .map((link) => {
                      return `
                    <a href="${link.link}">
                    <img src="${link.img}" alt="${link.img}" />
                    </a>
                    `;
                    })
                    .join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;

  profCardsContainer.insertAdjacentHTML("beforeend", html);
});

// The blog posts data
const blogPostData = [
  {
    id: 1,
    title: "The Power of Du'a in Islam: A Comprehensive Guide",
    date: "March 20",
    author: "Sheikh Ahmed Hassan",
    postImage: "imgs/mataq-darul-ulum-FIE6XplzgZs-unsplash (1).jpg",
  },
  {
    id: 2,
    title: "The Importance of Salah: A Pillar of Faith",
    date: "March 19",
    author: "Dr. Fatima Abdullah",
    postImage: "imgs/mataq-darul-ulum-FIE6XplzgZs-unsplash (1).jpg",
  },

  {
    id: 3,
    title: "Understanding the Quran: A Beginner's Guide",
    date: "March 18",
    author: "Imam Yusuf Rahman",
    postImage: "imgs/mataq-darul-ulum-FIE6XplzgZs-unsplash (1).jpg",
  },

  {
    id: 4,
    title: "The Importance of Islamic Ethics in Modern Society",
    date: "March 17",
    author: "Dr. Aisha Malik",
    postImage: "imgs/mataq-darul-ulum-FIE6XplzgZs-unsplash (1).jpg",
  },
];

const b_postsContainer = document.querySelector(".posts");

blogPostData.forEach((post) => {
  const html = `
  <div class="post">
            <img
              src="${post.postImage}"
              class="post-img"
              alt="$${post.title}"
            />

            <div class="post-time">${post.date}</div>

            <div class="post-info">
              <h5 class="post-info-title">
                  ${post.title}
              </h5>

              <div class="post-publisher mt-4 mb-3">
                <span class=""><i class="fa fa-user"></i> ${post.author}</span>
              </div>
              <hr />
              <div class="mt-3">
                <a href="./b-en/index.html" class="btn btn-link btn-primary"
                  >Read More <span><i class="fa fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
  `;

  b_postsContainer.insertAdjacentHTML("beforeend", html);
});
