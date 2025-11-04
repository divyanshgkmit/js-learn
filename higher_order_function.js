const radius = [2, 4, 1, 5, 3];

const calculateArea = (radius) => {
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const calculateCircumference = (radius) => {
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

const calculateDiameter = (radius) => {
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log("Using Normal Function :");

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

const calculate = (radius, logic) => {
    return radius.map((r)=>logic(r));
}

console.log("Using Higher Order Function :");

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));