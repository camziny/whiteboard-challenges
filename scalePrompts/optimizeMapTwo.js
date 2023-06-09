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

const myMap = new Map();

data.forEach((val, index) => {
  const category = val.catagory;
  const entry = myMap.get(category);

  if (!entry) {
    entry = {
      category,
      list: [val],
    };
    myMap.set(category, entry);
  } else {
    entry.list.push(val);
  }
});

console.log(myMap);
