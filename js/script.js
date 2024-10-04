class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

// Skills

function toggleSkills() {
  var skillsSection = document.querySelector('.skills');

  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
      skillsSection.style.display = 'block';
  } else {
      skillsSection.style.display = 'none';
  }
}

function showTab(tabName) {
  var allContents = document.querySelectorAll('.skills-content');
  allContents.forEach(function (content) {
      content.classList.remove('active');
  });

  var activeContent = document.getElementById(tabName + '-content');
  if (activeContent) {
      activeContent.classList.add('active');
  }

  var allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(function (tab) {
      tab.classList.remove('active');
  });

  var activeTab = document.querySelector('.tab.' + tabName);
  if (activeTab) {
      activeTab.classList.add('active');
  }
}