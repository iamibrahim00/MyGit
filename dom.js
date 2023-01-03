var itemLister = document.querySelector("#cars")

//ParentElement
console.log(itemLister.parentElement)

//lastElementChild
console.log(itemLister.lastElementChild)

//lastChild
console.log(itemLister.lastChild)



//firstElementchild
console.log(itemLister.firstElementChild)

//firstchild
console.log(itemLister.firstChild)

//nextSibling
console.log(itemLister.nextSibling);

//nextElementSibling
console.log(itemLister.nextElementSibling);

//previousSibling
console.log(itemLister.previousSibling);

//previousElementSibling
console.log(itemLister.previousElementSibling);


//create Element

newDiv =document.createElement("div");
//Add class
newDiv.className = "hello";
//Add id
newDiv.id = "hello1";


//Add Attribute
newDiv.setAttribute('title', 'Hello div');


//create A textnode
var newDivText = document.createTextNode("Hii World");

//Add text to div
newDiv.appendChild(newDivText);


console.log(newDiv);