function prepareforinterview(){
   return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('preparing for an interview')
    },2000)
    })   
}

function applyforjob(){
    return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        resolve('applied for jobs')
    },2000)
})
  
}

function gotMail(){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            resolve('Interview scheduled')
        },2000)
    })
}

function DonwWithInterview(){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            resolve('Interview done')
        },2000)
    })
}

function result(){
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            console.log('better luck next time You are rejected')
            reject('Sorry!! better luck next time')
            
        },2000)
    })
}


async function func1(){
    try{
    const msg1 = await prepareforinterview()
    console.log(msg1)
    const msg2 = await applyforjob()
    console.log(msg2)
    const msg3 =await gotMail()
    console.log(msg3)
    const msg4 = await DonwWithInterview()
    console.log(msg4)
    const msg5 = await result()
    console.log(msg5)
}catch(err){
    console.log(err)
}
}
func1()