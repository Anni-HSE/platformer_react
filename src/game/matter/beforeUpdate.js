import Matter from 'matter-js';

let once = true;

export default function beforeUpdate () {
    const entities = this.factory.entities;
    const engine = entities.physics.engine;
    Matter.Events.on(engine, 'beforeUpdate', function(event) {
        if (once) {
            once = false;
        }
    });
}