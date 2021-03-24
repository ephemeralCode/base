//! Типы данных

// примитивные
console.log(typeof 0); // number
console.log(typeof null); // null (выдаст object)
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof 'JS'); // string ("", '', ``(для динамических данных))
console.log(typeof Symbol('JS')); // symbol(es6)

// непримитивный
console.log(typeof {}); // object 

// так же есть NaN не число - получим number

// undefined - переменная объявлена или не объявленна и изначально ничего в нее ничего не заносили, так же когда фукнция возвращает ничего
// null - переменная объявлена в ней что-то было, но было обнуленно, либо было объявленно вручную null

//! Приведение типов

let lang = 'JS'; //string

// приводит sting к boolean типу данных
if (lang){ //true
    console.log('Yes, i am', lang)
}

// '', 0, null, undefined, NaN - приводится к false
console.log(Boolean('')); 

//! Cтроки и числа

console.log(1 + '2') //12 - приводит к string
console.log('' + 1 + 0) //10

// зависит от действия
console.log('' + 1 + 0) // -1 - приводит к number
console.log('3' * '8') // 24 - приводит к number
console.log('42' - 40); // 2

// порядок важен
console.log(4 + 10 + 'px'); // 14px
console.log('px' + 5 + 10); // px510 - приводит к string

// NaN
console.log('px' - 2);

//null
console.log(null + 2); // 2

//undefined
console.log(undefined + 42); // undefined

//! == vs ===

// == - сравнивает значение, но с привидением типов
// === - сравнивает значение, без приведения к типу

console.log(2 == '2'); // true
console.log(2 === '2'); // false

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log('0' == false); // true так как приводит false = 0, string(0) = 0;
console.log('0' == 0);
console.log(0 == 0);

//! 

console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {});  // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false