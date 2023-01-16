class Car {
    constructor(model){
        this.model = model;
    }

    getModel(){
        return this.model;
    }
}

class Tata extends Car {
    constructor(SpeakerSystem, model){
        super(model);
        this.system = SpeakerSystem;
    }
}

let c1 = new Tata("harman", "Altroz");
console.log(c1.getModel());