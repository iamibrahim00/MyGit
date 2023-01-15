
// Function currying using closure

let add = function(x){
    return function(y){
        console.log(x+y)
    }
}

let add2 = add(2)
add2(5)

let add3 = add(3)
add2(5)

let add4 = add(4)
add2(5)

