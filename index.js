function MyArray() {
  this.array = {};
  this.length = 0;
}

MyArray.isMyArray = (value) => value instanceof MyArray;

MyArray.prototype = Object.assign(MyArray.prototype, methodsPrototype);



// // тестовые примеры includes
// const myarray = new MyArray();
// myarray.push(1);
// myarray.push(2);
// myarray.push(3);
// console.log(myarray.array)

// console.log(myarray.includes(2));
// console.log(myarray.includes(4));
// console.log(myarray.includes(3, 3));
// console.log(myarray.includes(3, -1));


// console.log('-------new example------');

// const myarray2 = new MyArray();
// myarray2.push(1, 2, NaN);
// console.log(myarray2.array)

// console.log(myarray2.includes(NaN));



// console.log('-------new example------');
// const myarray3 = new MyArray();
// myarray3.push('a', 'b', 'c');
// console.log(myarray3.array)

// console.log(myarray3.includes('a', -100));
// console.log(myarray3.includes('b', -100));
// console.log(myarray3.includes('c', -100));
// console.log(myarray3.includes('c', 3));
// console.log(myarray3.includes('c', 100));


// // тестовые примеры indexOf
// console.log('--------тестовые примеры indexOf');

// const arr = new MyArray();
// arr.push(2, 5, 9);
// console.log(arr.array);

// console.log(arr.indexOf(2));
// console.log(arr.indexOf(7));
// console.log(arr.indexOf(9, 2));
// console.log(arr.indexOf(2, -1));
// console.log(arr.indexOf(2, -3));

// const animals = new MyArray();
// animals.push('ant', 'bison', 'camel', 'duck', 'elephant');
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


const arr = new MyArray();
arr.push('ангел', 'клоун', 'мандарин', 'хирург');
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// arr.push(1);
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());

// arr.push('a', 'b', 'c');
// const arr2 = new MyArray();
// arr2.push('d', 'e', 'f');
// const arrResult = arr.concat(arr2, [1, 3, 5]);
// console.log(arrResult);
// console.log(arr);

// arr.unshift('a', 'b');
// console.log(arr);
// arr.unshift(1, 5);
// console.log(arr);

// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr);

arr.forEach((element, index, array) => {
  element = 'a';
  console.log(element);
});
console.log(arr);