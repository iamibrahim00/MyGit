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
       

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdAt:new Date().getTime()})
            
            const error = false

            if(!error){
                resolve()
            }else{
                reject('Error : something went wrong')
            }
        }, 2000);

    })
  
}

function createPost4(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdAt:new Date().getTime()})
            
            const error = false

            if(!error){
                resolve()
            }else{
                reject('Error : something went wrong')
            }
        }, 2000);

    })
  
}
function deletepost(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (posts.length > 0){
                lastelement = posts.pop()
                resolve(lastelement)
            }
            else{
                reject('Array is now empty')
            }
        
        
        }, 1000);

    })

}


createPost({title:'Post Three', body:'this is post three', createdAt:new Date().getTime()})

.then(() =>{
    getpost()
    deletepost().then((deletedelement) =>{
        console.log('this is deleted',deletedelement)
        getpost()
        deletepost().then((deletedelement) => {
            console.log('this is deleted',deletedelement)
            getpost()
            deletepost().then((deletedelement) => {
                console.log('this is deleted',deletedelement)
                getpost()
                deletepost().then((deletedelement) => {
                    console.log('this is deleted',deletedelement)
                deletepost().then(() => { })
                    .catch((err) => {
                            console.log('inside catch block ',err)
                    })
                })
            }).catch((err) => {console.log("success deleted",err)})
        }).catch((err) => {console.log("success deleted",err)})
    }).catch((err) => {console.log("success deleted",err)})
})
createPost4({title:'Post Four', body:'this is post Four', createdAt:new Date().getTime()})
.then(createPost)


