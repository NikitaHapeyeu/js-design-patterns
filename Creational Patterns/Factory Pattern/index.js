// BicycleShop class (improved)

var BicycleShop = function() {};

BicycleShop.prototype = {
	sellBicycle: function(model) {
		var bicycle = (new BicycleFactory()).createBicycle(model);
	
		return bicycle;
	}
};

// BicycleFactory namespace

var BicycleFactory = function() {};

BicycleFactory.prototype = {
	createBicycle: function(model) {
		var bicycle;
		switch(model) {
			case 'The Speedster': 
				bicycle = new Speedster();
				break;
			case 'The Lowrider':
				bicycle = new Lowrider();
				break;
			case 'Flatlander':
				bicycle = new Flatlander();
				break;
			case 'The Comfort Cruiser':
			default:
				bicycle = new ComfortCruiser();
		};
		console.log('bicycle created!');
		return bicycle;
	}
};

//constructor 'Speedster'
var Speedster = function() {};
 

var myBicycle = new BicycleShop();
console.log(myBicycle.sellBicycle('The Speedster'));
