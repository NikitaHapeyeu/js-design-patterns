// Create object to prototype
var vechilePrototype = {
    
    init: function(carModel) {
        this.model = carModel;
    },

    getModel: function() {
        console.log('The model of this vechile is ' + this.model);
    }
};

function vehile(model) {

    function F() {};
    F.prototype = vechilePrototype;

    var f = new F();

    f.init(model);
    return f;

}

var car = vehile('Honda Civic');
car.getModel(); // The model of this vechile is Honda Civic
