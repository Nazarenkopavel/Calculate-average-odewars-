//Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return array.reduce((acc, el) => acc + el) / array.length;
}

console.log(find_average([1, 2, 4, 6]));
