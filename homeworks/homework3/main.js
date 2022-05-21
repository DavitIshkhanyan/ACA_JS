// classwork April 26
// 25% Discount on the Most Expensive Item
const cart = [
    { name: 'chocolate bar', quantity: 3, price: 1.63 },
    { name: 'chewing gum', quantity: 6, price: 0.25 },
    { name: 'lolly pop', quantity: 1, price: 0.15 },
];

const twentyFiveOnOne = (cart) => {
    let max = 0;
    cart.forEach((element, index) => {
        if (element.price > cart[max].price) {
            max = index;
        }
    });
    cart[max].price =
        cart[max].price * (cart[max].quantity - 1) +
        (cart[max].price * 75) / 100;
    cart[max].quantity = 1;
    return +cart
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
};

console.log(twentyFiveOnOne(cart));

// Move Capital Letters to the Front ??????????????????????????????????????????????
function capToFront(s) {
    let lowerCase = [...s].filter((l) => l === l.toLowerCase());
    let upperCase = [...s].filter((l) => l === l.toUpperCase());
    return [...upperCase, ...lowerCase].join('');
}

console.log(capToFront('shOrtCAKE'));

// Is the Word an Isogram?
const isIsogram = (word) => {
    word = word.toLowerCase().split('').sort();
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            return false;
        }
    }
    return true;
};
console.log(isIsogram('Consecutive'));

// C*ns*r*d Str*ngs
const uncensor = (str, vowels) => {
    str = str.split('');
    vowels = vowels.split('');
    str.forEach((element, index) => {
        if (element === '*') {
            str[index] = vowels.shift();
        }
    });
    return str.join('');
};
console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'));

// classwork May 7 ////
// Digits Sum Root
const rootDigit = (n) => {
    return n < 10
        ? n
        : rootDigit(
              Array.from(String(n), Number).reduce((acc, item) => acc + item)
          );
};
console.log(rootDigit(999888777));

// Contact List
function sortContacts(names, sort) {
    if (!names || names === []) {
        return [];
    }
    return names.sort((a, b) => {
        a = a.slice(a.indexOf(' '));
        b = b.slice(b.indexOf(' '));
        return sort === 'ASC'
            ? a > b
                ? 1
                : a === b
                ? 0
                : -1
            : a < b
            ? 1
            : a === b
            ? 0
            : -1;
    });
}

console.log(
    sortContacts(['Paul Erdos', 'Leonhard Euler', 'Carl Gauss'], 'DESC')
);

// Learn Lodash: _.find, Find a Value in an Array or Object
var users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
];
vehiclesAsObject = {
    stall1: {
        make: 'toyota',
        color: 'red',
        engine: 'v6',
        type: 'hatchback',
        year: 2018,
        mileage: 113312,
        isUsed: true,
    },
    stall2: {
        make: 'ford',
        color: 'blue',
        engine: 'v4',
        type: 'car',
        year: 2012,
        mileage: 123532,
        isUsed: true,
    },
    stall3: {
        make: 'mazda',
        color: 'grey',
        engine: 'v8',
        type: 'sedan',
        year: 2021,
        mileage: 0,
        isUsed: false,
    },
    stall4: {
        make: 'ford',
        color: 'green',
        engine: 'v8',
        type: 'truck',
        year: 2008,
        mileage: 25467,
        isUsed: true,
    },
};

function find(collection, predicate, startIndex) {
    collection = Object.values(collection);
    let res = undefined;
    collection = collection.slice(startIndex);
    collection.some((item) => {
        switch (typeof predicate) {
            case 'function':
                if (predicate(item)) {
                    res = item;
                    return true;
                }
                break;
            case 'object':
                if (Array.isArray(predicate)) {
                    if (item[predicate[0]] === predicate[1]) {
                        res = item;
                        return true;
                    }
                } else {
                    let keys = Object.keys(predicate);
                    if (keys.every((k) => predicate[k] === item[k])) {
                        res = item;
                        return true;
                    }
                }
                break;
            case 'string':
                if (predicate in item) {
                    res = item;
                    return true;
                }
        }
    });
    return res;
}

console.log(
    find(users, function (o) {
        return o.age < 40;
    })
);

console.log(find(users, { age: 1, active: true }));

console.log(find(users, ['active', false]));

console.log(find(users, 'active'));

console.log(
    find(vehiclesAsObject, { make: 'mazda', color: 'grey', engine: 'v8' }, 2)
);

function find(o, t, i = 0) {
    T = typeof t;
    return Object.values(o).find((e, j) => {
        return (
            j >= i &&
            (T == 'function'
                ? t(e)
                : T == 'string'
                ? e[t]
                : t instanceof Array
                ? t.every((x, k) => (k % 2 ? e[t[k - 1]] == x : !0))
                : Object.keys(t).every((x) => e[x] === t[x]))
        );
    });
}

// Burglary Series (23): Find and Remove
function findAndRemove(obj) {
    res = {};
    let keys = Object.keys(obj);
    Object.entries(obj).forEach((item, index) => {
        res[keys[index]] = Object.fromEntries(
            Object.entries(item[1])
                .filter((item) => !isNaN(+item[1]))
                .map((item) => [item[0], +item[1]])
        );
    });
    return res;
}

console.log(
    findAndRemove({
        bedroom: {
            slippers: '10000',
            piano: '550',
            call: 'vet',
            travel: 'world',
        },
    })
);
console.log(
    findAndRemove({
        kitchen: {
            ['gold spoons']: '900',
            piano: '550',
            notes: 'ga0r76ba22g4e',
        },
        cellar: {
            reminder: 'dog',
            bottle: '750',
        },
    })
);

// Get Notes Distribution
function getNotesDistribution(students) {
    let res = {};
    for (let i in students) {
        students[i].notes
            .filter((item) => item > 0 && item < 6)
            .forEach((item) =>
                res[item] ? (res[item] += 1) : (res[item] = 1)
            );
    }
    return res;
}
console.log(
    getNotesDistribution([
        {
            name: 'Steve',
            notes: [5, 5, 3, -1, 6],
        },
        {
            name: 'John',
            notes: [3, 2, 5, 0, -3],
        },
    ])
);
