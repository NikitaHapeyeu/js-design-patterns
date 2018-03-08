const module = (function() {
    let _private = {
        i: 5;
        get: function() {
            console.log('current value' + this.i);
        },
        set: function(value) {
            this.i = value;
        },
        run: function() {
            console.log('running');
        },
        jump: function() {
            console.log('jumping');
        }
    };
    
}());