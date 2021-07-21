class PageTop{
    constructor(){
        this.pagetopbtn= document.querySelector("#pageTop");
        this.event= this.eventType();
        this.scrollStart()
    }
    eventType(){
       return window.ontouchstart? 'touchstart' : 'click';
    }
    ScrollTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    scrollStart(){
        this.pagetopbtn.addEventListener(this.event,this.ScrollTop.bind(this));
    }
}
new PageTop()