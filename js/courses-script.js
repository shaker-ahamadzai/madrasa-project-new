// // Course data
// const courses = [
//   {
//     id: "quran-memorization",
//     title: "Qur'an Memorization",
//     shortDescription: "Learn to memorize the Holy Qur'an with proper tajweed.",
//     fullDescription:
//       "This comprehensive course focuses on memorizing the Qur'an using proven techniques and daily practice sessions. Students will learn proper tajweed rules, develop a beautiful recitation style, and establish a strong connection with the Holy Book. The course includes regular assessments, revision strategies, and personalized feedback from experienced teachers.",
//     duration: "12 months",
//     teacher: "Ustadh Ahmad",
//     level: "Beginner to Advanced",
//     category: "quran",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "tajweed-rules",
//     title: "Tajweed Rules Mastery",
//     shortDescription: "Master the rules of proper Qur'anic recitation.",
//     fullDescription:
//       "This course covers all aspects of tajweed rules, from basic to advanced levels. Students will learn the correct pronunciation of Arabic letters, rules of elongation, stopping, and other essential tajweed principles. The course includes practical exercises, audio recordings, and one-on-one feedback sessions.",
//     duration: "6 months",
//     teacher: "Ustadh Muhammad",
//     level: "Intermediate",
//     category: "quran",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "hadith-studies",
//     title: "Hadith Studies",
//     shortDescription: "Study authentic hadiths and their meanings.",
//     fullDescription:
//       "This course provides a comprehensive study of authentic hadiths, their chains of narration, and their practical applications in daily life. Students will learn about hadith classification, major hadith collections, and how to understand and implement the teachings of the Prophet Muhammad (peace be upon him).",
//     duration: "8 months",
//     teacher: "Ustadh Ibrahim",
//     level: "Intermediate",
//     category: "hadith",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "islamic-jurisprudence",
//     title: "Islamic Jurisprudence (Fiqh)",
//     shortDescription:
//       "Learn the principles of Islamic law and their applications.",
//     fullDescription:
//       "This course covers the fundamental principles of Islamic jurisprudence, including worship, transactions, family law, and contemporary issues. Students will learn how to derive rulings from primary sources and understand different schools of thought.",
//     duration: "10 months",
//     teacher: "Ustadh Yusuf",
//     level: "Advanced",
//     category: "fiqh",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "arabic-language",
//     title: "Arabic Language",
//     shortDescription: "Master classical and modern Arabic.",
//     fullDescription:
//       "This comprehensive Arabic course covers grammar, vocabulary, reading, writing, and conversation. Students will learn both classical and modern Arabic, enabling them to understand the Qur'an, hadith, and classical texts while also being able to communicate effectively in modern Arabic.",
//     duration: "12 months",
//     teacher: "Ustadh Ali",
//     level: "Beginner to Advanced",
//     category: "arabic",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "islamic-history",
//     title: "Islamic History",
//     shortDescription: "Explore the rich history of Islamic civilization.",
//     fullDescription:
//       "This course covers the history of Islamic civilization from the time of the Prophet Muhammad (peace be upon him) to the present day. Students will learn about major historical events, influential figures, and the contributions of Muslims to various fields of knowledge.",
//     duration: "6 months",
//     teacher: "Ustadh Khalid",
//     level: "Intermediate",
//     category: "history",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "islamic-ethics",
//     title: "Islamic Ethics",
//     shortDescription: "Study Islamic moral values and character development.",
//     fullDescription:
//       "This course focuses on Islamic ethics, moral values, and character development. Students will learn about the importance of good character in Islam, how to develop positive traits, and how to deal with contemporary ethical challenges.",
//     duration: "4 months",
//     teacher: "Ustadh Hamza",
//     level: "All Levels",
//     category: "ethics",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "islamic-finance",
//     title: "Islamic Finance",
//     shortDescription: "Learn about Islamic banking and finance principles.",
//     fullDescription:
//       "This course covers the principles of Islamic finance, including Islamic banking, insurance, and investment. Students will learn about halal financial transactions, modern Islamic financial instruments, and how to apply Islamic financial principles in contemporary settings.",
//     duration: "6 months",
//     teacher: "Ustadh Omar",
//     level: "Intermediate",
//     category: "finance",
//     image:
//       "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
// ];

