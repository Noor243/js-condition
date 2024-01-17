 
  // selection of elements
 
 var a = document.querySelector("h1")
console.log(a)

// changing html

var a = document.querySelector("h4")
a.innerHTML = "Click me please"

// changing css

//  document.querySelector("h1")
// .style.color ="red"

// event listener

var a = document.querySelector('h4')
a.addEventListener('click',function(){
a.innerHTML = "Shabash"
a.style.color = "yellow"
a.style.backgroundColor="#000"
})

// on bulb

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var light = 0

btn.addEventListener("click",function(){
  if(light == 0){
  bulb.style.backgroundColor="yellow"
console.log("click")
light=1
}else{
  bulb.style.backgroundColor="transparent"
  console.log("again click")
  light=0
}
})


