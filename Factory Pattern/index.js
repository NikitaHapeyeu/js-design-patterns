// BicycleShop class
var BicycleShop = function() {

};

BicycleShop.prototype = {
	sellBicycle: function(model) {
		var bicycle;

		switch(model) {
			case 'The Speedster': 
				bicycle = new Speedster();
				break;
			case 'The Lowrider':
				bicycle = new Lowrider();
				break;
			case 'The Comfort Cruiser':
			default:
				bicycle = new ComfortCruiser();
		}
		
		return bicycle;
	}
};

var Speedster = function() {
	console.log('Speedster created!');
}



var myBicycle = new BicycleShop();
console.log(myBicycle.sellBicycle('The Speedster'));
