class ScrollObserver{
    constructor(elements,callback2,options){
        this.elements= document.querySelectorAll(elements);
        const defaultOptions={
            root:null,
            rootMargin:"0px 0px 0px 0px",
            threshold:0,
            once:true
        }
        this.callback2=callback2;
        this.options= Object.assign(defaultOptions,options);
        this.once = this.options.once;
        this._init();

    }
    _init(){
        const callback= function(entries,observer){
            entries.forEach(e=>{
                if(e.isIntersecting){
                    this.callback2(e.target,true);
                    if(this.once){
                        observer.unobserve(e.target);
                    }
                }
                else{
                    this.callback2(e.target,false);
                }
            });
        };
        this.startObservation = new IntersectionObserver(callback.bind(this),this.options);
        this.startObservation.POLL_INTERVAL=100;
        this.elements.forEach(element => this.startObservation.observe(element));
    }
}

