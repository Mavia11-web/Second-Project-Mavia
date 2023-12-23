const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var circle1 = document.querySelector(".circle")
 document.querySelectorAll(".item").forEach (function(elem){
      
    var rotate = 0;
    var diffrotate = 0;


           elem.addEventListener("mousemove",function(dets){
          var diff = dets.clientY - elem.getBoundingClientRect().top;
          diffrotate = dets.clientX - rotate;
          rotate = dets.clientX;
          


            gsap.to(elem.querySelector("img"),{
                opacity: 1,
                ease: Power3,
              top:diff,
              left: dets.clientX,
              rotate: gsap.utils.clamp(-20,20, diffrotate* 0.5),
            })
           })
           elem.addEventListener("mouseleave",function(dets){
       


            gsap.to(elem.querySelector("img"),{
                opacity: 0,
                duration:0.5,
                ease: Power3,
           
            })
           })
   })
function firstpage(){
    var tl = gsap.timeline();
    
    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    

    })
    .to(".boundingele", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: .2,
        // delay: -1,
        
    
    })
    .from(".herofooter",{
        y: -10,
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut,
        delay: -1.5
    })
}

function follower(){
    window.addEventListener("mousemove", function(dets){
        circle1.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
    
}
follower();
firstpage();