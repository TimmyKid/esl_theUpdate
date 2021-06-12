// App.js -- Web~AnimationS --
$(window).on( "load", function(){

  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  //smooth-scroll
  var scroll = new SmoothScroll('a[href*="#"]');

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

  //Footer/Copyright current date >>
  date.innerHTML = (new Date().getFullYear());

  // Hover over links and images effects
  var whatToHover = [$('a'),$('img'),$('.hamburger_wrapper')]
  whatToHover.forEach(element => {
    element.mouseover(function mouseWentOverYourHead() {
      cursor2.classList.add("hover-on-link")
    });
    element.mouseleave(function mouseWentOverYourHead() {
      cursor2.classList.remove("hover-on-link")
    });
  });

  //=== SideBar Toggle Animations ==
  // ====== Variables Being Used Here =====
  var sB = 0;
  var burger = document.querySelector(".hamburger_wrapper")

  function closeSideBar() {
    var reversed = sideBarTimeline.reversed();
    var progress = sideBarTimeline.progress();

    sideBarTimeline.reverse()
      .duration(reversed ? 30 : 2.3)
      .progress(progress)
      document.querySelector(".button").classList.add("winClosed")
    sB = 0
    $("body").css("overflow","visible")
  }

  document.querySelector(".button").addEventListener( "click", function i() {
    if (sB == true) {
      closeSideBar();
    } else {
      sideBarTimeline.play()
      sB = 1
      document.querySelector(".button").classList.remove("winClosed")
      document.querySelector(".clone").classList.remove("winClosed")
      $("body").css("overflow","hidden")
    }
  });

  // Clicking on sidebar events
  gsap.utils.toArray("#sideBar .list-item a").forEach((link) => {
    link.addEventListener("click", function () {
      var goToLink = gsap.timeline({delay: 2, duration: 3, onStart: closeSideBar(),  })
        // .to(goToLink, {duration: 1});
    })
  })

  let burger_shadow = burger.cloneNode(true);
  //== get && set Clone's New unique clone name ==
  var theClassName = burger_shadow.getAttribute('class');
  burger_shadow.setAttribute('class', theClassName + " clone");

  let incision = $(document.querySelector(".button").appendChild(burger_shadow)).css("margin-top","-1.7924vw");
  var sideBarTimeline = gsap.timeline({ paused: true,})
    .from( "#overlay", { x: '200%',visibility: 'visible',  duration: .4})
    .to( $(burger_shadow),{keyframes: [{x: "75%", autoAlpha: 1, duration: .3},{rotationX: 180, duration: .3}]},"<")
    // === Bun and Patties partying ===
    .to( ".clone .top_bun", { x:"-15%",duration: .1})
    .to( ".clone .patty", {x:"-30%",duration: .3},"<")
    .to( ".clone .bottom_bun", {x:"-40%",duration: .3},"<")

    // === This is cool ===
    .to( ".clone .patty, .clone .bottom_bun", {y:"-400%",})
    .to( ".top_bun, .patty", {y:"400%"},"<")
    .to( ".clone .top_bun", { y: "0%"},"<")
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
    },"<-1.7")
    .from( "#sideBar hr", {x: "50%", autoAlpha: 0, duration: .5},"<.4")
    .from( "#sideBar ul li a ", { y: "20%", autoAlpha: 0, duration: .5, ease: "circ.easeInOut", stagger: 0.2},"<-.8")
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
  }
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

  // >>>> Everything Sounds Good >>>>
  //SoundHowls on Hover and click

  const hoverMenuSound = new Howl({
    src: ['./static/audio/HoverCall.mp3'],
    volume: 0.5,
    sprite : {
      tap: [300,500]
    }
  });
  const mainSound = new Howl({
    src: ['./static/audio/They Never Say Goodnight.mp3'],
    loop: true,
    volume: 0.4,
    autoplay: true,
  });

  var binary = 1

  $('#sideBar a').mouseenter( function() {
    if (!binary)
      hoverMenuSound.play('tap');
  });
  document.getElementById("audioController").addEventListener("click", () => {
    // var audio = document.getElementById("sound");
    var timeplay = gsap.timeline();
    gsap.to($(".soundSituation"),{autoAlpha: 1, ease: "circ"});

    if (binary) {
      mainSound.play()
        timeplay
          .to($("#pause"), { autoAlpha: 0, ease: "none",duration: .01 }, "<")
          .to($("#play"), { autoAlpha: 1, ease: "none",duration: .01 }, "<")
          .to($(".soundSituation"), { autoAlpha: 0, duration: 2, ease: "circ"})
          $(".soundSituation").html("Sound: On");
        // console.log("on")
        binary = 0
    } else {
      mainSound.pause()
      timeplay
      // .to($("#sound"), { volume: 0, playbackRate: 0.5, onComplete: audio.pause, callbackScope: audio })
        // .to($(".soundSituation"),{autoAlpha: 1})
        .to($("#play"), { autoAlpha: 0, ease: "none", duration: .01 }, "<")
        .to($("#pause"), { autoAlpha: 1, ease: "none",duration: .01 }, "<")
        .to($(".soundSituation"), { autoAlpha: 0, duration: 2, ease: "circ"})
        $(".soundSituation").html("Sound: Off");
      // console.log("off")
      binary = 1
    };
  });

  // >>>> Color Swatch >>>>
  let toBlack = document.querySelector(".audioCircle").scrollY
  function colorSwatch() {
    if (this.scrollY > this.innerHeight * 5.1) {
      gsap.to($(".vl"),{ duration: .5, borderColor: "#1d1d1d",  ease: "circ.easeInOut"})
      gsap.to($(".audioCircle"),{ duration: .5, borderColor: "#1d1d1d",  ease: "circ.easeOut"})
      gsap.to($(".soundSituation"),{ duration: .5, color: "#1d1d1d",  ease: "circ.easeOut"})

    } else {
      gsap.to($(".vl"),{ duration: .5, borderColor: "#dedede",  ease: "circ.easeInOut"})
      gsap.to($(".audioCircle"),{ duration: .5, borderColor: "#dedede",  ease: "circ.easeIn"})
      gsap.to($(".soundSituation"),{ duration: .5, color: "#dedede",  ease: "circ.easeIn"})
    };
    if (this.scrollY > this.innerHeight * 8.55) {
      gsap.to($("footer"),{ duration: 1, backgroundColor: "#1c2331",  ease: "circ.easeInOut"})
      gsap.to($("body"),{ duration: .5, backgroundColor: "#10161F",  ease: "circ.easeInOut"})
      gsap.to($(".text"),{ duration: .5, color: "#dedede",  ease: "circ.easeInOut"})
      gsap.to($(".vl"),{ duration: .5, borderColor: "#dedede",  ease: "circ.easeInOut"})
      gsap.to($(".scrollTrack"),{ duration: .5, borderColor: "#dedede",  ease: "circ.easeInOut"})
    } else {
      gsap.to($(".text"),{ duration: .5, color: "#1d1d1d",  ease: "circ.easeInOut"})
      gsap.to($("body"),{ duration: .5, backgroundColor: "#dedede",  ease: "circ.easeInOut"})
    };
  }
  window.addEventListener("scroll", colorSwatch)
  // ======= END OF JQUERY =========


  // GSAP -- ANIMATIONS ----
  // Gsap Global Variables >>>>>
  const word = ["Elevete Solutions."]
  //Introductory text animations....
  /*
  const timeline = gsap.timeline({defaults: { duration: 3, ease: "circ", whileRunning: justStarted()}, paused:false})
  timeline
    .from(".vl",{height: "0%", duration: 5})
    // == Welcome Text
    .from("#preFace > h1", { autoAlpha:0, x: "-15%"})
    .from("#preFace .text-center h1", { opacity: 0, x: "25%"}, "<")
    // == Blinking cursor and Logo typeOut ==
    .to(".blinkr", {autoAlpha: 1, ease: "power2.inOut", repeat: -2, duration: .5})
    .fromTo(".introText", {text: ""}, {text: {value: word}, ease: "back.easeInOut"})
    // == Utility reveal ==
    .from(".scrollDownWrapper", { autoAlpha: 0, duration: 1, ease: "none"}, ">.5")
    .from(".navbar", { autoAlpha: 0, duration: 1, ease: "none"}, "<")
    // close animation and end timeline
    .to(".blinkr", {autoAlpha: 0, duration: .6, ease: "circ.easeOut", onComplete: () => {
      timeline.kill()
      dDone()
    } }, "<1")

  function justStarted() {
    gsap.to($("body"), {css: {overflowY: "hidden"}})
  };
  function dDone() {
    gsap.to($("body"), {css: {overflowY: "scroll"}})
    gsap.timeline({repeat: -1})
      .to($(".scrollDownIcon"),{keyframes: [{repeat: 3, y:"-40%", yoyo: true, delay: 4}]})
      .to($("#scrollDown_animators img"),{keyframes: [{repeat: 1, y:"-140%", yoyo: true, duration: .8}]})
  }; */

  //// Image reveal animations
  gsap.utils.toArray('#excerpt img, .team img').forEach((el, index) => {
  let imgEnter = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 105%",
      toggleActions: "play none none reverse",
      // markers: tru3
    }, ease: "circ.easeIn", duration: .1
  });
  imgEnter
    .set(el, {transformOrigin: 'center center'})
    .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: true})
  });

  // ==== Excerpt Reveal on Scroll ====
  gsap.utils.toArray("#excerpt img").forEach((item) => {
   let parallax = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 105%",
      end: "bottom -5%",
      scrub: 2,
      toggleActions: "play play reverse reset"
    }, ease: "power1.easeInOut"})
    .to(item, {y:-75, duration:2, ease:'circ.easeInOut'})
  });
  // == Excerpt Section Titles ===
  gsap.utils.toArray(".item h1, .item2 h1, .item3 h1").forEach((title,index) => {
    gsap.from( title, {
      scrollTrigger: {
        trigger: title,
        toggleActions: "play pause restart reset"
      }, x: "20%", autoAlpha: 0, ease: "circ.easeIn", duration: 1 });
  });
  // == Excerpt Section Paragraph ===
  gsap.utils.toArray(".item p, .item2 p, .item3 p").forEach((paragraph) => {
    gsap.from(paragraph, {
      scrollTrigger: {
        trigger: paragraph,
        toggleActions: "play pause restart reset",
      }, x: "20%", autoAlpha: 0, ease: "circ.easeIn", duration: 1.5});
  });

  // ==== Team animations -- Reveal on Scroll ====
  gsap.utils.toArray(".team h1").forEach((head) => {
    gsap.from(head, {
      scrollTrigger: {
        trigger: head,
        toggleActions: "play pause restart reset"
      }, x: "20%", autoAlpha: 0, ease: "circ.easeIn", duration: 1})
  });
  gsap.utils.toArray(".team h2").forEach((subHead,index) => {
    gsap.from(subHead, {
      scrollTrigger: {
        trigger: subHead,
        toggleActions: "play pause restart reset"
      }, x: "20%", autoAlpha: 0, ease: "circ.easeIn", duration: 2});
  });
  gsap.utils.toArray(".team p").forEach((par) => {
    gsap.from(par, {
      scrollTrigger: {
        trigger: par,
        toggleActions: "play pause restart reset"
      }, x:"40%", autoAlpha: 0, ease: "circ.easeIn", duration: 2 });
  });

  let teamTl = gsap.timeline({scrollTrigger: {
    trigger: "#team_inner_wrapper",
    start: "top top",
    scrub: false,
    pin: ".team_outer_wrapper",
    toggleActions: "play reset reverse reset",
    end: "center top",
  }, ease: "circ.easeInOut",});

  /*
  function endfunction() {
    let endPoint = document.getElementById("team_inner_wrapper");
    console.log(endPoint.clientHeight);
    console.log(endPoint.offsetHeight);
    console.log(endPoint.offsetWidth);
  };*/

  //About Section
  let aboutTl = gsap.timeline({  scrollTrigger: {
      trigger: "#aboutUs",
      start: "top top",
      toggleActions: "play pause resume pause",
      scrub: true,
      pin: true,
    },})
    .from($(".text"), { y:"100%", duration: 8,})
    .to($(".tracker"), { y: "700%", duration: 8,},"<")
    .to($("h4"), { autoAlpha: 0, duration: 15,},"<");

  // footer text animation??
  gsap.from($("footer h1"), {
    scrollTrigger: {
      trigger: "footer h1",
      toggleActions: "play none restart reset"
    }, autoAlpha:0, ease: "circ.easeIn", duration: 2});
  gsap.from($("address"), {
    scrollTrigger: {
      trigger: "address",
      toggleActions: "play reset restart reset"
    }, y: "40%", autoAlpha:0, ease: "circ.easeIn", duration: 1});
  gsap.from($("footer ul"), {
    scrollTrigger: {
      trigger: "footer ul",
      toggleActions: "play reset restart reset"
    }, autoAlpha:0, duration: 1, y:"40%", scale: 0.3,});
  gsap.from($("#ins"), {
    scrollTrigger: {
      trigger: "#ins",
      toggleActions: "play restart restart reset"
    }, autoAlpha: 0, ease: "circ.easeIn", duration: 1, y: "200%",});
    //End of All Footer Animations ===
});
// ==== END OF SESSION, CLASS DISMISSED BY timothyTheyKnow. =======
