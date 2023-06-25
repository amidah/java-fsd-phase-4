/**
 * Data Types:
 * 
 * Primitive Data Type-
 * =====================
 * String
 * Boolean
 * Number
 * Undefined
 * Null
 * 
 * 
 * Non-Primitive Data Type
 * ========================
 * Object
 * Array
 * Regex Exp
 * 
 * 
 */


/*Javascript function*/

/*function functionName([arg1, arg2, ......, argN]){
	// code to be executed
}*/

function getCubeAndUserinfo(number){
	console.log(number * number * number);
	console.log(getUserInfo());
}


function getUserInfo(){
	return "Sam is 9 years old. He is a techy. He loves to create user interactive websites";
}

//Object => Entity have state (properties) and behavior (methods)

//JS => template based not class based.

// 3 ways to create JS Objects:
// 1. by object literal

//syntax:  object={prop1:val1, prop2:val2, prop3:val3 ........ propN:valN}

employee={id:101, name:"Sam", age:28, salary:"4000USD"}
//document.write("ID: " + employee.id);
//document.write("NAME: " + employee.name);
//document.write("AGE: " + employee.age);
//document.write("SALARY: " + employee.salary);


// 2. by creating instance of an object directly (using new keyword)

// syntax: var objectName = new Object();

var car = new Object();
car.name="Porsche";
car.color="Black";
car.capacity="4 Seater";

console.log("Name: " + car.name + "\n" + "Color: " + car.color + "\n" + "Seating Capacity: " + car.capacity);



// 3. by using object constructor(using new keyword)

function student(id, name, grade){
	this.id = id;
	this.name = name;
	this.grade = grade;
	this.changeGrade = changeGrade;
	
	function changeGrade(otherGrade){
		this.grade=otherGrade;
	}
}

student = new student(100, "John", 'A');

console.log("Student Details::")
console.log(student.id + "\n" + student.name + "\n" + student.grade);

console.log("\n\n");

student.changeGrade('B');

console.log("Student Details::")
console.log(student.id + "\n" + student.name + "\n" + student.grade);


// Javascript Arrays

var games = ["chess", "football", "basketball"]

console.log(games)

for(i=0; i<games.length; i++){
	console.log(games[i] + "\n");
}

console.log("\n");

var colors = new Array();
colors[0] = "red";
colors[1] = "green";
colors[2] = "yellow";
for(i=0; i<colors.length; i++){
	console.log(colors[i] + "\n");
}

console.log("\n");

var friends = new Array("Sam", "John", "Dom");
for(i=0; i<friends.length; i++){
	console.log(friends[i] + "\n");
}


// Working with Date Objects

// showing current date and time 
var today = new Date();
document.getElementById('currdate').innerHTML=today;

// digital clock

window.onload=function(){getTime();}

function getTime(){
	var todayDate = new Date();
	var hour = todayDate.getHours();
	var minute = todayDate.getMinutes();
	var second = todayDate.getSeconds();
	
	minute = checkTime(minute);
	second = checkTime(second);
	
	document.getElementById('digitalclock').innerHTML=hour+":"+minute+":"+second;
	setTimeout(function(){getTime()}, 1000);
}

function checkTime(param){
	if(param < 10){
		param = "0" + param;
	}
	return param;
}


// BOM - Browser Object Model -> default browser object is window


// Browser Object:
//1. Window Object
//2. History Object
//3. Navigator Object
//4. Screen Object
//5. Document Object - Document Object Model (DOM)



//alert("Hello JavaScript!!!");

//window.alert("Hello JavaScript!!!");

// alert
// prompt
// confirm
// setTimeout
// open
// close

//var promptVal = window.prompt("Enter Username:: ");
//window.alert(promptVal)


//
var confirmBack = window.confirm("Do you want to go back to the previous page?");

// History Object

if(confirmBack){
window.history.back();
}

var confirmForward = window.confirm("Do you want to go to the next page?");

if(confirmForward){
window.history.forward();
}

var confirm2Forward = window.confirm("Do you want to go to the 2 next page?");

if(confirm2Forward){
	window.history.go(2);
	}

var confirm2Backward = window.confirm("Do you want to go to the 2 backward page?");

if(confirm2Backward){
	window.history.go(-2);
	}


// Navigator

console.log("navigator.appCodeName: "+navigator.appCodeName + "\n");  
console.log("navigator.appName: "+navigator.appName + "\n");  
console.log("navigator.appVersion: "+navigator.appVersion + "\n");  
console.log("navigator.cookieEnabled: "+navigator.cookieEnabled + "\n");  
console.log("navigator.language: "+navigator.language + "\n");  
console.log("navigator.userAgent: "+navigator.userAgent + "\n");  
console.log("navigator.platform: "+navigator.platform + "\n");  
console.log("navigator.onLine: "+navigator.onLine + "\n");  



// javascript document object

// Whenever html document is loaded in the browser, it becomes a document object.

function printvalue(){
	var username = document.myform.nameinput.value;
	alert("Welcome " + username + ".");
}

function calcube(){
	var number = document.getElementById("number").value;
	alert("The Cube of " + number + " is " + Math.pow(number, 3))
}

function getelementsinfo(){
	var genders = document.getElementsByName("gender");
	alert("The genders mentioned inside the form are: " + "[" + genders[0].value + ", " + genders[1].value + "]");
}

function mouseoverevent(){
	alert("Hey this is a mouse over event handling...")
}

function mouseoutevent(){
	alert("Hey this is a mouse out event handling...")
}

function focusevent(){
	document.getElementById("inputtext").style.background = "aqua";
}

function keydownevent(event){
	
	alert("The key down is " + event.key);
}


// addEventListener() - inbuilt method of JS through which we can add multiple events to a particular html element

// syntax - addEventListener(event, function, useCapture)
// here the third parameter is optional
var inputelement = document.getElementById("keyprs");
inputelement.addEventListener("focus", handlefocusevent);
inputelement.addEventListener("keypress", keypressevent);


function handlefocusevent(){
	inputelement.style.background = "lightgreen";
}

function keypressevent(){
	alert("The key pressed is " + event.key);
}

// JavaScript Class

class Employee{
	constructor(id, name){
		this.id = id;
		this.name = name;
	}
	
	empdetails(){
		alert("Employee ID:: " + this.id + " " + "Employee Name:: " + this.name);
	}
}


var employee1 = new Employee(007, "Roy");


var employee2 = new Employee(008, "William");


employee1.empdetails();
employee2.empdetails();


// Express a class without assigning any name to it.

var student = class{
	constructor(id, name){
		this.id=id;
		this.name = name;
	}
}

alert("Employee class name: " + Employee.name)
alert("Student class name: " + student.name)


// JS Prototype Objects

function Car(name, color){
	this.name = name;
	this.color = color;
}

Car.prototype.carDetail = function(){
	return this.name + " is of " + this.color + " color"; 
}

Car.prototype.owner1 = "John";
	
	
Car.prototype.owner2 = "Riya";

var car1 = new Car("Porsche", "Black");
var car2 = new Car("Audi", "Red");

alert("Car 1 Details: " + car1.owner1 + " is the owner of " + car1.carDetail())
alert("Car 2 Details: " + car2.owner2 + " is the owner of " + car2.carDetail())








































