
function orderByKey(array, key) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

const data = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 }
];

const orderedData = orderByKey(data, 'age');
console.log(orderedData);
