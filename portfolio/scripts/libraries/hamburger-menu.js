class hamburgerMenu{
    constructor(){
        this.obj= {}
        this.obj.btn= document.querySelector(".hamburger-menu__button");
        this.obj.container= document.querySelector("#global-container");
        this.event= this.eventType();
        this.toggles();
    }
    eventType(){
        return window.ontouchstart ? 'click': 'touchstart';
    }
    addClass(){
        this.obj.container.classList.toggle('menu-open');
    }
    toggles(){
        this.obj.btn.addEventListener(this.event,this.addClass.bind(this))
    }
}
new hamburgerMenu();

