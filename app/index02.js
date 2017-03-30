
// defining class 
import Animal from './Animal.js';



// Inheriting class
class Lion extends Animal{
	constructor(name, height, color){
		super(name,height);
		this.color=color;
	}
	Hello(){
		console.log(`hi I'm ${this.name} from Lion zone`);
	}
}

let son= new Lion("Ed",8.9,"red");
console.log(son);
son.Hello();


// static methods in classes
class Calculator{
	static multiply(a,b){
		return a*b;
	}

	static add(a,b){
		return a+b;
	}
}

let qq=Calculator.add(8,9);
console.log(qq);

//prototype
function Wizard(name, house, pet){
  this.name=name;
  this.house=house;
  this.pet=pet;

  this.greet=() => `I'm ${this.name} form ${this.house}`;
}

Wizard.prototype.pet_name;

Wizard.prototype.info=function(){
	return `i have a ${this.pet} named ${this.pet_name}`
}

let wiii=new Wizard('wiiii','castle','rabbit');
wiii.pet_name="bini";
console.log(wiii.info());

//Set
let a_set=new Set();
a_set.add(4);
a_set.add(90);
a_set.add("mayday");
a_set.add({x:50 ,y:500});

console.log(a_set.size);
console.log(a_set.has(8));

let number_set=[9,93,84,93,10];
let numSet=new Set(number_set);
console.log(numSet);

for(let element of numSet.values()){
	console.log(element);
}

let chars='sjuhuiwpkojciojiwowoijgoiowp';
let chars_arr=chars.split("");
let chars_set=new Set(chars_arr);
console.log(chars_set);
console.log(chars_arr);

//Maps
let a_map= new Map();
let key_1="string key";
let key_2={ a:'key'};
let key_3=function(){};

a_map.set(key_1,'return value for a string key');
a_map.set(key_2,'return value for an object key');
a_map.set(key_3,'return value for a function key');
console.log(a_map);

let numArr=[[1,'one'],[2,'two'],[3,'three']];
let valMap=new Map(numArr);
console.log(valMap);

for(let [key ,value] of valMap.entries()){
   console.log(`${key} points to ${value}`);
}

let string='jisogpjqiuhgjiseocmjguqpejgpsietjiofswui';

let letters=new Map();
// console.log(string);

for (let i=0 ; i<string.length; i++){
   let letter=string[i];
   if(!letters.has(letter)){
     letters.set(letter,1);
   }else{
     letters.set(letter,letters.get(letter)+1);
   }

}
console.log(letters);

//Closures

