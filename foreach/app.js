// let persons=[
//     {name:"Anas",Age:27},
//     {name:"Ali",Age:25},
//     {name:"Ammar",Age:23},
//     {name:"Obada",Age:15},
//     {name:"Sami",Age:12},
// ];

// let marks=[75,65,55,45,35];
// let letters=["a","b","a","c","d","d","b","a","c"];




// for (let i = 0; i < persons.length; i++) {
//     console.log(persons[i].name);
// };
// let sum =0;
// persons.forEach(function him(person,index) {
//    sum=sum + person.Age
// });
// console.log(sum);



// let count={};

// letters.forEach( item => {
// if (count[item]) {
//     count[item] ++;
// } 
// else {
//     count[item]=1;
// }
// });
// console.log(count);



// let str=["a","b","c"];
// let a=["a"];
// arr=str.map(function (aa) {
//     return aa+a;
// });
// console.log(arr);
let divanswer=document.getElementById("result");
let inputElement=document.getElementById("input");

let weather=new Promise(function(resolve,reject){
    if (inputElement === "sure") {
        divanswer.innerHTML=resolve("it will be succefull trip");
    }
    if (inputElement === "careless") {
        divanswer.innerHTML=reject("you will be dissappointed");
     }
      else {
        divanswer.innerHTML="wrong value";
    }
});


weather()
