function getCount(str) {
  let count = 0
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++){
    if (arr[i] ==='a' || arr[i] ==='e' || arr[i] === 'i'|| arr[i]=== 'o' || arr[i] === 'u'){
      count++
    }
  }
  
  return count;
}
