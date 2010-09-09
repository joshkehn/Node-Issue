var sys = require("sys");

function Digger(num)
{
    var d = require('./lib/obj/Obj' + num + ".js");
    return d;
}

var digger = new Digger(1);

digger.addListener("data",
        function(data) {
            sys.log("caught data event from digger");
            sys.log(digger.name);
        }
);

setInterval(function(){digger.testEmit();}, 1000);

