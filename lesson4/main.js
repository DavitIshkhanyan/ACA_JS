let company = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 1600 },
    ],
    development: {
        sites: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
        ],
        internals: [{ name: 'Jack', salary: 1300 }],
    },
};

function sumSalaries(depName) {
    if (Array.isArray(depName)) {
        return depName.reduce((a, b) => a + b.salary, 0);
    }
    let sum = 0;
    for (let subdep of Object.values(depName)) {
        sum += sumSalaries(subdep);
    }
    return sum;
}
console.log(sumSalaries(company.development.sites));

// arrow function arguments chuni
console.log(typeof (1, 'a'));

// spread - Array, iterable
// Array.from - Array, arr-like, iterable

// arr cloning
// let obj = {
//     a: 1,
//     b: 2,
// };
// let arr = [1, 2];
// console.log(...arr);
// console.log(...obj);
// let obj1 = { ...obj };
// console.log(obj1);
