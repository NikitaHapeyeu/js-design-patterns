var mySingleton = (function(){
    var instance;

    function init() {
        function privateMethod() {
            console.log('private method');
        };
        var privateVariable = 'private variable';
        var privateRandomNumber = Math.random();
  

        return {
            publicMethod: function() {
                console.log('public method')
            },
            publicProperty : 'public property',
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        }
    };

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var a = mySingleton.getInstance();
var b = mySingleton.getInstance();

console.log(a.getRandomNumber() === b.getRandomNumber());