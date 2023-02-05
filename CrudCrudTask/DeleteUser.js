


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

  axios.post("https://crudcrud.com/api/59a78e4931e749c1a899f5973e737583/appointmentData",obj)
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
  axios.get("https://crudcrud.com/api/59a78e4931e749c1a899f5973e737583/appointmentData")
  .then((response) =>{
    console.log(response)

    for(var i =0; i< response.data.length;i++){
     showUserOnScreen(response.data[i])
    }
  }).catch((err) => console.log(err))

})

function showUserOnScreen(obj){
  const parentElement = document.getElementById('listOfitems')
  
  const childElement =`<li id = ${obj._id}> ${obj.name} - ${obj.email} - ${obj.phonenumber}
                    <button onclick = deleteuser('${obj._id}')>Delete</button>
  </li>`


  

   parentElement.innerHTML =   parentElement.innerHTML +childElement
}
    function deleteuser (objId){
      axios.delete(`https://crudcrud.com/api/59a78e4931e749c1a899f5973e737583/appointmentData/${objId}`)
      .then((response)=>{
        removeUserfromScreen(objId)
      }).catch((err) => {   
                    console.log(err)
     })
 }
 


  
 function removeUserfromScreen(objId){
  const parentElement= document.getElementById('listOfitems')
  const childNodeTobeDeleted = document.getElementById(_id)
  if(childNodeTobeDeleted){
      parentElement.removeChild(childNodeTobeDeleted)
  }


 }


  





  




