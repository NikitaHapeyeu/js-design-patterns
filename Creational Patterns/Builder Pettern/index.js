// Director
const Shop = function() {};

Shop.prototype = {
    construct : function(builder) {
        builder.stepFirst();
        builder.stepSecond();
        return builder.get();
    } 
}

// Concrete Builder
const CarBuilder = function() {
    this.car = null;
    this.stepFirst = function() {
        this.car = new Car();
    };
    this.stepSecond = function() {
        this.car.addParts();
    };
    this.get = function() {
        return this.car;
    };
}

// Concrete Builder
const TruckBuilder = function() {
    this.truck = null;
    this.stepFirst = function() {
        this.truck = new Truck();
    };
    this.stepSecond = function() {
        this.truck.addParts();
    };
    this.get = function() {
        return this.truck;
    };
}

// Product
const Car = function() {
    this.doors = 0;
    this.addParts = function() {
        this.doors = 4;
        console.log('Car created!')
    }
}

//Product
const Truck = function() {
    this.doors = 0;
    this.addParts = function() {
        this.doors = 2;
        console.log('Truck created!')
    }
}

//Implementation
const shop = new Shop(),
      carBuilder = new CarBuilder(),
      truckBuilder = new TruckBuilder(),
      car = shop.construct(carBuilder),
      truck = shop.construct(truckBuilder); 