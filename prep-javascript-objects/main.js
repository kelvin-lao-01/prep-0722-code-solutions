var person = { // and object literal is being assigned to the variable kelvin
  firstName: 'Kelvin', // the string "Kelvin" is being assigned to the firstName property
  lastName: 'Lao',
  hobby: 'basketball',
  job: 'ecommerce',
  previousJob: 'trainer'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
// firstName property of the person object
// is being concatenated with the string " " (space)
// which is being concatenated with the lastName object property of the person object
// and the result of the expression is being assigned to the variable fullName

console.log('The persons name is: ' + fullName);

// the dot means the word "of"
// for an example the firstName property "of" the kelvin object
// the thing on the right is the property
// thje thing on the left is the object

// string concatenation ( the + operator )

var job = person.job;
console.log('The persons current job is: ' + job);

var previousJob = person.previousJob;
console.log('The persons previous job is: ' + previousJob);
// log method of the console object is being called with two arguements
// with the string previousJob

console.log(person);