// // DOM Elements
// const coursesGrid = document.getElementById("coursesGrid");
// const searchInput = document.getElementById("searchInput");
// const categoryButtons = document.querySelectorAll(".category-btn");
// const courseDetail = document.getElementById("courseDetail");
// const closeDetail = document.getElementById("closeDetail");
// const themeToggle = document.getElementById("themeToggle");

// // State
// let currentCategory = "all";
// let filteredCourses = [...courses];

// // Functions
// function renderCourses(coursesToRender) {
//   coursesGrid.innerHTML = coursesToRender
//     .map(
//       (course) => `
//         <div class="course-card" data-id="${course.id}">
//             <img src="${course.image}" alt="${course.title}" class="course-image">
//             <div class="course-content">
//                 <h3>${course.title}</h3>
//                 <div class="course-meta">
//                     <span><i class="fas fa-clock"></i>${course.duration}</span>
//                     <span><i class="fas fa-user"></i>${course.teacher}</span>
//                 </div>
//                 <p>${course.shortDescription}</p>
//                 <span class="course-level">${course.level}</span>
//             </div>
//         </div>
//     `
//     )
//     .join("");

//   // Add click event listeners to course cards
//   document.querySelectorAll(".course-card").forEach((card) => {
//     card.addEventListener("click", () => showCourseDetail(card.dataset.id));
//   });
// }

// function showCourseDetail(courseId) {
//   const course = courses.find((c) => c.id === courseId);
//   if (!course) return;

//   document.getElementById("detailTitle").textContent = course.title;
//   document.getElementById("detailLevel").textContent = course.level;
//   document.getElementById("detailDuration").textContent = course.duration;
//   document.getElementById("detailTeacher").textContent = course.teacher;
//   document.getElementById("detailDescription").textContent =
//     course.fullDescription;

//   courseDetail.classList.add("active");
// }

// function filterCourses() {
//   const searchTerm = searchInput.value.toLowerCase();
//   filteredCourses = courses.filter((course) => {
//     const matchesSearch =
//       course.title.toLowerCase().includes(searchTerm) ||
//       course.shortDescription.toLowerCase().includes(searchTerm);
//     const matchesCategory =
//       currentCategory === "all" || course.category === currentCategory;
//     return matchesSearch && matchesCategory;
//   });
//   renderCourses(filteredCourses);
// }

// function toggleTheme() {
//   document.body.classList.toggle("dark-theme");
//   const isDark = document.body.classList.contains("dark-theme");
//   themeToggle.innerHTML = isDark
//     ? '<i class="fas fa-sun"></i>'
//     : '<i class="fas fa-moon"></i>';
// }

// // Event Listeners
// searchInput.addEventListener("input", filterCourses);

// categoryButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     categoryButtons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//     currentCategory = button.dataset.category;
//     filterCourses();
//   });
// });

// closeDetail.addEventListener("click", () => {
//   courseDetail.classList.remove("active");
// });

// themeToggle.addEventListener("click", toggleTheme);

// // Initialize
// renderCourses(courses);

