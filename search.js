//Linear search

function linearSearch(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i
    }
  }
  return -1
}
console.log(linearSearch([-5,6,7,8,-1], 8))
console.log(linearSearch([2,5,7,8,-9], 7))
console.log(linearSearch([3,4,5,7,8], 9))

//Time complexity is linear time O(n)