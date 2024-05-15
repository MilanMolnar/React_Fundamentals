let age: number = 30;

if (age < 40) {
  age += 1;
}
console.log(age);

let sales: number = 102_012_012;
let course: string = "typescript";
let isPublished: boolean = true;
let numbers: number[] = [1, 2, 3];

let toupleVar: [number, string] = [1, "one"];

//const small: number = 1;
//const medium: number = 2;
//const large: number = 3;

const enum Size {
  Small = 1,
  Medium, //automatically 2
  Large, // 3
}

const mySize = Size.Large;

console.log(mySize);

//instead of typing each key/value for each obj, we should use a type
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Milan",
  retire: (date: Date) => {
    console.log(date);
  },
};

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let typedEmployee: Employee = {
  id: 2,
  name: "Typed Milan",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union type, can be more than one type

function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight == "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
  return 1;
}

//Intersection type, has to have multiple type
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal (specific) tpye

type Quantity = 50 | 100;
let quantity: Quantity = 100;
let quantityFifty: Quantity = 50;

//nullable
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase + "HELLOO!");
  else console.log("Hola!");
}

greet(null);

//Optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional elemtent operator
let elements: number[] = [0, 1, 2, 3, 4, 5];

let optionallyAwailableElement: number = elements?.[6];

//Optional call operator
const mightHaveBeenAnExpression: any = null;
mightHaveBeenAnExpression?.("asd");

let speed: number | null = null;
let ride = {
  //speed: speed !== null ? speed : 30
  speed: speed ?? 30, //nullish coalescing operator
};

//OOP

//Creating classes

class Account {
  // readonly id: number; //only assignable in constructor
  // owner: string;
  // private _balance: number;

  // constructor(id: number, owner: string, balance: number) {
  //   this.id = id;
  //   this.owner = owner;
  //   this._balance = balance;
  // }

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    private _nickname?: string
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    console.log("Adding " + amount + "$ to " + this.owner + "'s account");
    this._balance = this._balance + amount;
  }
  get balance(): number {
    return this._balance;
  }

  get nickname(): string {
    if (this._nickname == null) {
      throw new Error("name cannot be empty");
    }
    return this._nickname;
  }
  set nickname(name: string) {
    if (name == "") {
      throw new Error("name cannot be ''");
    }
    this._nickname = name;
  }

  private calculateTax() {}
}

// instantiate a class as obj

let account = new Account(1, "Milan", 100);
console.log(account.balance);
account.deposit(10);
console.log(account.balance);

//to type guard with if statement alawys use instantceof instead of typeof

console.log(typeof account); // object
console.log(account instanceof Account); // true

//index signitures

class SeatAssignment {
  // index signiture property
  [seatNumber: string]: string;
}

let assignedSeats = new SeatAssignment();
const seats = ["A1", "A2", "A3", "B1", "B2", "B3"];
const people = ["Milan", "John", "Ben", "Dan", "Tim", "Tom"];
for (const seat of seats) {
  assignedSeats[seat] = people[seats.indexOf(seat)];
}
console.log(assignedSeats);

//Static member

class Ride {
  private static _activeRides: number = 0;
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

let rideOne = new Ride();
rideOne.start();

let rideTwo = new Ride();
rideTwo.start();

console.log(Ride.activeRides);

//inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("walking...");
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking test...");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Prof. " + super.fullName;
  }
}

let teacherOne = new Teacher("John", "Doe");

let studentOne = new Student(0, "Molnar", "Milan");

console.log(studentOne);

studentOne.takeTest();

studentOne.walk();

// Plymorphism

function printNames(people: Person[]) {
  for (const person of people) {
    console.log(person.fullName);
  }
}

printNames([new Student(1, "Milan", "Molnar"), new Teacher("John", "Smith")]);

//abstract class needs to be extended, cannot be instantiated
abstract class Shape {
  constructor(public colour: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, colour: string) {
    super(colour);
  }
  override render(): void {
    console.log("rednering a circle witha radius of " + this.radius);
  }
}

let circleOne = new Circle(3, "red");
circleOne.render();

//Interfaces
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

//Generic Classes
class KeyValuePair<TKey, TValue> {
  // T = Template from CPP
  constructor(public key: TKey, public value: TValue) {}
}
//we need to supply the types at implementation
let keyValuePair = new KeyValuePair<number, string>(1, "a");

//Generic Functions
function wrapInArray<T>(value: T): T[] {
  return [value];
}

let wrappedStrArray = wrapInArray("s");
let wrappedIntArray = wrapInArray(2);

//Generic Interfaces

//http://mywebsite.com/api/users
//http://mywebsite.com/api/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  name: string;
}
interface Product {
  title: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

let result = fetch<User>("url");

result.data?.name; //autocompletion

//Generic constrains
// We can constrain to obj, classes interfaces aswell as booleans or arrays
function echo<T extends string | number>(value: T): T {
  return value;
}

//Extending generic classes

interface IProduct {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  //keyof is one of the objets keys, so for IProduct its name | price
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<IProduct>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let productStore = new CompressibleStore<Product>();
productStore.compress();

//You can fix the generix Type

class ProductStore extends Store<Product> {}

//Type mapping
interface MappableType {
  name: string;
  price: number;
}
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]?: T[K] | null;
};

let mappable: ReadOnly<MappableType> = {
  name: "a",
  price: 1,
};

mappable.name; // cant give it new value
//decorator
function Pipe(constructor: Function) {
  console.log("pipe decorator called");
  constructor.prototype.pipe = true;
}

type ComponentOptions = {
  selector: string;
};

//decorator factory
function ComponentFactory(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueID = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("inserting component into the dom");
    };
  };
}

@ComponentFactory({ selector: "#my-profile" })
@Pipe
class ProfileComponent {} //decorator is called even if ther is no obj instatiated rom this class

//method decorators
function Timeit(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  let original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    let startTime = new Date().getTime();
    console.log("start" + startTime);
    original.call(this, "this is a message from decorator and is being timed.");
    let endTime = new Date().getTime();
    console.log("function finished with time: " + (endTime - startTime));
  };
}

class MethodPerson {
  @Timeit
  public say(message: string) {
    console.log("Person says " + message);
  }
}

let methodPerson = new MethodPerson();
methodPerson.say("This message is ignored");

//Accessor decorator getter / setter
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original!.call(this);
    if (typeof result == "string") {
      return result.toUpperCase();
    }
    return result;
  };
}

class AccessorPerson {
  constructor(public fisrtName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.fisrtName} ${this.lastName}`;
  }
}

let accessorPerson = new AccessorPerson("milan", "molnar");
console.log(accessorPerson.fullName);

//Property decorators
function MinLength(length: number) {
  return function (target: any, propertyName: string) {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
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
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let newUser = new PropertyUser("asds"); //throws error if less than 4 chars like "asd"

console.log(newUser.password);

//Parameter decorators
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);

//import javascript in ts

import { calculateTax } from "./tax"; //cannot see jsDocTypeCheckedTaxCalculator(income) function because its not declared in tax.d.ts header file

let tax = calculateTax(10_000);
console.log(tax);

//how to import js library into ts:
import * as _ from "lodash"; //this is a pure js library, no doc nothing, we need to use the definately typed library. npm i @types/{package}

_.clone; //works after installing @types/lodash
