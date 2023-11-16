function sumAll(arr) {
    let a = arr[0]
    let b =arr [0]
    let min = a < b ? a : b;
    let max = a > b ? a : b;
    let sum = 0;
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  console.log(sumAll([1, 4]));  
  console.log(sumAll([4, 1]));   
  console.log(sumAll([5, 10]));