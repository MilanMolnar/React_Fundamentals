"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
let age = 30;
if (age < 40) {
    age += 1;
}
console.log(age);
let sales = 102012012;
let course = "typescript";
let isPublished = true;
let numbers = [1, 2, 3];
let toupleVar = [1, "one"];
const mySize = 3;
console.log(mySize);
let employee = {
    id: 1,
    name: "Milan",
    retire: (date) => {
        console.log(date);
    },
};
let typedEmployee = {
    id: 2,
    name: "Typed Milan",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight == "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
    return 1;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let quantityFifty = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase + "HELLOO!");
    else
        console.log("Hola!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let elements = [0, 1, 2, 3, 4, 5];
let optionallyAwailableElement = elements === null || elements === void 0 ? void 0 : elements[6];
const mightHaveBeenAnExpression = null;
mightHaveBeenAnExpression === null || mightHaveBeenAnExpression === void 0 ? void 0 : mightHaveBeenAnExpression("asd");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
class Account {
    constructor(id, owner, _balance, _nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this._nickname = _nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        console.log("Adding " + amount + "$ to " + this.owner + "'s account");
        this._balance = this._balance + amount;
    }
    get balance() {
        return this._balance;
    }
    get nickname() {
        if (this._nickname == null) {
            throw new Error("name cannot be empty");
        }
        return this._nickname;
    }
    set nickname(name) {
        if (name == "") {
            throw new Error("name cannot be ''");
        }
        this._nickname = name;
    }
    calculateTax() { }
}
let account = new Account(1, "Milan", 100);
console.log(account.balance);
account.deposit(10);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);
class SeatAssignment {
}
let assignedSeats = new SeatAssignment();
const seats = ["A1", "A2", "A3", "B1", "B2", "B3"];
const people = ["Milan", "John", "Ben", "Dan", "Tim", "Tom"];
for (const seat of seats) {
    assignedSeats[seat] = people[seats.indexOf(seat)];
}
console.log(assignedSeats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let rideOne = new Ride();
rideOne.start();
let rideTwo = new Ride();
rideTwo.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking...");
    }
}
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log("Taking test...");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Prof. " + super.fullName;
    }
}
let teacherOne = new Teacher("John", "Doe");
let studentOne = new Student(0, "Molnar", "Milan");
console.log(studentOne);
studentOne.takeTest();
studentOne.walk();
function printNames(people) {
    for (const person of people) {
        console.log(person.fullName);
    }
}
printNames([new Student(1, "Milan", "Molnar"), new Teacher("John", "Smith")]);
class Shape {
    constructor(colour) {
        this.colour = colour;
    }
}
class Circle extends Shape {
    constructor(radius, colour) {
        super(colour);
        this.radius = radius;
    }
    render() {
        console.log("rednering a circle witha radius of " + this.radius);
    }
}
let circleOne = new Circle(3, "red");
circleOne.render();
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let keyValuePair = new KeyValuePair(1, "a");
function wrapInArray(value) {
    return [value];
}
let wrappedStrArray = wrapInArray("s");
let wrappedIntArray = wrapInArray(2);
function fetch(url) {
    return { data: null, error: null };
}
let result = fetch("url");
(_b = result.data) === null || _b === void 0 ? void 0 : _b.name;
function echo(value) {
    return value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
class CompressibleStore extends Store {
    compress() { }
}
let productStore = new CompressibleStore();
productStore.compress();
class ProductStore extends Store {
}
let mappable = {
    name: "a",
    price: 1,
};
mappable.name;
function Pipe(constructor) {
    console.log("pipe decorator called");
    constructor.prototype.pipe = true;
}
function ComponentFactory(options) {
    return (constructor) => {
        console.log("component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueID = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("inserting component into the dom");
        };
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    ComponentFactory({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Timeit(target, methodName, descriptor) {
    let original = descriptor.value;
    descriptor.value = function (...args) {
        let startTime = new Date().getTime();
        console.log("start" + startTime);
        original.call(this, "this is a message from decorator and is being timed.");
        let endTime = new Date().getTime();
        console.log("function finished with time: " + (endTime - startTime));
    };
}
class MethodPerson {
    say(message) {
        console.log("Person says " + message);
    }
}
__decorate([
    Timeit
], MethodPerson.prototype, "say", null);
let methodPerson = new MethodPerson();
methodPerson.say("This message is ignored");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        if (typeof result == "string") {
            return result.toUpperCase();
        }
        return result;
    };
}
class AccessorPerson {
    constructor(fisrtName, lastName) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.fisrtName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], AccessorPerson.prototype, "fullName", null);
let accessorPerson = new AccessorPerson("milan", "molnar");
console.log(accessorPerson.fullName);
function MinLength(length) {
    return function (target, propertyName) {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be ${length} char long`);
                }
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class PropertyUser {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], PropertyUser.prototype, "password", void 0);
let newUser = new PropertyUser("asds");
console.log(newUser.password);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({ methodName, parameterIndex });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
const tax_1 = require("./tax");
let tax = (0, tax_1.calculateTax)(10000);
console.log(tax);
//# sourceMappingURL=index.js.map