// 1. 초기화식 2. 조건식 3. 증감식 4.실행해야 할 코드

// object.keys란?
// 자바스크립트의 object라는 객체 메소드로,
// 매개변수로 받은 객체의 key들을 모두 찾아 배열의 형태로 반환하는 객체 메소드.

let person = {
  name: "은비",
  age: 31,
  height: 167,
};
let newArray = Object.keys(person);
for (let i = 0; i < newArray.length; i++) {
  let nowkey = newArray[i];
  console.log(`key : ${nowkey}, value : ${person[nowkey]}`);
}
console.log(Object.keys(person));

for (let a = 1; a < 5; a++) {
  console.log(a);
}
