
const myForm = document.querySelector('#my-form');





// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value
  const email = e.target.email.value
  
  var myObj ={
  name,
  email
}

localStorage.setItem('myObj', JSON.stringify(myObj))



}