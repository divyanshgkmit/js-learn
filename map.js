const arr = [2, 4, 6, 8, 10];

console.log(arr);

function double (val){
    return val * 2;
}

// function square (val){
//     return val * val;
// }

// function binary (val){
//     return val.toString(2);
// }

console.log(arr.map(double));

const output = arr.map(function square (val){
    return val * val;
});

console.log(output);

const binaryOutput = arr.map((x) => {
    return x.toString(2);
})

console.log(binaryOutput);