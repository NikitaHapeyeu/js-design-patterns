const MacBook = function() {
    this.cost = function() { return 997;};
    this.screenSize = function() {return 13.3;};
}

//Decorator1
const Memory = function(macbook) {
    let v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}

//Decorator2
const Engraving = function(macbook) {
    let v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}

//Decorator3
const Insurance = function(macbook) {
    let v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    }
}

const mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost());// 1522
console.log(mb.screenSize());// 13.3