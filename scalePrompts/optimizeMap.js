const data = [
  { id: 1, name: "A", catagory: 1 },
  { id: 2, name: "B", catagory: 1 },
  { id: 3, name: "C", catagory: 1 },
  { id: 5, name: "E", catagory: 3 },
  { id: 6, name: "F", catagory: 3 },
  { id: 7, name: "G", catagory: 4 },
  { id: 9, name: "I", catagory: 5 },
  { id: 10, name: "J", catagory: 5 },
  { id: 11, name: "K", catagory: 6 },
  { id: 12, name: "L", catagory: 6 },
  { id: 13, name: "M", catagory: 7 },
  { id: 16, name: "P", catagory: 8 },
];

const myMAP = new Map();

data.forEach((val) => {
  const getVal = myMAP.get(val.catagory);
  if (!getVal) {
    myMAP.set(val.catagory, val);
  } else {
    getVal.list = getVal.list || [];
    getVal.list.push({ ...val, inList: true });
    myMAP.set(val.catagory, getVal);
  }
});

console.log(myMAP);
