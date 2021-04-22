// App.js -- Web~AnimationS --
$(window).on( "load", function(){
  // JQuery Variables >>>>>>
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");
  const date = document.getElementById("year");
  // const image = document.getElementByTagName("img");

  // Custom cursor animations ========
  document.addEventListener("mousemove", e => {
    cursor.setAttribute( "style", "left: "+(e.clientX - 2.5)+"px; top:"+(e.clientY - 2.5)+"px;");
    cursor2.setAttribute( "style", "left: "+(e.clientX - 17.5)+"px; top:"+(e.clientY - 17.5)+"px;");
  });
  // document.onload()
  $(window).mouseleave(function() {
      // cursor.setAttribute("style", "opacity: 0")
      // cursor2.style.opacity = "0"
    $(cursor).css("opacity","0")
    cursor2.setAttribute("style", "left: 94.89254%; top:88.281%")
  });

  //Footer/Copyright current date
  date.innerHTML = (new Date().getFullYear());

  //=== SideBar Toggle Animations ==
  // ====== Variables Being Used Here =====
  var sB = 0;
  document.querySelector(".button").addEventListener( "click", function i() {
    if (!sB) {
      sideBarTimeline.play()
      sB = 1
    } else {
      sideBarTimeline.reverse();
      sB = 0
    };
  });

  var burger = document.querySelector(".hamburger_wrapper")
  let burger_shadow = burger.cloneNode(true);
  //== set Clone New unique clone name ==
  var theClassName = burger_shadow.getAttribute('class');
  burger_shadow.setAttribute('class', theClassName + " clone");



  let incision = $(document.querySelector(".button").appendChild(burger_shadow)).css("margin-top","-1.5em");
  const sideBarTimeline = gsap.timeline({ paused: true,})
    // .from( "#overlay", { y: '-100%',visibility: 'show'  duration: .4})
    .to( $(burger_shadow),{keyframes: [{x: "75%", autoAlpha: 1, duration: .3},{rotationX: 180, duration: .3}]})
    // === Bun and Patties partying ===
    .to( ".clone .top_bun", { x:"-15%",duration: .1})
    .to( ".clone .patty", {x:"-30%",duration: .3},"<")
    .to( ".clone .bottom_bun", {x:"-40%",duration: .3},"<")

    // === This is cool ===
    .to( ".clone .patty, .clone .bottom_bun", {y:"-400%",})
    .to( ".top_bun, .patty", {y:"400%"},"<")
    .to( ".clone .top_bun", { y: "0%"},"<")
    // $(".clone").off()
    .to( ".clone .patty, .clone .bottom_bun", {y:"-400%"},"<")
    .to( ".bottom_bun", {rotate: "90%", y:"500%",transformOrigin: "90% 0%"},"<")
    .to( ".clone .top_bun", {rotate: "-90", x:"-25%", y:"-410%",transformOrigin: "-9% 0%"},"<")
    .to( ".clone .bottom_bun", {rotate: "0%", y:"-350%"}, "<")
    .to( ".top_bun", {y:"800%", duration: 1},"<")
    .to( ".clone .top_bun", {y:"-410%", duration: 1.5},"<")
    .to( ".clone .bottom_bun", {y:"-800%", duration: .8},"<")
    .to( ".patty",{rotate:"45%", transformOrigin: "right"},"<.5")
    .to( ".clone .patty", {rotate:"-45%", transformOrigin: "left"},"<")

    // multiplier = 0.6625
    // .to( "j")s
    // .to( ".clone .top_bun", {rotate: "90%", transformOrigin: "-150% -150%"})
    // .to( "justAnimating .bottom_bun, .clone .top_bun", { y:(75 - 39 + "%" )},"<")


    .fromTo("#sideBar", {
      x: "100%",
    }, {
      x: "0%",
      className: "-=container-fluid",
      ease: "power1.easeIn",
      duration: .8,
      stagger: 0.3,
    },"<-0.7")
    .from( "#sideBar hr", {x: "50%", autoAlpha: 0, duration: 1},"<.5")
    .from( "#sideBar ul li a ", { y: "20%", autoAlpha: 0, duration: .5, ease: "circ.easeInOut", stagger: 0.2})
    .from( "#sideBar ins",{ y: "-50%", autoAlpha: 0,})
    .from( ".sideBar_foo", { y: "20%", autoAlpha: 0, ease: "sine.easeIn" },"<.2")
    .from(".void" ,{  autoAlpha: 0, duration: .5})
    .from(".voidControl" ,{  autoAlpha: 0, duration: .5}, "<.1")

  // === Void Animations ===
  $( "#sideBar" ).mouseleave( function (w) {
    gsap.to( '.void, .voidControl', {scale: 1, duration: 0.3, x: 0, y: 0});
  });
  $( "#sideBar" ).mouseenter( function (w){
    gsap.to( '.void', {scale: 1.3, duration: 0.3})
  });
  $( "#sideBar" ).mousemove( function (w) {
    callParallax(w);
  });
  function callParallax(w) {
    parallaxIt(w,'.void',80);
    parallaxIt(w,'.voidControl',-40);
  };
  function parallaxIt(w, target, movement) {
    var $this = $('.voidControl, .void');
    var relX = w.clientX - $this.offset().left;
    var relY = w.clientY - $this.offset().top;
    gsap.to( target, {
      duration: 0.3,
      x: (relX - $this.width() + 485 /2)/$this.width()* movement,
      y: (relY - $this.height() + 300/3)/$this.height()*movement,
    })
  };



  // >>>> Cursive__behaviour >>>>


  // document.ready(function() {
  //   document.getElementById("#sound")[0].play();
  // });
  // ======= END OF JQUERY =========



  // GSAP -- ANIMATIONS ----

  // gsap.registerPlugin(MotionPathPlugin);
  // gsap.to("#dot",{duration: 4, motionPath:"#path"});

  // Gsap Global Variables >>>>>
  const word = ["Elevete Solutions."]

  //Introductory text animations...
  const timeline = gsap.timeline({defaults: { duration: 3, ease: "circ"}, paused: true})
  timeline
    // .from(".vl",{height: "0%", duration: 5})
    // // == Welcome Text
    // .from("#preFace > h1", { autoAlpha:0, x: "-15%"})
    // .from("#preFace .text-center h1", { opacity: 0, x: "25%"}, "<")
    // // == Blinking cursor and Logo typeOut ==
    // .to(".blinkr", {autoAlpha: 1, ease: "power2.inOut", repeat: -2, duration: .5})
    // .fromTo(".introText", {text: ""}, {text: {value: word}, ease: "back.easeInOut"})
    // // == Utility reveal ==
    // .from(".scrollDownWrapper", { autoAlpha: 0, duration: 1, ease: "none"}, ">.5")
    // .from(".navbar", { autoAlpha: 0, duration: 1, ease: "none"}, "<")
    // // close animation and end timeline
    // .to(".blinkr", {autoAlpha: 0, duration: .6, ease: "circ.easeOut", onComplete: () => {
    //   timeline.kill()
    // } }, "<1")
  //

  // ==== Excerpt Reveal on Scroll ====
  gsap.from("#excerpt .item h1", {
    scrollTrigger: {
      trigger: "#excerpt .item h1",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1
  });
  gsap.from("#excerpt .item2 h1", {
    scrollTrigger: {
      trigger: "#excerpt .item2 h1",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1
  });
  gsap.from("#excerpt .item3 h1", {
    scrollTrigger: {
      trigger: "#excerpt .item3 h1",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1
  });
  // == Excerpt Section Paragraph
  gsap.from("#excerpt .item p", {
    scrollTrigger: {
      trigger: "#excerpt .item p",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1.5,
  });
  gsap.from("#excerpt .item2 p", {
    scrollTrigger: {
      trigger: "#excerpt .item2 p",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1.5,
  });
  gsap.from("#excerpt .item3 p", {
    scrollTrigger: {
      trigger: "#excerpt .item3 p",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1.5,
  });
  // ==== Team animations -- Reveal on Scroll ====


});
