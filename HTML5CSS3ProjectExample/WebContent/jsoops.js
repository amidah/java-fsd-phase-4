/**
 * OOPS: Encapsulation Inheritance Polymorphism Abstraction
 */

// Encapsulation

class Student{
	constructor(){
		var name;
		var marks;
	}
	
	getName(){
		return this.name;
	}
	
	getMarks(){
		return this.marks;
	}
	
	setName(name){
		this.name = name;
	}
	
	setMarks(marks){
		if(marks < 0 || marks > 100)
			{
				alert("Invalid Marks!!!")
			}
		else
			{
				this.marks = marks;
			}
	}
}


var student1 = new Student();
student1.setName("John");
student1.setMarks(90);


console.log("Student Name: " + student1.getName() + "\n" + "Student Marks: " + student1.getMarks());


// Inheritance

class Moment extends Date{
	constructor(){
		super();
	}
}

var m = new Moment();
console.log("Current Date: " + m.getDate() + "-" + (m.getMonth() + 1) + "-" + m.getFullYear());


class Bike{
	constructor(){
		this.company="BMW"
	}
}


class Vehicle extends Bike{
	constructor(name, price){
		super();
		this.name=name;
		this.price=price;
	}
}

var veh = new Vehicle("M 1000 RR", "45 LAKH");
console.log("Bike Details: " + veh.company + " " + veh.name + " " + veh.price);

// Polymorphism

class A{
	display(){
		console.log("A is invoked. \n")
	}
}

class B extends A{
	display(){
		console.log("B is invoked.")
	}
}

var a = [new A(), new B()]
a.forEach(function(msg){
	msg.display();
})


// Abstraction
 //here we are creating a constructor function
function Subject(){
	this.subname = subname;
	throw new Error("You can't create an instance of an abstract class");
}

function Department(subname){
	this.subname=subname;
}

Department.prototype=Object.create(Subject.prototype);

var department = new Department("Engineering");

console.log(department instanceof Subject);
console.log(department instanceof Department);











