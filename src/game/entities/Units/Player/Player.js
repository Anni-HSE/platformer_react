import Unit from '../Unit';
import Matter from 'matter-js';
import categories from '../../../constraints/colides';
import Bullet from './Player.bullet';

export default class Player extends Unit {
    constructor({left, top, factory}) {
        super({
            left, top, width: 45, height: 45,
            factory, world: factory.world,
            angle: 0,
            health: 100, speed: 5, idx: null,
            matterProps: {
                mass: 100,
                density: Infinity,
                collisionFilter: {
                    category: categories.player,
                    group: categories.player,
                    mask: categories.static | categories.enemy
                }},
        });
        this.type = "player";
        this.unit = "player";
        this.zIndex = 10;
        this.repeat = "no-repeat";
        this.isVisible = true;
        this.indicator = true;
        this.healthbar = false;
        this.reloadTime = 100;
        this.audio = {
            move: null
        };
        this.audio.shoot.loop = true;
    };

    setPosition = (position) => {
        Matter.Body.setPosition(this.body, position)
    };

    stopJumpAudio = () => {
        this.audio.jump.pause();
        this.audio.jump.currentTime = 0;
    };

    makeAction = controls => {

        if (this.factory.entities.disableMoving) {
            return;
        };

        if (this.isDead) {
            return
        }

        const { actions, settings } = controls;
        const { moveLeft, moveRight, lookUp, lookDown, jump, fire } = settings;

        if (actions.includes(moveRight)) {

            if (actions.includes(lookUp)) {
                this.moveRightAndLookUp()
            } else if (actions.includes(lookDown)) {
                this.moveRightAndLookDown()
            } else {
                this.moveRight()
            };

        } else if (actions.includes(moveLeft)) {

            if (actions.includes(lookUp)) {
                this.moveLeftAndLookUp()
            } else if (actions.includes(lookDown)) {
                this.moveLeftAndLookDown()
            } else {
                this.moveLeft()
            };

        } else {
            if (actions.includes(lookUp)) {
                this.angle >= 0 ? this.rightlookUp() : this.leftlookUp()
            } else if (actions.includes(lookDown)) {
                if (this.isJumping) {
                    this.forceMoveDown()
                } else {
                    this.angle >= 0 ? this.rightlookDown() : this.leftlookDown()
                };
            };
        };

        if (actions.includes(fire)) {
            this.shoot();
        };

        if (this.isJumping) {

            if (actions.includes(lookDown)) {
                this.forceMoveDown()
            };


        } else {

            if (actions.length === 0) {
                this.angle >= 0 ? this.idleRight() : this.idleLeft()
            }

            if (actions.includes(jump)) {
                if (actions.includes(lookDown)) {
                    this.forceMoveDown()
                } else {
                    this.jump();
                };
            }
        };

        if (!actions.includes(fire)) {
            this.audio.shoot && this.audio.shoot.pause();
            this.audio.shoot.currentTime = 0;
        };

        if (this.damageGiven) {
        };

        this.animate();
    };

    getLeft = () => this.body.position.x - this.width / 2;

    moveLeft = () => {
        this.angle = -180;
        if (this.getLeft() <= 600) {
            if (this.getLeft() - this.speed >= 0) {
                Matter.Body.translate(this.body, {x: -this.speed, y: 0});
            };
        } else {
            const leftLimit = Math.abs(this.factory.entities.sceneLeft);
            this.angle = -180;
            if (this.body.position.x - this.width / 2 >= leftLimit + this.speed) {
                this.body && Matter.Body.translate(this.body, { x: -this.speed, y: 0 });
            };
        };
    };

    forceMoveDown = () => {
        this.forceJump = true;
        this.angle = this.angle >= 0 ? 90 : -270;
        Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: 0.2})
    };

    shoot = () => {
        if (!this.reload) {
            this.reload = true;

            const { x , y } = this.getPosition();

            setTimeout(() => {
                this.reload = false
            }, this.reloadTime);

            const bullet = new Bullet({
                x, y,
                angle: this.angle,
                factory: this.factory,
            })
            this.factory.addEntity(bullet);
            this.factory.game.addToStatistic("shots");
        };
    };

    runDieAnimation = () => {
        if (!this.isDead) {
            this.isDead = true;

            setTimeout(() => {
                this.factory.game.reduceLives();
                this.isDead = false;
            }, 2000);
        };
    };
};