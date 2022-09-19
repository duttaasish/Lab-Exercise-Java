1.

// function ucFirst (str){
//     const capitalized =  str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalized;
// }
// console.log(ucFirst("asish"));


2.

// function truncate(str , num)
// {
//     if (str.length > num) {
//         return str.slice(0, num) + "...";
//       } else {
//         return str;
//       }
// }
// console.log(truncate("What I'd like to tell on this topic is:" ,15));

3.

// let styles = ['Jazz' , 'Blues','Green' , 'White' , 'Black' , 'Magenta'];
// styles.push('Rock-n-Roll');

// let arrLength = styles.length
// if(arrLength % 2 != 0)
// {
//     half = (arrLength / 2) +.5
//     styles[half-1] = 'Classics';
//     console.log(styles);

//     let removed = styles.slice(1);
//     console.log(removed);
    
//     styles.splice(0, 0, 'Rap' , 'Reggae');
//     console.log(styles);

// }else
// {
//     console.log("Not an odd array length...");
// }

4.

// var string2 =[];
// function camelize(str){
// for (var i=0; i<str.length; i++)
// {
//     if(str[i] === '-')
//     {
//         var result= str[i+1].toUpperCase(); 
//         i++;
//         string2[i] = result;
//     } 
//     else
//     {
//         string2[i]=str[i];
//     }

// }
// var myString='';
// for (var m in string2)
// {
//     myString = myString.concat(string2[m]);
// }
// console.log(myString);
// }

// camelize("list-style-image");

5.

// function Calculator()
// {
//     let operator;
//     let str1 =[] , str2 = [];
//     let j=0;
//     let k=0;
//     this.calculate = function (str)
//     {
//         for(var n = 0; n<str.length; n++)
//         {
//             if (str[n] ==='+')
//             {
//                 operator = '+';
//             }
//             if (str[n] === '-')
//             {
//                 operator = '-';
//             }
//         }

//         for(var i = 0 ; i<str.length; i++)
//         {
//             if(str[i] === "+" || str[i] ==="-")
//             {
//                 i++;
//                 for(var l=i; l<str.length; l++)
//                 {
//                     str2[j]=str[l];
//                     j++;
//                     i++;
//                 }
//                 }
//                 else
//                 {
//                     str1[k]=str[i];
//                     k++;
//                 }
//             }
//         var str3='';
//         var str4='';
//         for (var m in str1)
//         {
//             str3 = str3.concat(str1[m]);
//         }
//         for (var m in str2)
//         {
//             str4 = str4.concat(str2[m]);
//         }
//         if (operator === "+")
//         {
//             console.log(parseInt(str3)+parseInt(str4));
//         }
//         if (operator === "-")
//         {
//             console.log(parseInt(str3)- parseInt(str4));
//         }
//     }
    
    // this.addMethod = function(str6, func)
    // {
    //     function calc(a,b)
    //     {
    //         return a*b;
    //     }
    //     if(str6 === '*')
    //     {
    //         const message = calc(c,d);
    //         console.log(message);
    //     }
    // }
// }

// function Calculator() {
//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b,
//       "x": (a, b) => a * b,
//       "/": (a, b) => a / b,
//       "%": (a, b) => a % b,
//     };
  
//     this.calculate = function (str) {
//       let split = str.split(" "),
//         a = +split[0],
//         operator = split[1],
//         b = +split[2];
  
//       return this.methods[operator](a, b);
//     };
  
//     this.addMethod = function (name, func) {
//      this.methods[name] = func;
//     };
//   }
// const calc1 = new Calculator();
// const calc2 = new Calculator();

// let result = calc1.calculate("9 x 8");
// console.log(result);
// console.log(calc1.calculate("450 + 50"));
// calc2.calculate("300 - 14");
// const powerCalc=new Calculator();
// console.log(powerCalc.addMethod('*',(8,8)));

6.

// const unique = (arr) =>{
// uniqVal =[];
// let arrSort = arr.sort();;
//     for(var i=0; i<arrSort.length; i++)
//     {
//         if(arrSort[i] !=  arrSort[i+1])
//         {
//             uniqVal.push(arrSort[i]);
//         }
//     }
//     console.log(uniqVal);
// }

// let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna',
//  'Krishna', 'Hare', 'Hare', ':-O'];

// unique(values);

7.

let messages =[
    {text : 'Hello', from : 'John'},
    {text : 'How is going', from : 'John'},
    {text : 'See you soon', from : 'Alice'}

];

function addEntry(message)
{
    messages.push(message);
}

addEntry({text : 'New Message', from : 'Kuhi'});
addEntry({text : 'Hi', from : 'Asish'});

console.log(messages);

