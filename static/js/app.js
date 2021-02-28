// App.js includes flows, mouse action on hovers and general gsap animations==================
//MOUSE ACTION
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {
  cursor.setAttribute( "style", "left: "+(e.clientX - 2.5)+"px; top:"+(e.clientY - 2.5)+"px;");
  cursor2.setAttribute( "style", "left: "+(e.clientX - 15)+"px; top:"+(e.clientY - 15)+"px;");
});
