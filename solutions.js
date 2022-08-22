//#1
//Closure is a function that returns another function

//#2

//a
// Closure is Obviously used in the "personalDice" function
// because the function is returning another function

//b
// Calling dansroll twice will not change the fact that the function is returning another function but it will call it twice resulting in the change of results like the value of the random number

//c
//The lexical scope of newRoll is the same function that its defined on

//#3

const creatBase = (n1) => {
  return function (n2) {
    return n1 + n2;
  };
};

const addSix = creatBase(6);
console.log(addSix(10));
console.log(addSix(21));
