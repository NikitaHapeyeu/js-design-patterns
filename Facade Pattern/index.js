const module = (function() {
    let _private = {
        i: 5,
        get: function() {
            console.log('current value: ' + this.i);
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
    return {
        facade: function(args) {
            _private.set(args.val);
            _private.get();
            if (args.run) {
                _private.run();
            };
            if (args.jump) {
                _private.jump();
            }
        }
    }
}());

module.facade({run: true, val: 42});
module.facade({jump: true, val: 91});