//! Значения и ссылки

let a = 42;
let b = a; // копируются и записываются данные из переменной

b++;

console.log('a:', a); // 42
console.log('b:', b); // 43

//-
let a = [1, 2, 3];
let b = a; // записи не происходит, просто работает как ссылка

b.push(4);

console.log('a:', a); // 1, 2, 3, 4
console.log('b:', b); // 1, 2, 3, 4

//фикс ситуации выше
let a = [1, 2, 3];
let b = a.concat(); // возвращает копию массива

b.push(4);

console.log('a:', a); // 1, 2, 3
console.log('b:', b); // 1, 2, 3, 4

//-
let a = [1, 2, 3];
let b = a; // записи не происходит, просто работает как ссылка
let c = [1, 2, 3, 4];

b.push(4);

console.log('a:', a); // 1, 2, 3, 4
console.log('b:', b); // 1, 2, 3, 4

console.log(a === b); // true
console.log(a === c); // false