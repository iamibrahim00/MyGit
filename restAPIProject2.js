function savetolocalstorage(event){

    const price = event.target.price.value
    const dish = event.target.dish.value
    const table = event.target.table.value

    const obj ={
        price,
        dish,
        table
    }
    axios.post("https://crudcrud.com/api/6a8de77c02804884be384a52a780bbb6/Orderdata",obj)
    .then((response) => {
        showUserOnScreen(response.data)
        //console.log(response)
    }).catch(err => {
        document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
    })
}

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/6a8de77c02804884be384a52a780bbb6/Orderdata")
    .then((response) =>{
      console.log(response)
  
      for(var i =0; i< response.data.length;i++){
       showUserOnScreen(response.data[i])
      }
    }).catch((err) => console.log(err))
  
  })

  function showUserOnScreen(obj){
    


        
  if(obj.table == document.getElementById('table1').id){
    var parentElement = document.getElementById('listofitems1')
       var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteuser('${obj._id}')>Delete</button></li>` 
    
              
    parentElement.innerHTML = parentElement.innerHTML +childElement
    
  }
  else if(obj.table == document.getElementById('table2').id){
    var parentElement = document.getElementById('listofitems2')
    var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteuser('${obj._id}')>Delete</button></li>` 
    
              
    parentElement.innerHTML = parentElement.innerHTML +childElement

  }
  else if(obj.table == document.getElementById('table2').id){
    var parentElement = document.getElementById('listofitems2')
    var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteuser('${obj._id}')>Delete</button></li>` 
    
              
    parentElement.innerHTML = parentElement.innerHTML +childElement

  }
  else{
    var parentElement = document.getElementById('listofitems3')
    var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.dish} - ${obj.table}
        <button onclick = deleteuser('${obj._id}')>Delete</button></li>` 
    
              
    parentElement.innerHTML = parentElement.innerHTML +childElement

  }
  }


  function deleteuser (objId){
    axios.delete(`https://crudcrud.com/api/6a8de77c02804884be384a52a780bbb6/Orderdata/${objId}`)
    .then((response)=>{
      removeUserfromScreen(objId)
    }).catch((err) => {   
                  console.log(err)
   })
}
  
    
   function removeUserfromScreen(objId){
    const parentElement= document.getElementById('listofitems')
    const childNodeTobeDeleted = document.getElementById(_id)
    if(childNodeTobeDeleted){
        parentElement.removeChild(childNodeTobeDeleted)
      }  }
 