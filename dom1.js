var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

// Delete Event

itemList.addEventListener('click', removeItem);

// Add Event
function addItem(e){
    e.preventDefault();

// get input value
   var newItem = document.getElementById('item').value;

 // create new li element
 var li = document.createElement('li')
 
 li.className = 'list-group-item'
 
 //Add textnode with input value
 li.appendChild(document.createTextNode(newItem));

 //Create Delete Button element
 var deleteBtn = document.createElement('button')

 //Add classes to delete button
 deleteBtn.className ='btn btn-danger btn-sm float-right delete'


 //Append Textnode
 deleteBtn.appendChild(document.createTextNode('X'))

 //Append button to li
 li.appendChild(deleteBtn)

 // Adding Edit Button
 var editbtn = document.createElement('button')
 editbtn.className = 'btn btn-success btn-sm float-right edit'
 editbtn.appendChild(document.createTextNode('Edit'))
 li.appendChild(editbtn)

 //append li to list
 itemList.appendChild(li)
}


// remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are your Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
