const listBtn = document.querySelector('.list-section');
const addBtn = document.querySelector('.add-section');
const contactBtn = document.querySelector('.contact-section');

function showSection(sectionName) {
  const listDiv = document.querySelector('.list');
  const formDiv = document.getElementById('form');
  const contactDiv = document.querySelector('.contact');

  listDiv.classList.add('hide-seek');
  formDiv.classList.add('hide-seek');
  contactDiv.classList.add('hide-seek');

  switch (sectionName) {
    case 'list':
      listDiv.classList.remove('hide-seek');
      listBtn.classList.add('button-back');
      break;
    case 'form':
      formDiv.classList.remove('hide-seek');
      addBtn.classList.add('button-back');
      break;
    case 'contact':
      contactDiv.classList.remove('hide-seek');
      contactBtn.classList.add('button-back');
      break;
    default:
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  listBtn.addEventListener('click', () => showSection('list'));
  addBtn.addEventListener('click', () => showSection('form'));
  contactBtn.addEventListener('click', () => showSection('contact'));

  showSection('list');
});