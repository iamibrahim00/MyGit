const posts = [

    {title: 'WhatsApp Status 1', body:'this post one',createdAt:new Date().getTime()},
    {title: 'WhatsApp Status 2', body:'this post two',createdAt:new Date().getTime()}
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
                resolve(posts)
            }else{
                reject('Error : something went wrong')
            }
        }, 1000);

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
        
        
        }, 3000);

    })

}


createPost({title:'WhatApp Status 3', body:'this is post three', createdAt:new Date().getTime()}).then(getpost)


function updatelastactivetime(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            user.lastActiveTime = new Date().getTime()
            resolve(user.lastActiveTime)
        },2000)
    })

}

const user = {
    username : 'John',
    lastActiveTime :'5 January'
}

function userupdatepost(){
    Promise.all([createPost({title:'WhatsApp Status 4', body:'this is post three', createdAt:new Date().getTime()}),updatelastactivetime()])
    .then(([createPostresolves, updatelastactivetimeresolves,deletedelement]) =>{
        getpost()
        deletepost()
   
        console.log(createPostresolves,updatelastactivetimeresolves)
    }).catch(err => console.log(err))

}
userupdatepost()
