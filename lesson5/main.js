// Find the Most Frequent Element in an Array
function findFrequent(arr) {
    let freq = arr[0];
    let freqCount = 1;
    let set = new Set(arr);
    for (let i of set) {
        let count = arr.reduce((acc, elem) => (i === elem ? acc + 1 : acc));
        if (count > freqCount) {
            freqCount = count;
            freq = i;
        }
    }
    return freq;
}
console.log(findFrequent([3, 7, 3]));
console.log(findFrequent([null, 'hello', true, null]));
console.log(findFrequent([false, 'up', 'down', 'left', 'right', true, false]));

// Awarding Prizes
function awardPrizes(obj) {
    let arr = Object.entries(obj);
    let goldIndex = 0;
    arr.forEach((elem, index) => {
        if (elem[1] > arr[goldIndex][1]) {
            goldIndex = index;
        }
    });
    let silverIndex =
        goldIndex === arr.length - 1 ? goldIndex - 1 : goldIndex + 1;
    arr.forEach((elem, index) => {
        if (elem[1] > arr[silverIndex][1] && elem[1] < arr[goldIndex][1]) {
            silverIndex = index;
        }
    });
    let bronzeIndex = silverIndex + 1;
    arr.forEach((elem, index) => {
        if (
            elem[1] > arr[bronzeIndex][1] &&
            elem[1] < arr[goldIndex][1] &&
            elem[1] < arr[silverIndex][1]
        ) {
            bronzeIndex = index;
        }
    });
    console.log(goldIndex, silverIndex);
    arr[goldIndex][1] = 'Gold';
    arr[silverIndex][1] = 'Silver';
    // arr[bronzeIndex][1] = 'Bronze';
    return Object.fromEntries(arr);
}

console.log(
    awardPrizes({
        Joshua: 45,
        Alex: 39,
        Eric: 43,
    })
);
