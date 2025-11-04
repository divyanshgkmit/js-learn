// Sum of Numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

const output = numbers.reduce((acc, curr)=>{
  acc = acc + curr;
  return acc;
}, 0)

console.log(output);

// Max of Numbers

const arr = [54, 112, 49, 192, 243, 11];

const maxArr = arr.reduce((acc, curr)=>{
  if(curr > acc){
    acc = curr;
  }
  return acc;
}, 0);

console.log(maxArr);