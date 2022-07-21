import level1 from './1lvl/level1';
import Matter from 'matter-js';
import Player from '../entities/Units/Player/Player';
import Controls from '../entities/Controls';
import PlayerBullet from '../entities/Units/Player/Player.bullet';
import defineUnit from '../lib/defineUnit';
import MatterJS from '../matter/';
import getFromEnitites from '../lib/getFromEnitites';

const levels = [
    level1
];

const startLevel = 0;

export { levels };

export default class GameFactory {
    constructor(game) {
        this.game = game;
        this.level = startLevel;
        this.world = null;
        this.engine = null;
        this.enitites = null;
        this.counts = null;
    }

    setupWorld = () => {
        if (this.level >= levels.length) {
            return this.game.finishGame();
        }

        this.counts = {
            static: 0,
            background: 0,
            enemy: 0,
            bullet: 0,
            effect: 0
        };
        this.engine = Matter.Engine.create({enableSleeping: false});
        this.world = this.engine.world;
        this.game.world = this.world;
        this.entities = {
            factory: this,
            physics: {
                engine: this.engine,
                world: this.world,
            },
            controls: new Controls(),
            scene: {
                width: 2400,
                height: 800,
                left: 0,
                fixed: null,
                fixedNotDone: true
            },
        };
        this.setupLevel(this.level)

        const matterJS = new MatterJS(this);
        matterJS.setupWorld();

        return this.entities;
    }

    setupLevel = lvl => {
        const level = levels[lvl];
        const levelProps = level.setup(this);

        this.entities.scene.fixed = false;
        this.entities.scene.fixedNotDone = true;

        this.entities.levelWidth = levelProps.levelWidth;
        this.entities.levelHeight = levelProps.levelHeight;
        const {x, y} = levelProps.playerStart;
        this.entities.sceneLeft = x - 600;
        this.entities.sceneTop = y - 400;
        this.entities.startPosition = {x, y};
        this.addPlayer(x, y);
        this.entities.player.isJumping = false;
        this.entities.player.forceJump = false;
        // this.entities = {...this.entities};
        this.game.gameEngine && this.game.gameEngine.swap(this.entities);
        this.game.gameEngine && this.game.gameEngine.start();
    }

    addToBodies = body => {
        Matter.World.addBody(this.world, body)
    };

    addCount = type => {
        this.counts[type] += 1;
    }

    finishGame = () => {

    }

    addToEntities = entity => {
        const type = entity.type;
        const key = type === "player" ? type : type + this.counts[type];
        this.addCount(type);
        entity.factory = this;
        this.entities[key] = entity;
    };

    removeUnit = unit => {
        if (unit.body) {
            this.removeFromBoides(unit.body);
        }
        ;
        defineUnit(unit);
        this.removeFromEntities(unit);
    };

    clearEnemies = () => {
        Object.values(this.entities).forEach(el => {
            if (el.type === "enemy") {
                this.removeUnit(el)
            }
            ;
        });
    }

    removeAllEntites = () => {
        Object.values(this.entities).forEach(entity => {
            this.removeUnit(entity)
        });
        this.counts = {
            static: 0,
            background: 0,
            enemy: 0,
            bullet: 0,
            effect: 0
        };
    };

    removeFromBoides = body => {
        Matter.World.remove(this.world, body)
    };

    removeFromEntities = entity => {
        const type = entity.type;
        delete this.entities[entity.key]
    };

    addPlayer = (left, top) => {
        const player = new Player({left: left, top: top, key: "player", factory: this});
        this.addToBodies(player.body);
        this.addToEntities(player);
    };

    addEntity = entity => {
        if (entity.body) {
            this.addToBodies(entity.body)
        }
        ;
        this.addToEntities(entity)
    };

    /* Эффекты */
    addEffect = (getEffect, props) => {
        const effect = getEffect({...props});
        this.addToEntities(effect);
    };

    addBang = ({centerX, centerY}) => {
        const props = {centerX, centerY, factory: this};
    };

    addBulletHit = ({centerX, centerY}) => {
        const props = {centerX, centerY, factory: this}
    };

    removeEffect = (effect) => {
        this.removeUnit(effect)
    };

    /* Снаряды */
    createPlayerBullet = (x, y, angle, speed, damage) => {
        const bullet = new PlayerBullet({x, y, speed, angle, factory: this, damage});
        this.addToBodies(bullet.body);
        this.addToEntities(bullet);
    };


    deleteBullet = bullet => {
        this.removeUnit(bullet);
    };

    fixCamera = (left, top) => {
        this.entities.scene.fixed = {
            left, top
        };
    };
};