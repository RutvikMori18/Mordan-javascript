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


//type conversion
//1 number to string
let val;
val=String(5+5);
console.log(val);
console.log(typeof(val));
console.log(val.length);

//2 boolean to string
 val1=String(true);
 console.log(typeof(val1));
console.log(val1.length);

//date to string
 var val2=String(new Date());
//array to string 
var val3= String([1,2,3,4,5]);
console.log(typeof(val3));
console.log(val3.length);

//to string
var val5=(6).toString();
console.log(typeof(val5));
console.log(val5.length);

//simple math with numbers
const num1=200;
const num2=50;
var val1=0;
val1 =num1+num2;
val1 =num1-num2;
val1 =num1*num2;
val1 =num1/num2;
val1 = num1%num2;
console.log(val1);

//math object

val1=Math.PI;
val1=Math.E;
val1=Math.round(2.3);
val1=Math.ceil(2.40);
val1=Math.floor(2.8);
val1=Math.sqrt(64);
val1=Math.abs(-7);
val1=Math.pow(8,2);
val1=Math.min(2,3,5,1,0,111);
val1=Math.max(1,2,5,4,5,6,9,88);
val1=Math.random();
val1=Math.floor(Math.random()*20 +1);
console.log(val1);

//string concatination

const firstName='Rutvik';
const lastName='mori';

var val5;
val5=firstName+lastName;
//concatination
val5=firstName + ' '+lastName;

//append
val5=' brad ';
val5+='traversy';

//escaping
val5='hello,that\'s aweasom I can\'t wait';

//length
val5=firstName.length;

//concate()
val5=firstName.concat(' ',lastName);

//chane casee
val5=firstName.toLowerCase();


//index of
val5=firstName.indexOf('v');

//char at
val5=firstName.charAt(2);

//get last char
val5=firstName.charAt(firstName.length-1);

//substring
val5=firstName.substring(0,3);


//split
const First='hello there my name is Rutvik';
val5=First.split(' ');

//replace
val5=First.replace('Rutvik','Mori');
console.log(val5);