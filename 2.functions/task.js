function getArrayParams(...arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return { min: min, max: max, avg: Number((sum/arr.length).toFixed(2)) };
}

function summElementsWorker(...arr) {
  let sum =0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    }
    else {
      sumOddElement += num;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
