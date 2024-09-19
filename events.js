const eventsEmmiter = require('events');

const custom_Emmiter = new eventsEmmiter();

custom_Emmiter.on('click', (name, age) => {
    console.log(`data recieved for ${name} of id ${age}`);
})
custom_Emmiter.on('click', () => {
    console.log('data recieved 2, i can use the .on effect as many times i want for the "click" event');
})

custom_Emmiter.emit('click', 'abhay', 20);