//! Поднятие (происходит после запуска скрипта для функции и переменные)

console.log(z); // undefined (инициализируется в самом начале скрипта, но им ничего не назначается)
var z = 256;
console.log(x); // 256

// const & let сработает одинаково
console.log(x); // ошибка инициализации (инициализирует в том месте, где он инициализируется в скрипте)
let x = 256;
console.log(x); // 256

//! function Expression & function Declaration

//function Declaration
console.log(sum(1, 41)); //42

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 41)); //42

//function Expression
console.log(sum(1, 41)); // ошибка инициализации

var sum = function(a, b) {
    return a + b;
}

console.log(sum(1, 41)); //42