const btn = document.querySelector('.OD1');
const para = document.querySelector('.ODS1');

btn.addEventListener('click', () => {
  para.style.display = para.style.display === 'none' ? 'block' : 'none';
  btn.textContent = para.style.display === 'none' ? 'Buy Now' : 'order by this';
});

para.style.display = 'none';

const btn2= document.querySelector('.OD2');
const para2 = document.querySelector('.ODS2');

btn2.addEventListener('click', () => {
  para2.style.display = para2.style.display === 'none' ? 'block' : 'none';
  btn2.textContent = para2.style.display === 'none' ? 'Buy Now' : 'order by this';
});

para2.style.display = 'none';

const btn3 = document.querySelector('.OD3');
const para3 = document.querySelector('.ODS3');

btn3.addEventListener('click', () => {
  para3.style.display = para3.style.display === 'none' ? 'block' : 'none';
  btn3.textContent = para3.style.display === 'none' ? 'Buy Now' : 'order by this';
});

para3.style.display ='none'

const btn4 = document.querySelector('.OD4');
const para4 = document.querySelector('.ODS4');

btn4.addEventListener('click', () => {
  para4.style.display = para4.style.display === 'none' ? 'block' : 'none';
  btn4.textContent = para4.style.display === 'none' ? 'Buy Now' : 'order by this';
});

para4.style.display = 'none'

const btn5 = document.querySelector('.OD5');
const para5 = document.querySelector('.ODS5');

btn5.addEventListener('click', () => {
  para5.style.display = para5.style.display === 'none' ? 'block' : 'none';
  btn5.textContent = para5.style.display === 'none' ? 'Buy Now' : 'order by this';
});

para5.style.display = 'none'