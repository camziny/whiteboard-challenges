const data = [
  { id: 1, name: "A", category: 1 },
  { id: 2, name: "B", category: 1 },
  { id: 3, name: "C", category: 1 },
  { id: 5, name: "E", category: 3 },
  { id: 6, name: "F", category: 3 },
  { id: 7, name: "G", category: 4 },
  { id: 9, name: "I", category: 5 },
  { id: 10, name: "J", category: 5 },
  { id: 11, name: "K", category: 6 },
  { id: 12, name: "L", category: 6 },
  { id: 13, name: "M", category: 7 },
  { id: 16, name: "P", category: 8 },
];

const myMap = data.reduce((acc, val) => {
  const category = val.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(val);
  return acc;
}, {});

console.log(myMap);
