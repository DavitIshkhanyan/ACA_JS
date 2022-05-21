let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let res = [
    [],
    [],
    []
];

for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
        // if (column == )
        res[row][column] = arr[column==arr[row].length-1?row+1:0][0];
    }
}

console.log(res);