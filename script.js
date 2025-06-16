
export class Person {
    constructor(name, age) {
        this._name = name; // Private variable
        this._age = age;   // Private variable
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

// Example Usage
const person = new Person("John", 25);
console.log(person.name);  // Output: John
person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach();