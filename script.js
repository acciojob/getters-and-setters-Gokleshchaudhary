{
    "name": "your-project-name",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "test": "cypress open"
    },
    "devDependencies": {
        "cypress": "^X.X.X" // Replace with your Cypress version
    }
}
export class Person {
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

export class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

export class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}
import { Person, Student, Teacher } from './script.js'; // Ensure correct path

describe('example to-do app', () => {
    let person, student, teacher;

    beforeEach(() => {
        person = new Person("John", 25);
        student = new Student("Alice", 22);
        teacher = new Teacher("Bob", 40);
    });

    it('should get the name', () => {
        expect(person.name).to.equal("John");
    });

    it('should change age', () => {
        person.age = 30;
        expect(person.age).to.equal(30);
    });

    it('John should study', () => {
        cy.spy(console, 'log');
        student.study();
        expect(console.log).to.be.calledWith('Alice is studying');
    });

    it('Alice should study', () => {
        cy.spy(console, 'log');
        student.study();
        expect(console.log).to.be.calledWith('Alice is studying');
    });

    it('John should teach', () => {
        cy.spy(console, 'log');
        teacher.teach();
        expect(console.log).to.be.calledWith('Bob is teaching');
    });

    it('Alice should teach', () => {
        cy.spy(console, 'log');
        teacher.teach();
        expect(console.log).to.be.calledWith('Bob is teaching');
    });
});