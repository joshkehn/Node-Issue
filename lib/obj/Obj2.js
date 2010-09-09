var sys = require("sys");
var events = require("events");

module.exports = Obj;

function Obj() {
    events.EventEmitter.call(this);
    var self = this;

    self.name = "Obj2";

    self.testEmit = function(){
        self.emit("data");
    }
    
}


Obj.super_ = events.EventEmitter;
Obj.prototype = Object.create(events.EventEmitter.prototype,
    {
        constructor:
        {
            value: Obj,
            enumerable: false
        }
    }
);