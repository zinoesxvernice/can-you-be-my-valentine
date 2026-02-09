const panel1 = document.querySelector('.panel-1');
const panel2 = document.querySelector('.panel-2');

panel1.addEventListener('click', () => {
  // Hide panel 1
  panel1.style.opacity = 0;
  panel1.style.pointerEvents = 'none';

  // Show panel 2
  panel2.style.opacity = 1;
  panel2.style.pointerEvents = 'auto';
});
