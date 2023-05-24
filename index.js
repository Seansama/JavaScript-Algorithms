//Fibonacci sequence
function fibonacci(n){
  const fib = [0, 1]
  for(let i = 2; i < n; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}
console.log(fibonacci(3))
console.log(fibonacci(8))
console.log(fibonacci(10))

//Algorithm is linear time O(n)
// Single loops exibit linear time complexity(time increases as input size increases)

//factorial of a number

function factorial(n){
  let result = 1
  for(let i = 2; i <= n; i++){
    result = result * i
  }
  return result
}
console.log(factorial(0))
console.log(factorial(6))
console.log(factorial(13))

//Algorithm is linear time O(n)
// Single loops exibit linear time complexity(time increases as input size increases)

//Prime number

function isPrime(){
  
}