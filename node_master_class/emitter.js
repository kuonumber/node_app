const EventEmitter = require('events');
const emmit = new EventEmitter();

// add a listener
emmit.on('messageLogged',(e) =>{
    console.log('I hear you', e);
    
});

// raise an event
emmit.emit('messageLogged',{id:'1', url:'google.com'});