// Course data
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
    id: "islamic-jurisprudence",
    title: "Islamic Jurisprudence (Fiqh)",
    shortDescription:
      "Learn the principles of Islamic law and their applications.",
    fullDescription:
      "This course covers the fundamental principles of Islamic jurisprudence, including worship, transactions, family law, and contemporary issues. Students will learn how to derive rulings from primary sources and understand different schools of thought.",
    duration: "10 months",
    teacher: "Ustadh Yusuf",
    level: "Advanced",
    category: "fiqh",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
  {
    id: "arabic-language",
    title: "Arabic Language",
    shortDescription: "Master classical and modern Arabic.",
    fullDescription:
      "This comprehensive Arabic course covers grammar, vocabulary, reading, writing, and conversation. Students will learn both classical and modern Arabic, enabling them to understand the Qur'an, hadith, and classical texts while also being able to communicate effectively in modern Arabic.",
    duration: "12 months",
    teacher: "Ustadh Ali",
    level: "Beginner to Advanced",
    category: "arabic",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
  {
    id: "islamic-history",
    title: "Islamic History",
    shortDescription: "Explore the rich history of Islamic civilization.",
    fullDescription:
      "This course covers the history of Islamic civilization from the time of the Prophet Muhammad (peace be upon him) to the present day. Students will learn about major historical events, influential figures, and the contributions of Muslims to various fields of knowledge.",
    duration: "6 months",
    teacher: "Ustadh Khalid",
    level: "Intermediate",
    category: "history",
    image: "./imgs/aldin-nasrun-1Xq9EMStf2o-unsplash.jpg",
  },
  {
    id: "islamic-ethics",
    title: "Islamic Ethics",
    shortDescription: "Study Islamic moral values and character development.",
    fullDescription:
      "This course focuses on Islamic ethics, moral values, and character development. Students will learn about the importance of good character in Islam, how to develop positive traits, and how to deal with contemporary ethical challenges.",
    duration: "4 months",
    teacher: "Ustadh Hamza",
    level: "All Levels",
    category: "ethics",
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

// DOM Elements
const coursesGrid = document.getElementById("coursesGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const courseDetail = document.getElementById("courseDetail");
let closeDetail = document.getElementById("closeDetail");
const themeToggle = document.getElementById("themeToggle");

// State
let currentCategory = "all";
let filteredCourses = [...courses];
let selectedCourse = null;

// Functions
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

  // Add click event listeners to course cards
  document.querySelectorAll(".course-card").forEach((card) => {
    card.addEventListener("click", () => showCourseDetail(card.dataset.id));
  });
}

function showCourseDetail(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;

  selectedCourse = course;

  if (!document.getElementById("detailTitle")) {
    const html = `
    <button class="close-btn" id="closeDetail">  
              <i class="fas fa-times"></i>
            </button>
            <div class="course-detail-header">
              <h2 id="detailTitle">${course.title}</h2>
              <span class="course-level" id="detailLevel">${course.level}</span>
            </div>
            <div class="course-detail-body">
              <div class="course-info">
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span id="detailDuration">${course.duration}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-user"></i>
                  <span id="detailTeacher">${course.teacher}</span>
                </div>
              </div>
              <p class="course-description" id="detailDescription">${course.fullDescription}</p>
              <button class="enroll-btn">Enroll Now</button>
            </div>
    `;

    const courseDetailContent = document.querySelector(
      ".course-detail-content"
    );
    courseDetailContent.innerHTML = html;
    closeDetail = document.querySelector("#closeDetail");
    closeDetail.addEventListener("click", () => {
      courseDetail.classList.remove("active");
      selectedCourse = null;
    });
  }

  document.getElementById("detailTitle").textContent = course.title;
  document.getElementById("detailLevel").textContent = course.level;
  document.getElementById("detailDuration").textContent = course.duration;
  document.getElementById("detailTeacher").textContent = course.teacher;
  document.getElementById("detailDescription").textContent =
    course.fullDescription;

  // Update enroll button with course ID
  const enrollBtn = document.querySelector(".enroll-btn");
  enrollBtn.dataset.courseId = course.id;
  enrollBtn.textContent = "Enroll Now";

  courseDetail.classList.add("active");
}

function showEnrollmentForm() {
  const course = selectedCourse;
  if (!course) return;

  const formHTML = `
        <div class="enrollment-form">
            <h3>Enroll in ${course.title}</h3>
            <form id="enrollmentForm">
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="level">Current Level</label>
                    <select id="level" name="level" required>
                        <option value="">Select your level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message">Additional Notes (Optional)</label>
                    <textarea id="message" name="message" rows="3"></textarea>
                </div>
                <div class="form-actions">
                    <button type="submit" class="submit-btn">Submit Enrollment</button>
                    <button type="button" class="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    `;

  const courseDetailContent = document.querySelector(".course-detail-content");
  courseDetailContent.innerHTML = formHTML;

  // Add event listeners
  const form = document.getElementById("enrollmentForm");
  const cancelBtn = document.querySelector(".cancel-btn");

  form.addEventListener("submit", handleEnrollmentSubmit);
  cancelBtn.addEventListener("click", () => {
    showCourseDetail(selectedCourse.id);
  });
}

function handleEnrollmentSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const enrollmentData = {
    courseId: selectedCourse.id,
    courseTitle: selectedCourse.title,
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    level: formData.get("level"),
    message: formData.get("message"),
    enrollmentDate: new Date().toISOString(),
  };

  // Show loading state
  const courseDetailContent = document.querySelector(".course-detail-content");
  courseDetailContent.innerHTML = `
    <div class="enrollment-loading">
    <i class="fas fa-spinner fa-spin"></i>
    <p>Processing your enrollment...</p>
    </div>
    `;

  // Prepare email template parameters
  const templateParams = {
    to_email: "shakerahmadzai433@gmail.com", // Replace with your email
    name: enrollmentData.fullName,
    title: enrollmentData.courseTitle,
    email: enrollmentData.email,
    phone: enrollmentData.phone,
    level: enrollmentData.level,
    message: enrollmentData.message,
    time: new Date().toLocaleDateString(),
  };

  // Send email using EmailJS
  emailjs.send("service_ypneg4o", "template_eygyjuh", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      showEnrollmentSuccess();
    },
    function (error) {
      console.log("FAILED...", error);
      showEnrollmentError();
    }
  );
}

