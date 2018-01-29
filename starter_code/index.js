const Elevator = require('./elevator.js');
let elevator = new Elevator();
const Person = require('./person.js');
const persona = new Person("Mongolin",1,8);

elevator.call(persona);
elevator.start();

