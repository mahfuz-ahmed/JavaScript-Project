'use stict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overly');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');
const message = document.querySelector('.message');

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', function () {
    message.textContent = `Button ${i + 1}  is clicked`;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeBtn.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (a) {
  //   console.log('A key was pressed');
  //   console.log(a.key);

  if (a.key === 'Escape' && !modal.classList.contains('hidden')) {
    // modal.classList.add('hidden');

    closemodal();
  }
});
