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
    $(cursor2).css("z-index","0")
    gsap.to($(cursor2),{css:{x:"100%",y:"100%"}})
  });

  //Footer/Copyright current date
  date.innerHTML = (new Date().getFullYear());

  // Hover over links and images effects
  var whatToHover = [$('a'),$('img'),$('.hamburger_wrapper')]
  whatToHover.forEach(element => {
    element.mouseover(function mouseWentOverYourHead() { x:"-20%"
      cursor2.classList.add("hover-on-link")
    });
    element.mouseleave(function mouseWentOverYourHead() {
      cursor2.classList.remove("hover-on-link")
    });
  });

  // Image reveal animations
  gsap.utils.toArray('#excerpt img, .team img').forEach((el, index) => {
  let imgEnter = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      toggleActions: "play none none reverse",
      // markers: true
    }
  });
  imgEnter
    .set(el, {transformOrigin: 'center center'})
    .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
  });

  //Scroll
  // gsap.to($("#excerpt"), {
  //   scrollTrigger: {
  //     trigger: "#excerpt",
  //     start: "top 20%",
  //     toggleActions: "play pause reverse reset",
  //     markers: true
  //   },
  //   y: "-10%",
  //   duration: 2,
  //   ease: "power1.easeIn"
  // })


  // Logo animations
  gsap.utils.toArray("h5 span").forEach((el, index) => {
    document.querySelector(".spanFirst").addEventListener("mouseenter", function(){
      console.log('It works')
      gsap.to(el, {x:"50%", duration: 3})
    });
  });


  //=== SideBar Toggle Animations ==
  // ====== Variables Being Used Here =====
  var sB = 0;
  var burger = document.querySelector(".hamburger_wrapper")
  document.querySelector(".button").addEventListener( "click", function i() {
    if (sB == true) {
      sideBarTimeline.reverse();
      sB = 0
    } else {
      sideBarTimeline.play()
      sB = 1
    };
  });

  let burger_shadow = burger.cloneNode(true);
  //== get && set Clone's New unique clone name ==
  var theClassName = burger_shadow.getAttribute('class');
  burger_shadow.setAttribute('class', theClassName + " clone");

  let incision = $(document.querySelector(".button").appendChild(burger_shadow)).css("margin-top","-1.7924vw");
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
    .to( ".clone .bottom_bun", {rotate: "-0%", y:"-400%"}, "<")
    .to( ".clone .top_bun", {rotate: "-90", x:"-25%", y:"-410%",transformOrigin: "-9% 0%"},"<")
    .to( ".top_bun", {y:"800%"},"<.3")
    .to( ".clone .top_bun", {y:"-410%", duration: 1.5},"<")
    .to( ".clone .bottom_bun", {y:"-800%"},"<")
    .to( ".patty",{rotate:"45%", transformOrigin: "right"},"<.5")
    .to( ".clone .patty", {rotate:"-45%", transformOrigin: "left"},"<")

    // === SideBar coming through ===
    .fromTo("#sideBar", {
      x: "100%",
    }, {
      x: "0%",
      className: "-=container-fluid",
      ease: "power1.easeIn",
      duration: .5,
      stagger: 0.3,
    },"<-1.3")
    .from( "#sideBar hr", {x: "50%", autoAlpha: 0, duration: .5},"<.5")
    .from( "#sideBar ul li a ", { y: "20%", autoAlpha: 0, duration: .5, ease: "circ.easeInOut", stagger: 0.2},"<-.5")
    .from( "#sideBar ins",{ y: "-50%", autoAlpha: 0},"<.8")
    .from( ".sideBar_foo", { yPercent: "20%", autoAlpha: 0, ease: "power4", duration: 1.5},"<.5")
    .from(".void" ,{  autoAlpha: 0, duration: .5},"<.2")
    .from(".voidControl" ,{  autoAlpha: 0, duration: .5}, "<")

  // === Void Control Animation for the sideBar ===
  $( "#sideBar" ).mouseleave( function (w) {
    gsap.to( '.void, .voidControl', {scale: 1, duration: 0.3, x: 0, y: 0});
  });
  $( "#sideBar" ).mouseenter( function (w){
    gsap.to( '.void', {scale: 1.3, duration: 0.3})
  });
  $( "#sideBar" ).mousemove( function (w) {
    callParallax(w);
  });
  // Call to action
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
  slideTheseTitles = [$(".item h1"),$(".item2 h1"),$(".item3 h1")];
  slideTheseTitles.forEach(item => {
    gsap.from( item, {
      scrollTrigger: {
        trigger: item,
        toggleActions: "play pause restart reset"
      },
      x: "20%",
      autoAlpha: 0,
      ease: "circ.easeIn",
      duration: 1
    })
  });
  // == Excerpt Section Paragraph
  slideTheseParagraphs = [$(".item p"), $(".item2 p"), $(".item3 p")];
  slideTheseParagraphs.forEach(paragraph => {
    gsap.from(paragraph, {
      scrollTrigger: {
        trigger: paragraph,
        toggleActions: "play pause restart reset",
      },
      x: "20%",
      autoAlpha: 0,
      ease: "circ.easeIn",
      duration: 1.5,
    });
  });

  // ==== Team animations -- Reveal on Scroll ====
  teamMainHeadAnimate = [$(".mate h1"), $(".mate2 h1"), $(".mate3 h1")];
  teamMainHeadAnimate.forEach(head => {
    gsap.from(head, {
      scrollTrigger: {
        trigger: head,
        toggleActions: "play pause restart reset"
      },
      x: "20%",
      autoAlpha: 0,
      ease: "circ.easeIn",
      duration: 1.,
    })
  });
  teamSubHeadAnimate = [$(".mate h2"), $(".mate2 h2"), $(".mate3 h2")];
  teamSubHeadAnimate.forEach(subHead => {
    gsap.from(subHead, {
      scrollTrigger: {
        trigger: subHead,
        toggleActions: "play pause restart reset"
      },
      x: "20%",
      autoAlpha: 0,
      ease: "circ.easeIn",
      duration: 2
    });
  });
  teamParAnimate = [$(".mate p"), $(".mate2 p"), $(".mate3 p")];
  teamParAnimate.forEach(par => {
    gsap.from(par, {
      scrollTrigger: {
        trigger: par,
        toggleActions: "play pause restart reset"
      },
      x:"40%",
      autoAlpha: 0,
      ease: "circ.easeIn",
      duration: 2
    });
  });

  //About Section
  let aboutTl = gsap.timeline({  scrollTrigger: {
      trigger: "#aboutUs",
      start: "top top",
      toggleActions: "play pause resume pause",
      scrub: true,
      pin: true,
    },})
  aboutTl
    .from($(".text"), {
      y:"100%",
      duration: 10,
    })
    .to($(".tracker"), {
      y: "1000%",
      duration: 8,
    },"<")
    .to($("h4"), {
      autoAlpha: 0,
      duration: 8,
    },"<");

  // footer text animation??
  gsap.from($("footer h1"), {
    scrollTrigger: {
      trigger: "footer h1",
      toggleActions: "play none restart reset"
    },
    autoAlpha:0 ,
    ease: "circ.easeIn",
    duration: 2
  });
  gsap.from($("address"), {
    scrollTrigger: {
      trigger: "address",
      toggleActions: "play reset restart reset"
    },
    y:"40%",
    autoAlpha:0 ,
    ease: "circ.easeIn",
    duration: 1
  });
  gsap.from($("footer ul"), {
    scrollTrigger: {
      trigger: "footer ul",
      toggleActions: "play reset restart reset"
    },
    autoAlpha:0,
    duration: 1,
    y:"40%",
    scale: 0.3,
  });
  gsap.from($("#ins"), {
    scrollTrigger: {
      trigger: "#ins",
      toggleActions: "play restart restart reset"
    },
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1,
    y: "200%",
  });
});

// ==== END OF SESSION, CLASS DISMISSED BY timothyTheyKnow. =======
