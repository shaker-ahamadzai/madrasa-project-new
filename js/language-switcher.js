// Language configuration
const languages = {
  en: {
    name: "English",
    code: "en",
    direction: "ltr",
  },
  ps: {
    name: "پښتو",
    code: "ps",
    direction: "rtl",
  },
  fa: {
    name: "دری",
    code: "fa",
    direction: "rtl",
  },
};

// Function to create language switcher
function createLanguageSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";

  const currentLang = document.documentElement.lang;
  const currentLangConfig = languages[currentLang];

  switcher.innerHTML = `
        <div class="current-language">
            <span>${currentLangConfig.name}</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="language-dropdown">
            ${Object.values(languages)
              .filter((lang) => lang.code !== currentLang)
              .map(
                (lang) => `
                    <a href="../b-${lang.code}/index.html" class="language-option">
                        ${lang.name}
                    </a>
                `
              )
              .join("")}
        </div>
    `;

  // Add click event to toggle dropdown
  const currentLanguage = switcher.querySelector(".current-language");
  currentLanguage.addEventListener("click", (e) => {
    e.stopPropagation();
    switcher.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove("active");
    }
  });

  return switcher;
}

// Add language switcher to the page
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".sidebar__header");
  if (header) {
    const switcher = createLanguageSwitcher();
    header.insertBefore(switcher, header.firstChild);
  }
});
