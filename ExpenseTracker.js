function saveToLocalStorage(event) {
 
    event.preventDefault();
    const expense = event.target.expense.value;
  
    const description = event.target.description.value;
    const category = event.target.category.value;
  
    
    const obj={
    expense,
    description,
    category
    }
  
  
  localStorage.setItem(obj.description, JSON.stringify(obj))
  showUserOnScreen(obj)
  
  function showUserOnScreen(obj){
    const parentElement = document.getElementById('listOfitems')
    
    const childElement = document.createElement('li')
  
    childElement.textContent = obj.expense + ' - ' + obj.description + ' - ' + obj.category



    const deletebtn = document.createElement("input")
    deletebtn.type = "button"
    deletebtn.value = "Delete Expense"
    deletebtn.id='delbtn'


    deletebtn.onclick = () =>{
        localStorage.removeItem(obj.email)
        parentElement.removeChild(childElement)
      }  
    
    const editBtn = document.createElement("input")
      editBtn.type = "button"
      editBtn.value = "Edit Expense"
      editBtn.id='editbtn'
      editBtn.onclick = () =>{
        localStorage.removeItem(obj.category)
        parentElement.removeChild(childElement)
    
        document.getElementById("name").value = obj.expense
        document.getElementById("email").value = obj.description
        document.getElementById("phonenumber").value = obj.category
      }   
 
    childElement.appendChild(deletebtn)
    childElement.appendChild(editBtn)
    parentElement.appendChild(childElement)
    
  }

}