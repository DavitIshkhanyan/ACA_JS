// Minesweeper Number of Neighbouring Mines
function minesweeperNumbers(board) {
    let res = [];
    board.forEach((item, row) => {
        res[row] = [];
        item.forEach((element, column) => {
            res[row][column] = 0;
            if (element === 1) {
                res[row][column] = 9;
            } else {
                for (let i = row - 1; i <= row + 1; i++) {
                    for (let j = column - 1; j <= column + 1; j++) {
                        if (i !== row || j !== column) {
                            board[i]
                                ? board[i][j] === 1
                                    ? res[row][column]++
                                    : null
                                : null;
                        }
                    }
                }
            }
        });
    });
    return res;
}

console.log(
    minesweeperNumbers([
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 0],
    ])
);

// Clockwise Cipher
function clockwiseCipher(message) {
    let len = Math.ceil(Math.sqrt(message.length));
    let res = [];
    for (let i = 0; i < len; i++) {
        res[i] = [];
        for (let j = 0; j < len; j++) {
            res[i][j] = ' ';
        }
    }
    let [flag, flag1, x, i, j] = [1, 2, 0, 0, 0];
    while (x < message.length) {
        switch (flag) {
            case 1:
                res[i][j] = message[x];
                break;
            case 2:
                res[j][len - i - 1] = message[x];
                break;
            case 3:
                res[len - i - 1][len - j - 1] = message[x];
                break;
            case 4:
                res[len - j - 1][i] = message[x];
                break;
        }
        x++;
        flag++;
        if (flag === 5) {
            flag = 1;
            if (j === len - flag1) {
                flag1++;
                i++;
                j = i;
            } else {
                j++;
            }
        }
    }
    return res.map((item) => item.join('')).join('');
}

console.log(clockwiseCipher('Mubashir Hassan'));
console.log(clockwiseCipher('Matt MacPherson'));
console.log(clockwiseCipher('Edabit is amazing'));
console.log(clockwiseCipher("Started from the bottom now we're here"));
console.log(
    clockwiseCipher(
        "I am so clever that sometimes I don't understand a single word of what I'm saying"
    )
);
// console.log(
//     clockwiseCipher(
//         'Even though I walk through the darkest valley, I will fear no evil, for you are with me'
//     )
// );

// console.log(
//     clockwiseCipher(
//         'Even though I walk through the darkest valley, I will fear no evil, for you are with me'
//     )
// );
