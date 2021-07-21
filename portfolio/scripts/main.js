document.addEventListener("DOMContentLoaded",function(){
  const cb = function(el,isIntersecting){
      if(isIntersecting){
          const startGsapAnimation= new GsapAnimation(el);
          startGsapAnimation.animate();
    }
  }
  const so = new ScrollObserver('.gsap-animation', cb);

  const slideAnimation = function(el,isIntersecting){
    if(isIntersecting){
      el.classList.add('inview');
    }else{
      el.classList.remove('inview');
    }
  }
  const startSlide = new ScrollObserver('.cover-slide', slideAnimation);
  const startSlideletter = new ScrollObserver('.title-slide', slideAnimation);
  const fadeIn = new ScrollObserver('.appear', slideAnimation);
});

