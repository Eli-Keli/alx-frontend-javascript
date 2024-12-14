interface Teacher {
    readonly firstName: string; // should only be modifiable when a Teacher is first initialized
    readonly lastName: string; // should only be modifiable when a Teacher is first initialized
    fullTimeEmployee: boolean; // this attribute should always be defined
    yearsOfExperience?: number; // this attribute is optional
    location: string; // this attribute should always be defined
    [key: string]: any; // Allows for any other properties to be added to the object
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