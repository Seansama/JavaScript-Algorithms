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

function isPrime(n){
  if(n < 2){
    return false
  }
  for(let i = 2; i < n; i++){
    if(n % i === 0){
      return false
    }
  }
  return true
}
console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))
//Algorithm is linear time O(n)
// Single loops exibit linear time complexity(time increases as input size increases)

//Power of two algorithm

function powerOfTwo(n){
  if(n < 1){
    return false
  }
  while(n > 1){
    if(n % 2 !== 0){
      return false
    }
   n = n/2
  }
  return true
}
console.log(powerOfTwo(4))
console.log(powerOfTwo(9))
console.log(powerOfTwo(8))

//Algorithm is Logarithmic time O(log n)
//Input is halfed at every iteration

//Optimal power of two

function isPowerOfTwoBitwise(n){
  if(n < 1){
    return false
  }
  return (n & (n-1)) === 0
}