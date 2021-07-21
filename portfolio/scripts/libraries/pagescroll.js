class PageScroll{
    constructor(){
        this.ary= [];
        this.ary.navlinks= document.querySelectorAll('a[href^="#"]');
        this.container= document.querySelector("#global-container");
        this.mobileMenuItems = document.querySelectorAll(".mobile-menu__item");
        this.mobileMenuItemsArray= [...this.mobileMenuItems];
        this.header = document.querySelector('.header');
        this.headerHeight= this.header.offsetHeight;
        this.event= this.eventType();
    }
    eventType(){
        return window.ontouchstart ? 'touchstart': 'click'
    }
    pagemover(e){
        e.preventDefault();
        const linkValue = e.currentTarget.getAttribute('href');
        const targetEl = document.querySelector(linkValue);
        const targetOffsetTop = window.pageYOffset + targetEl.getBoundingClientRect().top;
        const totalScrollAmount = targetOffsetTop-this.headerHeight;
        window.scrollTo({
            top:totalScrollAmount,
            behavior:"smooth"
        })
    }
    removeClass(){
        this.container.classList.remove('menu-open');
    }
  
}
const pageScroll = new PageScroll();

pageScroll.ary.navlinks.forEach(el => {
    el.addEventListener(pageScroll.event,function(e){
        pageScroll.pagemover(e)
    })
});
pageScroll.mobileMenuItemsArray.forEach(function(el){
    el.addEventListener(pageScroll.event,function(){
        pageScroll.removeClass();
    })
})
