document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.collapsible-header');
    const tocList = document.getElementById('toc-list');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Generate Table of Contents
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const sectionHeader = section.querySelector('.collapsible-header');
        const sectionTitle = sectionHeader.textContent;

        const tocItem = document.createElement('li');
        tocItem.innerHTML = `<a href="#section-${index}">${sectionTitle}</a>`;
        tocList.appendChild(tocItem);

        section.setAttribute('id', `section-${index}`);
    });
});

