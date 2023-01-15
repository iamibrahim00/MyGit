// by using call
var Student= {count : 30}

var printbyCall= function(){
    return this.count
}

console.log(printbyCall.call(Student));




//var Details = ["iayamibrahim@gmail.com", 3432423432]
//console.log(printbyCall.apply(Student,Details))