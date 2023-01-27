console.log('person1 : Shows tickets')
console.log('person2 : Shows tickets')

const premovie = async() =>{

    const Wifepromisetickets = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('Tickets')
    },3000)
})

const getpopcorn = new Promise((resolve,reject) =>resolve ('popcorn')) 
const addButter = new Promise((resolve,reject) =>resolve ('Butter')) 
const coldDrinks = new Promise((resolve,rekect) => resolve('coldDrink'))


let Tickets =await Wifepromisetickets

console.log(`Wife : I have the ${Tickets}`)
console.log('Husband : Lets go in')
console.log('Wife : No I am hungry')

let popcorn = await getpopcorn
console.log(`Husband : Here are your ${popcorn}`)
console.log('Husband : lets move in')
console.log('Wife : I need some butter on it')

let addbutter = await addButter
console.log(`Husband : Here is some buttter on your ${addbutter}`)
console.log('Wife : i need some cold drink')
console.log('Husband : okay i will got you one')

let coldDrink = await coldDrinks
console.log(`Husband : Here is your ${coldDrink}`)
console.log('Wife : lets move in')
console.log('Husband : Thankyou')


return Tickets
}

premovie().then((m) => console.log(`person3 : show ${m}`))

console.log('person4 : Shows tickets')
console.log('person5 : Shows tickets')