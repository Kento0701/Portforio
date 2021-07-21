class DivideStrings{
    constructor(el){
       this.DOM = {};
       this.DOM.el= el instanceof HTMLElement ? el : document.querySelector(el);
       this.letters= this.DOM.el.innerHTML.trim().split("");
       this.DOM.el.innerHTML=this._splitStrings()
    }
    _splitStrings(){
        return this.letters.reduce((accmulation, current) => {
            current = current.replace(/\s+/, '&nbsp;');
            return `${accmulation}<span class="letter">${current}</span>`;
        }, "");
    }
    animate(){
        this.DOM.el.classList.toggle('inview');
    }
}

class GsapAnimation extends DivideStrings{
    constructor(el){
        super(el);
        this.DOM.characters= this.DOM.el.querySelectorAll('.letter');
    }
    animate(){
        this.DOM.el.classList.add('inview');
        this.DOM.characters.forEach((element,index) => {
            TweenMax.to(element,0.6,{
                ease:Back.easeOut,
                delay:index * 0.05,
                startAt:{y:'-50%',opacity:0},
                y:'0%',
                opacity:1
            })
        });
    }
}


