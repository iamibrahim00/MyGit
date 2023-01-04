

function saveToLocalStorage(event) {
 
  event.preventDefault();
  const name = event.target.name.value;

  const email = event.target.email.value;
  const phonenumber = event.target.phonenumber.value;

  
  const obj={
  name,
  email,
  phonenumber
  }


localStorage.setItem(obj.email, JSON.stringify(obj))
showUserOnScreen(obj)

function showUserOnScreen(obj){
  const parentElem = document.getElementById('listOfitems')
  
  parentElem.innerHTML = parentElem.innerHTML +`<li> ${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`
}





}