const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้



function checkStudent(){
 return  students.filter(user => user.score > 50).reduce((acc,cur) => {
    return acc + cur.score + (cur.score *0.1);
 }, 0)
}

console.log(`Total score is ${checkStudent()}`);
