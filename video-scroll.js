//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

function animationStart(videoDuration, frameRate) {
  const container = document.querySelector(".video-scroll-container");
  const video = container.querySelector(".video-scroll");
  
  //MORE ITEMS
  const text = container.querySelector("h1");
  const section = document.querySelector("section");
  const end = section.querySelector("h1");

  videoDuration = videoDuration != null ? videoDuration * 1000 : 10000; //setting animation duration 

  //SCENES
  let scene = new ScrollMagic.Scene({
    duration: videoDuration, //how many pixels - must be equal the duration of the video
    triggerElement: container, //triggered element
    triggerHook: 0, //trigger 1
  })
    .addIndicators() //append debug indicators
    .setPin(container) //set a pin to the element passed, the scroll remains at the same point until the end of duration property
    .addTo(controller); //append to the controller element

  //Text Animation
  const textAnimation = TweenMax.fromTo(
    text,
    3,
    { opacity: 1 },
    { opacity: 0 }
  );

  let scene2 = new ScrollMagic.Scene({
    duration: 4000, //how many pixels - must be equal the duration of the video
    triggerElement: container, //triggered element
    triggerHook: 0, //trigger 1
  })
    .setTween(textAnimation) //set a pin to the element passed, the scroll remains at the same point until the end of duration property
    .addTo(controller); //append to the controller element

  //VIDEO ANIMATION
  let accelamount = 0.1;
  let scrollpos = 0;
  let delay = 0;

  scene.on("update", (e) => {
    scrollpos = e.scrollPos / 1000; //divide to transform in seconds (as the duration property)
  });

  frameRate = frameRate != null ? frameRate : 25; //setting frame rate

  setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
  }, 1000 / frameRate); //value obtained from 1000 / video's frame rate
}
