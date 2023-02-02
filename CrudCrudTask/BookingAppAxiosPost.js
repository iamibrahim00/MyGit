

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
  
    axios.post("https://crudcrud.com/api/aaf23824439d4547/appointmentData",obj)
    .then((response) => {
        showUserOnScreen(response.data)
        //console.log(response)
    }).catch(err => {
        document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
    })

    axios.get("https://crudcrud.com/api/aaf23824439d4843898bace5e4f57547/appointmentData",obj)
  //localStorage.setItem(obj.email, JSON.stringify(obj))
  //showUserOnScreen(obj)
  
  function showUserOnScreen(obj){
    const parentElement = document.getElementById('listOfitems')
    
    const childElement = document.createElement('li')
  
    childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber
    
  
  
  
  
    const deletebtn = document.createElement("input")
    deletebtn.type = "button"
    deletebtn.value = "Delete"
  
   
    
   
    
    deletebtn.onclick = () =>{
      localStorage.removeItem(obj.email)
      parentElement.removeChild(childElement)
    }  
  
  const editBtn = document.createElement("input")
    editBtn.type = "button"
    editBtn.value = "Edit"
    editBtn.onclick = () =>{
      localStorage.removeItem(obj.email)
      parentElement.removeChild(childElement)
  
      document.getElementById("name").value = obj.name
      document.getElementById("email").value = obj.email
      document.getElementById("phonenumber").value = obj.phonenumber
    }
  
  
    childElement.appendChild(deletebtn)
    childElement.appendChild(editBtn)
    parentElement.appendChild(childElement)
  
  }
  
  }
  