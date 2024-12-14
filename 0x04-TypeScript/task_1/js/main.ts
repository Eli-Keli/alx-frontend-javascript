interface Teacher {
    readonly firstName: string; // should only be modifiable when a Teacher is first initialized
    readonly lastName: string; // should only be modifiable when a Teacher is first initialized
    fullTimeEmployee: boolean; // this attribute should always be defined
    yearsOfExperience?: number; // this attribute is optional
    location: string; // this attribute should always be defined
    [key: string]: any; // Allows for any other properties to be added to the object
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // this property should not be allowed
};

console.log(teacher);
// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

const director: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};

console.log(director);
// should print
// Object
// firstName: "Jane"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`; // returns the first initial of the first name and the full last name
}

console.log(printTeacher('John', 'Doe')); // should print "J. Doe"



interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}