function showEnrollmentSuccess() {
  const courseDetailContent = document.querySelector(".course-detail-content");
  courseDetailContent.innerHTML = `
          <div class="enrollment-success">
              <i class="fas fa-check-circle"></i>
              <h3>Enrollment Successful!</h3>
              <p>Thank you for enrolling in ${selectedCourse.title}.</p>
              <p>We have sent a confirmation email with further details.</p>
              <p>We will contact you shortly to complete the enrollment process.</p>
              <button class="close-btn" id="closeDetail">
                  <i class="fas fa-times"></i>
              </button>
          </div>
      `;

  // Add event listener to close button
  document.getElementById("closeDetail").addEventListener("click", () => {
    courseDetail.classList.remove("active");
  });
}

function showEnrollmentError() {
  const courseDetailContent = document.querySelector(".course-detail-content");
  courseDetailContent.innerHTML = `
        <div class="enrollment-error">
            <i class="fas fa-exclamation-circle"></i>
            <h3>Enrollment Failed</h3>
            <p>We apologize, but there was an error processing your enrollment.</p>
            <p>Please try again or contact us directly.</p>
            <div class="error-actions">
                <button class="retry-btn" onclick="showEnrollmentForm()">Try Again</button>
                <button class="close-btn" id="closeDetail">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;

  // Add event listener to close button
  document.getElementById("closeDetail").addEventListener("click", () => {
    courseDetail.classList.remove("active");
  });
}

function filterCourses() {
  const searchTerm = searchInput.value.toLowerCase();
  filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.shortDescription.toLowerCase().includes(searchTerm);
    const matchesCategory =
      currentCategory === "all" || course.category === currentCategory;
    return matchesSearch && matchesCategory;
  });
  renderCourses(filteredCourses);
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

// Event Listeners
searchInput.addEventListener("input", filterCourses);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    filterCourses();
  });
});

closeDetail.addEventListener("click", () => {
  courseDetail.classList.remove("active");
  selectedCourse = null;
});

themeToggle.addEventListener("click", toggleTheme);

// Add event delegation for enroll button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("enroll-btn")) {
    showEnrollmentForm();
  }
});

// Initialize
renderCourses(courses);
