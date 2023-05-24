//Linear search

function linearSearch(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i
    }
  }
  return -1
}
console.log(linearSearch([-5,-1,6,7,8], 8))
console.log(linearSearch([-9,2,5,7,8], 7))
console.log(linearSearch([3,4,5,7,8], 9))

//Time complexity is linear time O(n)

//Binary Search(iterative)

function binarySearch(arr, target){
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
      return middleIndex
    }
    if(target < arr[middleIndex]){
      rightIndex = middleIndex - 1
    }else{
      leftIndex = middleIndex + 1
    }
  }
  return -1
}
console.log(binarySearch([-5,-1,6,7,8], 8))
console.log(binarySearch([-9,2,5,7,8], 7))
console.log(binarySearch([3,4,5,7,8], 9))

//Time complexity is O(log n)
// Input size reduces by half for every iteration

//Binary Search(recursive)

function recursiveBinarySearch(arr, target){
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex){
  if(leftIndex > rightIndex){
    return - 1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if(target === arr[middleIndex]){
    return middleIndex
  }

  if(target < arr[middleIndex]){
    return search(arr, target, leftIndex, middleIndex - 1)
  }else{
    return search(arr, target, middleIndex + 1, rightIndex)
  }
}
console.log(recursiveBinarySearch([-5,-1,6,7,8], 8))
console.log(recursiveBinarySearch([-9,2,5,7,8], 7))
console.log(recursiveBinarySearch([3,4,5,7,8], 9))

//Time complexity is O(log n)
// Input size reduces by half for every iteration