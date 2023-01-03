//console.log(document.URL);
//console.log(document);



//var header = document.getElementById("main-header")

//header.style.borderBottom = "solid 3px black";


//var cars = document.getElementsByClassName("title3");
//cars[0].style.fontWeight="bold"
//cars[0].style.color="green"

//for (i=0;i<cars.length;i++){
//cars.style.backgroundColor="yellow";
//}

//var car = document.getElementsByClassName("list-group-item")
//car[2].style.background="green"

//for(var i =0;i < car.length;i++){
 //car[i].style.fontWeight='bold'
//}

//var car = document.getElementsByTagName("li")
//car[2].style.background="green"

//for(var i =0;i < car.length;i++){
//car[i].style.fontWeight='bold'
//}

//var SecondChild= document.querySelector('.list-group-item:nth-child(2)');

//SecondChild.style.color="blue"

//var ThirdChild = document.querySelector(".list-group-item:nth-child(3)");
//ThirdChild.style.visibility = "hidden"


//var SecondItem = document.querySelectorAll(".list-group-item");

//SecondItem[1].style.background= "green"

var odd = document.querySelectorAll("li:nth-child(odd)")
for (var i = 0; i < odd.length; i++ ){
    odd[i].style.background = "green"
}