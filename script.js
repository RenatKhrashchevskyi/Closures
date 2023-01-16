function makePassword(password) {
    return function guess (passwordGuess) {
        return (passwordGuess === password);
    };
}

let tryGuess = makePassword ('secret');
console.log("Guessing 'nope': " + tryGuess('nope'));
console.log("Guessing 'secret': " + tryGuess('secret'));


function multiN(n) {
    return function number(getN) {
        return n * getN;
    };
}
let someN = multiN(4);
console.log(someN(3));

function makeCounter() { 
    let count = 0;
    return {
        increment: function(){
            count++;
            return count;
        }
    };
    }
    let counter = makeCounter(); 
    console.log(counter.increment()); 
    console.log(counter.increment()); 
    console.log(counter.increment());


// closure with function expression

function makeTimer(doneMessage, n) {
    setTimeout(function() {
        console.log(doneMessage)
    }, n);

    doneMessage = 'Ouch!'
}

makeTimer('Cookies are done', 1000);

