const posts = [

    {title: 'Post One', body:'this post one',createdAt:new Date().getTime()},
    {title: 'Post Two', body:'this post two',createdAt:new Date().getTime()}
]

let intervalId = 0
function getpost(){
    clearInterval(intervalId)
   intervalId =setInterval(() =>{
    let output =''
    posts.forEach((post, index) =>{
        output += `<li>${post.title} last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago </li> `

    })
    document.body.innerHTML = output
},1000)

   }
       

function createPost(post, callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    }, 1000);
}
function create4thPost(post, callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    }, 6000);
}



createPost({title:'Post three', body:'this is post three', createdAt:new Date().getTime()}, getpost)
create4thPost({title:'Post Four', body:'this is post three', createdAt:' '}, getpost)


var time = 0
var count = 0
function lastedit(){
    clearInterval
    timer = setInterval(()=>{
        count += 1
        console.log(count/1000)
    })

}
console.log(lastedit())

