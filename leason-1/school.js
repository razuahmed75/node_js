const EventEmitter = require('events');

class School extends EventEmitter{
     startPeriod(){
        console.log('Classs started');
    
        this.emit('bellRing',{
            period: 'first period',
            text: 'ended'
        });
    }
}





module.exports = School;