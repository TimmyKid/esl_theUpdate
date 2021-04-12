//MOUSE ACTION
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {
  cursor.setAttribute( "style", "left: "+(e.clientX - 2.5)+"px; top:"+(e.clientY - 2.5)+"px;");
  cursor2.setAttribute( "style", "left: "+(e.clientX - 15)+"px; top:"+(e.clientY - 15)+"px;");
});
// document.ready(function() {
//   document.getElementById("#sound")[0].play();
// });
// document.write(new Date().getFullYear());
const timeline = gsap.timeline({defaults: {opacity: .5, duration: 3, ease: "circ"}})
timeline
  .from("#preFace > h1", { x: "-25%"})
  .from("#preFace .text-center h1", { x: "25%"}, "<")

let word = ["Elevete Solutions.", "."]
let blinkr = gsap.to(".blinkr", {opacity: 0, ease: "power2.inOut", repeat: -2, duration: 1})

const masterTln = gsap.timeline()
word.forEach(word => {
  let stl = gsap.timeline()
  stl.to(".introText", {duration: 2, text: word})
  masterTln.add(stl)
})
