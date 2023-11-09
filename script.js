// Add event listeners to accordion titles
const accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
    const content = title.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
