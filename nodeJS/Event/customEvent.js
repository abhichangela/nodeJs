var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on("speak",function(name){
    console.log(name, "Is speaking")
})

eventEmitter.emit("speak", "Abhi");

eventEmitter.on("run",function(name){
    console.log(name,"111");
})

eventEmitter.emit("run", "Pooja");