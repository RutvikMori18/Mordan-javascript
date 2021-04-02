//single line comment
//log to console
console.log('hello world');
console.log(12300);
console.log(true);
var greating ='hello';
console.log(greating);
console.log([1,2,3,40]);
console.log({a:1,b:2});
console.table({a:1,b:2});

console.error('this is some error');

console.clear();

console.warn('this is a warning');

console.time('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.timeEnd('hello world');
/*multi line comment */

//var ,let,const

//We can reassign variable in var and let
/*var name='mori';
console.log(name);
name='rutvik';
console.log(name);

//init variable
var greeting;
console.log(greeting);
greeting='Hello';
//letters,numbers,_,$
//can not start with number

//multi word vars

var firstName='john'; //camelcase
var first_name='sina';//underscore
var FirstName='nikky Bella';//pascal case
 */
//LET
let name;
name='mori';
console.log(name);
name='rutvik';
console.log(name);

//CONST

const name1='mori';
console.log(name1);
//can not reassign
//name=sara;
//must have to assign the value
const greeting='good evening';
console.log(greeting);

const person = {
    name: 'rutvik',
    age:20
}
//we can change the value of const object
person.name='Mori';
person.age=21;
console.log(person);

const number1=[1,2,3,4,5];
number1.push(6);
console.log(number1);

//DATA TYPE 1 PRIMTIVE 2 REFERENCE

//1 PRIMITIVE

const name2='RUTVIK';
console.log(typeof(name2));
//number
const num=30;
console.log(typeof(num));
//boolean
const haskids=true;
console.log(typeof(haskids));
//NULL
const car=null;
console.log(typeof(car));
//undefined
let test;
console.log(typeof(test));
//symbol
const sym=Symbol();
console.log(typeof(sym));

//2 REFERENCE

//array
const arr=['movie','music'];
console.log(typeof(arr));

//object litteral
const address={
    city:'india',
    state:'gujrat'
}
console.log(typeof(address));

const date=new Date();
console.log(date);
console.log(typeof(date));