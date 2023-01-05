let swiper = new Swiper(".swiper-container",{
    slidesPerView:2,
    spaceBetween:30,
    center:true,
    loop :true, 
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
        // If we need pagination
  pagination: {
    el: '.pagination',
    type:'fraction'
  },

    
})



let t1 = gsap.timeline(); 

t1
.to('.loader1',{
  duration:1,delay:0.5,scaleX:0,scaleY:0,ease:"expo.out"
}) 
.from('.bg img',{
    duration:1,delay:0.5,x:700,ease:"expo.out"
}) 
.from('.dish',{
    duration:1,delay:0.5,scaleX:0,transformOrigin:'center',ease:"expo.out"
}) 
.from('.content-container .content',{
    duration:1,delay:0.5,x:-100,opacity:0,ease:"expo.out"
}) 
.from('header',{
  duration:1,delay:0.5,y:-100,opacity:0,ease:"expo.out"
}) 
.from('.bottom-section',{
  duration:1,delay:0.5,y:100,opacity:0,ease:"expo.out"
}) 
.from('.social',{
  duration:1,delay:1,x:-100,opacity:0,ease:"expo.out"
}) 
 
 