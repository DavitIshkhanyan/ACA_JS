// Recursion: Left Shift by Powers of Two
// function shiftToLeft(x, y) {
//     if (y == 0) {
//         return x;
//     }
//     return 2 * shiftToLeft(x, y - 1);
// }
// console.log(shiftToLeft(10, 3));

// Is the Input Factorial of an Integer?
function isFactorial(n) {
    let i = 2;
    while (true) {
        if (n % i === 0) {
            n = parseInt(n / i);
        } else {
            break;
        }
        i++;
    }
    if (n == 1) {
        return true;
    } else {
        return false;
    }
}
// function isFactorial(n) {}
console.log(isFactorial(6));
