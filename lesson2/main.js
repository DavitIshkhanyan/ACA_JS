function primeFactor(n) {
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            let prime = true;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    prime = false;
                }
            }
            if (prime) {
                console.log(i);
            }
        }
    }
}
primeFactor(144);

function fib(n) {
    let a = 0;
    let b = 1;
    let res = [a, b];
    while (b <= n) {
        [a, b] = [b, a + b];
        res.push(a);
    }
    console.log(res);
}
fib(13);

function retOnce(arr) {
    let res = [];
    for (let i of arr) {
        if (!res.includes(i)) {
            res.push(i);
        }
    }
    return res;
}
let arr1 = [1, 2, 3, 3, 2, 5];
let arr2 = [4, 4];
console.log(retOnce(arr1));

function zipIt(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "sizes don't match";
    }
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push([arr1[i], arr2[i]]);
    }
    return res;
}
console.log(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim']));

function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(findNaN([NaN, 1, 2, 3, 4]));

function mirror(arr) {
    for (let i = arr.length - 2; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
}
console.log(mirror([1, 2, 3, 4, 5]));

function sortIt(arr) {
    let res = [];
    while (arr.length > 0) {
        let minIndex = 0;
        let min = arr[minIndex];
        for (let j = 0; j < arr.length; j++) {
            let n = Array.isArray(arr[j]) ? arr[j][0] : arr[j];
            if (n < min) {
                minIndex = j;
                min = n;
            }
        }
        res.push(arr[minIndex]);
        arr.splice(minIndex, 1);
    }
    return res;
}
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));

// Prettier
// Live Server
