const Car = function(settings){
    this.model = settings.model;
    this.color = settings.color;
};

const Mixin = function(){};

Mixin.prototype = {
    driveForward: function(){
        console.log('drive forward!');
    },
    driveBackward: function(){
        console.log('drive backward!');
    }
};

function augment(receivingClass, givingClass){
    if(arguments[2]){
        for (let i = 2, len = arguments.length; i < len; i++){
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    else {
        for (let methodName in givingClass){
            if (!receivingClass.prototype[methodName]){
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

augment(Car, Mixin, 'driveForward', 'driveBackward');

const vechile = new Car({model: 'Toyota Camry', color: 'white'});

vechile.driveForward();
vechile.driveBackward();