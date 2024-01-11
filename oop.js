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
