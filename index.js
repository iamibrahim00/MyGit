// by using call
//var Student= {count : 30}

//var printbyCall= function(){
  //  return this.count
//}

//console.log(printbyCall.call(Student));


// by using apply

//var Student= {count : 30}

//var numOfStudents = function(a,b){
 //   return this.count + a + b
//}

//var increaseCount = [10,20]
//console.log(numOfStudents.apply(Student,increaseCount))

// by using bind 
//var Student= {count : 30}

//var numOfStudents = function(a,b){
    //return this.count + a + b
//}

//var increaseCount = [10,20]
//var bound = numOfStudents.bind(Student)
//console.log(bound(10,20))

//by not passing the argument and calling by this
var Student= {age: 30}

var numOfStudents = function(){
    return this.age
}


var bound = numOfStudents.bind(Student)
console.log(bound())