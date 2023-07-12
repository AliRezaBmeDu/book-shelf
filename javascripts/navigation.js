document.addEventListener('DOMContentLoaded', () => {
  const listSection = document.querySelector('.list-section');
  const addSection = document.querySelector('.add-section');
  const contactSection = document.querySelector('.contact-section');

  listSection.addEventListener('click', () => showSection('list'));
  addSection.addEventListener('click', () => showSection('form'));
  contactSection.addEventListener('click', () => showSection('contact'));

  showSection('list');
});

function showSection(sectionName) {
  const header = document.querySelector('header');
  const listDiv = document.querySelector('.list');
  const formDiv = document.getElementById('form');
  const contactDiv = document.querySelector('.contact');

  listDiv.classList.add('hide-seek');
  formDiv.classList.add('hide-seek');
  contactDiv.classList.add('hide-seek');

  switch (sectionName) {
    case 'list':
      listDiv.classList.remove('hide-seek');
      break;
    case 'form':
      formDiv.classList.remove('hide-seek');
      break;
    case 'contact':
      contactDiv.classList.remove('hide-seek');
      break;
    default:
      break;
  }
}
