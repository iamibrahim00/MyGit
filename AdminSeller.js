function savetolocalstorage(event){
    event.preventDefault();
  
      const price = event.target.price.value
      const product= event.target.product.value
      
  
      const obj ={
          price,
         product
      }
      axios.post("https://crudcrud.com/api/d80ec173c9714212aba919f3332da657/Orderdata",obj)
      .then((response) => {
          showUserOnScreen(response.data)
          //console.log(response)
      }).catch(err => {
          document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
      })
  }
  
  window.addEventListener("DOMContentLoaded", ()=>{
      axios.get("https://crudcrud.com/api/d80ec173c9714212aba919f3332da657/Orderdata")
      .then((response) =>{
        console.log(response)
 
    
          for(var i =0; i< response.data.length;i++){
            showUserOnScreen(response.data[i])
           }
        
    
        

      }).catch((err) => console.log(err))
    
    })
    var total = 0; 
    var insidePara= document.getElementById('amount')
 
    function showUserOnScreen(obj){
   
    var parentElement = document.getElementById('listofitems')
  var p = document.getElementById('h1')
      var childElement =`<li id =${obj._id}> ${obj.price} - ${obj.product} 
      <button onclick = (deleteuser('${obj._id}'),del('${obj.price}'))>Delete</button></li>` 
        var o = parseInt(obj.price)
        total = total + o
        insidePara.textContent = total
    
        parentElement.innerHTML = parentElement.innerHTML +childElement   
      
    }
    function del(objPrice){
      var a = parseInt(objPrice)
      total = total - a
      insidePara.innerHTML = total

  }
 
    function deleteuser (objId){
      axios.delete(`https://crudcrud.com/api/d80ec173c9714212aba919f3332da657/Orderdata/${objId}`)
      .then((response)=>{
        removeUserfromScreen(objId)
    
      }).catch((err) => {   
                    console.log(err)
     })
  }
   
  
     function removeUserfromScreen(objId){
      
       
      const parentElement= document.getElementById('listofitems')
      const childNodeTobeDeleted = document.getElementById(objId)
      if(childNodeTobeDeleted){
          //parentElement.removeChild(childNodeTobeDeleted)
          childNodeTobeDeleted.remove()
        }  }
   