import addCollosionsHandlers from './collisions';
import beforeUpdate from './beforeUpdate';

export default class MatterJS {
    constructor(factory) {
        this.factory = factory;
        this.addCollosions = addCollosionsHandlers.bind(this);
        this.addBeforeUpdate = beforeUpdate.bind(this);
    }

    setupWorld = () => {
        "setup world"
        this.addCollosions();
        this.addBeforeUpdate();
    }

}