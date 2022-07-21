import Unit from '../Unit';
import Bang from '../../Effects/Bang/Bang';

class Enemy extends Unit {
    constructor({
                    left, top,
                    width, height,
                    factory, world,
                    defaultAnimation,
                    animations,
                    angle,
                    health, speed,
                    matterProps,
                    asset, scale }) {
        super({
            left, top, width, height,
            factory, world,
            defaultAnimation,
            animations,
            angle,
            health, speed,
            matterProps,
            asset,
            scale
        });
        this.type = "enemy";
        this.healthbar = true;
        this.isVisible = true;
        this.zIndex = 100
    };

    checkVisible = (entities) => {
        const sceneLeft = Math.abs(entities.sceneLeft);
        const left = this.body.position.x;

        if (left < sceneLeft - 200 || left > sceneLeft + 1400) {
            this.isVisible = false
        } else {
            this.isVisible = true
        }
    }

    runDieAnimation = () => {
        const bang = new Bang({
            centerX: this.body.position.x,
            centerY: this.body.position.y,
            factory: this.factory
        });
        this.factory.addEntity(bang);
        this.factory.removeUnit(this);
        this.factory.game.addToStatistic("kills");

    };

    hitReaction = () => {

    }

};

export default Enemy;
