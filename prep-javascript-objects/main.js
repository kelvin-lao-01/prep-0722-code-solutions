var person = {
  firstName: 'Kelvin',
  lastName: 'Lao',
  hobby: 'basketball',
  job: 'ecommerce',
  previousJob: 'trainer'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The persons name is: ' + fullName);

var job = person.job;
console.log('The persons current job is: ' + job);

var previousJob = person.previousJob;
console.log('The persons previous job is: ' + previousJob);

console.log(person);
