const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Promise Resolved!')
    }, 3000);
})

function handlePromise(){
    p.then((res)=>{
        console.log(res);
    })
    console.log('Resolving...');
    
}

handlePromise();

