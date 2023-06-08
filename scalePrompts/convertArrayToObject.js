const arrayToObject = (arr) => {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    var orderId = obj.orderId;
    delete obj.orderId;
    if (!result[orderId]) {
      result[orderId] = [];
    }
    result[orderId].push(obj);
  }
  return result;
};

const array = [
  { imageId: 56, url: "", orderId: 1, id: 123 },
  { imageId: 67, url: "", orderId: 1, id: 124 },
];
const obj = arrayToObject(array);
console.log(obj);
