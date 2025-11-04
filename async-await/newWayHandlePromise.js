const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Promise Resolved 1!')
    }, 6000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Promise Resolved 2!')
    }, 4000);
})

async function handlePromise(){
    console.log('Hello!!');
    
    const val = await p1;
    console.log('Resolving 1...');    
    console.log(val);

    const val2 = await p2;
    console.log('Resolving 2...');    
    console.log(val2);
}

handlePromise();

/*

Hello!!

// after 6 sec both logged

Resolving 1...
Promise Resolved 1!
Resolving 2...
Promise Resolved 2!

*/