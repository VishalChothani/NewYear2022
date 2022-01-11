// USING PROTOTYPE
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.greetings = function () {
  return `Hi! My name is ${this.firstName} ${this.lastName}`;
};

const Student = function (firstName, lastName, grade) {
  Person.call(this, firstName, lastName);
  this.grade = grade;
};

Student.prototype = Object.create(Person.prototype); // Linking prototype

Student.prototype.greetings = function () {
  return `Hi! My name is ${this.firstName} ${this.lastName} and I'm studying in ${this.grade}`;
};

let jon = new Person("Jon", "Sure");
console.log(jon.greetings()); // Hi! My name is Jon Sure

let vishal = new Student("Vishal", "Chothani", "A");
console.log(vishal.greetings()); // Hi! My name is Vishal Chothani and I'm studying in A

// USING CLASS

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greetings() {
    return `Hi! My name is ${this.firstName} ${this.lastName}`;
  }

  yourName() {
    return `Hi! My name is ${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }

  greetings() {
    return `Hi! My name is ${this.firstName} ${this.lastName} and I'm studying in ${this.grade}`;
  }
}

const vishal = new Student("Vishal", "Chothani", "A");
console.log(vishal.greetings()); // Hi! My name is Vishal Chothani and I'm studying in A
console.log(vishal.yourName());
