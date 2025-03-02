
document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт працює!');
});

// Функція для відображення потрібної секції
function showSection(sectionId) {
    // Приховуємо всі секції
    let sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Показуємо обрану секцію
    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}




