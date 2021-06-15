let promise= new Promise((resolve, reject)=>
{
    let a = 2 + 3;
    if(a==5)
    {
        resolve('success')
    } 
    else{
        reject('Failed')
    }
})

promise.then((message)=>{
    console.log('This is in the then'+' '+message)
}).catch((message)=>{
    console.log('This is in the catch'+' '+message)
})