//Recursive Fibonacci series
function recursiveFibonacci(n){
  if(n < 2){
    return n
  }
return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
  
}
console.log(recursiveFibonacci(3))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(9))

//O(n)
//Recursion time complexity is O(2^n)

//Recursive Factorial of a number

function recursiveFactorial(n){
  if(n === 0){
    return 1
  }
  return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(9))