
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');



// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value == '' || emailInput.value == ''){
    console.log('please enter the value')
  }else{
  localStorage.setItem('Username',nameInput.value)
  localStorage.setItem('UserEmail',emailInput.value)
}}