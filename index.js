
// Function currying using bind method

let multiply = function(x,y){
    return x * y
}

let multiply2 = multiply.bind(this,2)
console.log(multiply2(5))

let multiply3 = multiply.bind(this,3)
console.log(multiply3(5))

let multiply4 = multiply.bind(this,4,5)
console.log(multiply4(5))

