//! замыкание - функция имеет доступ до вышестоящего скоупа переменных

function sayHelloTo(name) {
    // инициализируется в {scope, переменные, контекст(this)}
    const massage = 'Hello' + name;

    return function() {
        // функция которая имеет доступ к скоупу своего родителя
        console.log(massage);
    }
}

// любая функция замыкает хотя бы window

function sq(){
    let count = 0;

    return function(){
        return ++count;
    }
}

let count = qs();