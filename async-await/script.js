async function getData() {
    return "Divyansh!";
}

const dataPromise = getData();

console.log(dataPromise);

dataPromise.then((res) => console.log(res));

// -----------

const pro = new Promise((resolve, reject) => {
    resolve('Promise Resolved!!!');
});

(function getPromise(){
    pro.then(res => console.log(res));
})();

// -----------

const p = new Promise((resolve, reject) => {
    resolve('Promise Handled Successfully');
});

async function handlePromise() {
    const val = await p;
    console.log(val);
}

handlePromise();

// -----------

