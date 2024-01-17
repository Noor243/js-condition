// how to creat a literal objects

const cirlce={
  radius : 1,
  location: {
    x:1,
    y:1
  },
  draw: function(){
    console.log('draw');
  }
};
cirlce.draw();

// factories

function createcircle(radius){
  return {
    radius,
    draw : function(){
      console.log('draw');
    }
  };
}
const circle = createcircle(1);
cirlce.draw();

// constructor function
function choclate(radius){
  this.radius= radius;
  this.draw = function(){
    console.log('draw');
  }
}

const another = new choclate(1);

// constructor property



// enumerating properties

function ball(radius){
  this.radius;
  this.draw= function(){
    console.log('draw');
  }
}

const ball  = new ball (10);
for (let 
  key in a ){
    if(typeof ball[key] !=='function')
    console.log(keys);  
}

const keys = obect.keys(ball);
console.log(keys);

if('radius' in ball)

console.log('ball has a radius.');


// abstraction


function Circle(radius) { 
  // Public member 
  this.radius = radius; 

  // Private member                       
  let defaultLocation = {};                      
}                       

// getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
   get: function() { return defaultLocation; },
   set: function(value) { defaultLocation = value; }
});











// exercise design a stopwatch
// question
// const sw = new stopwatch()
// sw.duration
// sw.start()
// 0
// sw.start()
// undefined
// sw.stop()
// undefined
// sw.stop()
// undefined
// stopwatch {start : false, stop : false, reset : f }
// sw.duration
// 19.446
// sw.start
// undefined
// sw.stop()
// undefined
// sw.duration()
// 23.734
// sw.reset()
// undefined
// sw.start()
// undefined
// sw.duration
// 2.192

// solution


function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running) 
      throw new Error('Stopwatch has already started.');
    
    running = true; 

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) 
      throw new Error('Stopwatch is not started.');

    running = false; 
      
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; 
  };

  this.reset = function() { 
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0; 
  };

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

// creating your own prototypical inheritance

function circle(radius){
  this.radius = radius;
}

circle.prototype.draw = function(){
  console.log('draw');
}

circle.prototype.duplicate = function (){
  console.log('duplicate');
}

function square(){
}

square.prototype.duplicate = function(){

}



function shape(){
  
}

shape.prototype.duplicate = function(){
  console.log('duplicate');
}

function circle(radius){
  this.radius = radius;
}

circle.prototype = object.create(object.prototype);
circle.prototype=Object.create(shape.prototype);

circle.prototype.draw = function(){
  console.log('draw');
}

const s = new shape();
const c = new circle(1);


// calling the super constructor

class SuperClass {
  // Superclass constructor
   SuperClass() {
      System.out.println("Superclass constructor called.");
  }
}

class SubClass extends SuperClass {
  // Subclass constructor
   SubClass() {
      // Calling the superclass constructor using super()
      super();
      System.out.println("Subclass constructor called.");
  }
}

class Main {
  static main(String) {
      // Creating an instance of the subclass
      subObj = new SubClass();
  }
}



// Intermediate function (superclass)
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

// Subclass (inherits from Animal)
function Dog(name, breed) {
  // Call the superclass constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Set up the prototype chain for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add a method specific to Dog
Dog.prototype.bark = function () {
  console.log("Woof! Woof!");
};

// Create instances
const myAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

// Call methods on instances
myAnimal.eat(); // Generic Animal is eating
myDog.eat();    // Buddy is eating
myDog.bark();   // Woof! Woof!




// Define a base class
function Animal(name) {
  this.name = name;
}

// Add a method to the base class
Animal.prototype.sayHello = function() {
  return "Hello, I am " + this.name;
};

// Define a subclass that inherits from the base class
function Dog(name, breed) {
  // Call the superclass constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Set up the subclass prototype to inherit from the superclass prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override the sayHello method in the subclass
Dog.prototype.sayHello = function() {
  return "Woof, I am " + this.name + " the " + this.breed;
};

// Create instances of the classes
var animal = new Animal("Generic Animal");
var dog = new Dog("Buddy", "Golden Retriever");

// Test method calls
console.log(animal.sayHello()); // Output: Hello, I am Generic Animal
console.log(dog.sayHello());    // Output: Woof, I am Buddy the Gold




// exercise protocol inheritance





// exercise polymorphism

function HtmlElement() { 
  this.click = function() { 
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function(){
  console.log('focued');
}

function HtmlSelectElement(items = []) { 
  this.items = items;
  
  this.addItem = function(item) { 
    this.items.push(item);
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  this.render = function() {
    return `
<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
  }  
}
HtmlSelectElement.prototype = new HtmlElement(); 
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) { 
  this.src = src; 
  
  this.render = function() {
    return `<img src="${this.src}" />`
  }
}
HtmlImageElement.prototype = new HtmlElement(); 
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://')
];

for (let element of elements) 
  console.log(element.render());