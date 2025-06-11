class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Testing the classes
const person = new Person("John", 25);
console.log(person.name);  // Output: John
person.age = 30;           // Using the setter to change the age
console.log(person.age);    // Output: 30

const student = new Student("Alice", 22);
student.study();            // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); 
import { Person, Student, Teacher } from './script.js'; // Ensure correct path

describe('example to-do app', () => {
    it('should get the name', () => {
        const person = new Person("John", 25);
        expect(person.name).to.equal("John");
    });

    it('should change age', () => {
        const person = new Person("John", 25);
        person.age = 30;
        expect(person.age).to.equal(30);
    });

    it('John should study', () => {
        const student = new Student("John", 22);
        cy.spy(console, 'log');
        student.study();
        expect(console.log).to.be.calledWith('John is studying');
    });

    it('Alice should study', () => {
        const student = new Student("Alice", 22);
        cy.spy(console, 'log');
        student.study();
        expect(console.log).to.be.calledWith('Alice is studying');
    });

    it('John should teach', () => {
        const teacher = new Teacher("John", 30);
        cy.spy(console, 'log');
        teacher.teach();
        expect(console.log).to.be.calledWith('John is teaching');
    });

    it('Alice should teach', () => {
        const teacher = new Teacher("Alice", 30);
        cy.spy(console, 'log');
        teacher.teach();
        expect(console.log).to.be.calledWith('Alice is teaching');
    });
});