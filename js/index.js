document.querySelectorAll('.number')
  .forEach(el => el.addEventListener('click', function() {
  display.value += event.target.innerText;
}));
document.querySelectorAll('.operation')
    .forEach( el => el.addEventListener('click', function() {
    display.value += event.target.innerText;
}));

document.querySelector('.square')
  .addEventListener('click', function(){
    display.value = Math.pow(display.value, 2);
  });

document.querySelector('.sqrt')
  .addEventListener('click', function(){
    display.value = Math.sqrt(display.value);
  });

  document.querySelector('.percent')
  .addEventListener('click', function(){
    display.value = display.value/100;
  });

document.querySelector('.reset')
.addEventListener('click', function(){
  display.value = '';
});

const display = document.querySelector('.display');

document.querySelector('.calc')
.addEventListener('click', function() {
  display.value = eval(display.value);
});