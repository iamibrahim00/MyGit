


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
  
    axios.post("https://crudcrud.com/api/7cc0a5aae5604b3c8069cc59dcfd9165/appointmentData",obj)
    .then((response) => {
        showUserOnScreen(response.data)
        //console.log(response)
    }).catch(err => {
        document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
    })

  
  //localStorage.setItem(obj.email, JSON.stringify(obj))
  //showUserOnScreen(obj)
  }
  //store obj on localstorage

  // window.addEventListener("DOMContentLoaded", () =>{
  //   const localStorageObj =localStorage
  //   const localStoragKeys = Object.keys(localStorageObj)

  //   for(var i=0; i<localStoragKeys.length;i++){
  //     const key  =localStoragKeys[i]
  //     const userdetailsString =localStorageObj[key]
  //     const userdetailsobj = JSON.parse(userdetailsString)
  //     showUserOnScreen(userdetailsobj)
  //   }
  // })
  window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/7cc0a5aae5604b3c8069cc59dcfd9165/appointmentData")
    .then((response) =>{
      console.log(response)
  
      for(var i =0; i< response.data.length;i++){
       showUserOnScreen(response.data[i])
      }
    }).catch((err) => console.log(err))
  
  })

  function showUserOnScreen(obj){
    const parentElement = document.getElementById('listOfitems')
    
    const childElement = document.createElement('li')
  
    childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber
    
  
  
  
  
    const deletebtn = document.createElement("input")
    deletebtn.type = "button"
    deletebtn.value = "Delete"
  
   
    
   
    
    deletebtn.onclick = () =>{
      axios.delete("https://crudcrud.com/api/7cc0a5aae5604b3c8069cc59dcfd9165/appointmentData/63de5add81b3ab03e8473d57")
      parentElement.removeChild(childElement)
    }  
  
  
  
  
    childElement.appendChild(deletebtn)
    
    parentElement.appendChild(childElement)
  
  }
  
  
  