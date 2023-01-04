var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
var descriptionText = document.getElementById('description')

//form submit event
form.addEventListener('submit', addItem);

// Delete Event

itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup',filterItems)

// Add Event
function addItem(e){
    e.preventDefault();

// get input value
   var newItem = document.getElementById('item').value;
//get input value for description
var desc = document.getElementById('description').value;

 // create new li element
 var li = document.createElement('li')
 
 li.className = 'list-group-item'
 
 //Add textnode with input value
 li.appendChild(document.createTextNode(newItem));
 li.appendChild(document.createTextNode(` ${desc}`));

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

// filter items

function filterItems(e){
    // conevrt to lower case
    var text = e.target.value.toLowerCase();

    //to get list
    var items = itemList.getElementsByTagName('li');

    var descItems = descriptionText.getElementsByTagName('li');
    // convert into array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
            
        }else {
            item.style.display = 'none'
        }

    
   
        var itemName1 = item.childNodes[1].textContent;
        if (itemName1.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
            
        }else {
            item.style.display = 'none'
        }
    })



}
