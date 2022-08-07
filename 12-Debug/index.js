
function Fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let fibonacci = [1, 1]
    for (let i = 2; i < num; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }
    return fibonacci
}

console.log(Fibonacci(6))