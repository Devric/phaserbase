// https://blog.ourcade.co/posts/2020/phaser3-how-to-communicate-between-scenes/
import * as Phaser from 'phaser';

// # usage


// ## emit event
// EventsManager.emit('some_event', val)

// ## listen event
// EventsManager.on('some_event', ()=>{}, this)

// ## Shut down listner
// this.events.(Phaser.Scenes.Events.SHUTDOWN, ()=>{
//  EventsManager.off('some_event', ()=>{}, this)
// })

export default new Phaser.Events.EventEmitter()
