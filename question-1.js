const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

let allPeople = [];


// เริ่มเขียนโค้ดตรงนี้

allPeople = [...techupPeople, ...techcoolPeople];
const result = allPeople.filter(user => user.age < 20);
console.log(result);

