
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