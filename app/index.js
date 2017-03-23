// const limit=100;
// limit =200;
// console.log(limit);


let limit=200;
{
   let limit = 10;
   console.log('backstage limit',limit);
}

console.log('overwall limit', limit);

function hello(){
	let message="hello";
	console.log(message);
}

function greeting(){
	let message="how are you";
	console.log(message);
}

hello();
greeting();

// template literals
let a ='good';
let bb = `${a} morning`;
console.log(bb);

let b='birthday';
let c=`Happy ${b}`;
console.log(c);

// spread operator and rest parameters
let e=[20, 30 ,40];
let f=[10, ...e, 50];
console.log(f);

function collect(...z){
   console.log(z);
}
collect( 'Ann', 'Rita', 'zoe', 'Ian', 'zak');

// Destructuring Assignment on Arrays and objects
let k=[4, 5, 6];
// let four=k[0];
// let five=k[1];
let [four, five]=k;
console.log(four, five);

let animals=['Simba', 'Zazu', 'Ed'];
let [lion, bird]=animals;
console.log(lion, bird);

let king={name:'Mufasa',kids:1};
// let name=king.name;
// let kids=king.kids;
let {name,kids}=king;
console.log(name,kids);

let son ={ names:'Simba' , parents:2};
let names, parents;
({names , parents}= son);
console.log(names, parents);

//arrow function
setTimeout(function(){
   console.log('yaaaaa');
},3000) 

setTimeout(() => {
   console.log('yaaaaaES6');
},3000) 

let cheer= ()=>{
	console.log('wooohoooo');	
}
cheer();


//map and filter method
let values =[20 ,30 ,40]; 

let doubled= values.map((n) => n*2);
console.log(doubled);

let points=[34,49,4,33,52,22,10];

// let lowScores= points.filter((n)=> {
// 	return n<25;
// })
let lowScores= points.filter((n)=> n<25)
console.log(lowScores);

// string helper methos
let woo=`ya${'aa'.repeat(50)}`;
console.log(woo);

console.log('ladybug'.startsWith('lady')); //起始文字
console.log('ladybug'.endsWith('lady')); //結尾文字
console.log('ladybug'.includes('yb')); //包含字串
 
const addToCart=(item,number)=>{
 // return Number.isFinite(number); 
 return Number.isSafeInteger(number);
}

console.log(addToCart('pen',90));
console.log(addToCart('pen',Math.pow(2,54))); //pow=>次方

//modules
import{ opps,total } from './fellowship';
console.log(opps);
console.log(total);

// import { plus, huge} from './fellowship.js';
import huge from './fellowship.js'
// console.log(plus(6,7));
console.log(huge(8,9));


require('./index02.js');

