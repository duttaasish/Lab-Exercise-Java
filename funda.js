const prompt = require ("prompt-sync")();
// let a = prompt('Enter 1st number : ');
// let b = prompt('Enter 2nd number : ');
// console.log(parseInt(a) + parseInt(b));

// console.log(5>4);
// console.log("apple">"pineapple");
// console.log('2'>'12');

var c = null;
var d;





// console.log(c == d);

// console.log(typeof(c));
// console.log(typeof(d));
// console.log( null === +"\n0\n");


// Question 
// if ("0") {
//     console.log( 'Hello' ); 
//   }

// let result;
// let a = 3;
// let b = 0;
// (a + b < 4) ? result = 'Below' : result = 'Over';
// console.log(result);


// const  obj = {};
// const isEmpty = (check) => {if (Object.keys(check).length === 0)
// {
//     return true;
// }else{
//     return false;
// }
// }
// console.log(isEmpty(obj));


let ladder = {
    step: 0,
    up() {
      this.step++;
}, down() {
      this.step--;
     },
     showStep: function () {
       console.log( this.step );
} };

ladderUpDown();

function ladderUpDown()
{
let up = parseInt(prompt('Enter number of steps up : '));
let down = parseInt(prompt('Enter number of steps down : '));

if (up >= down){
for (var updown = 1; updown<=up; updown++)
{
    ladder.up();
}
for (var updown = 1; updown<=down; updown++)
{
    ladder.down();
}
ladder.showStep();
}else{
    console.log('Down steps cannot be more than steps up');
    ladderUpDown();
}
}


// function Accumulator(startingValue)
// {
//     this.value = startingValue;

//     this.read = function (){
//         this.value1 =  parseInt(prompt('Enter a number: '));
//         this.value = this.value + this.value1;       
//     }
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log('Total is : ' + accumulator.value); 
    




