import png from './Player.bullet.png';
import categories from '../../../constraints/colides';
import Bullet from "../Bullet/Bullet";

const asset = `url(${png})`;

const frames = [
    { w: 16, h: 28, bgx: -246, bgy: -46, duration: 5 },
    { w: 24, h: 28, bgx: -266, bgy: -46, duration: 5 },
    { w: 28, h: 28, bgx: -298, bgy: -46, duration: 5 },
    { w: 28, h: 28, bgx: -329, bgy: -46, duration: 5 },
    { w: 28, h: 28, bgx: -361, bgy: -46, duration: 5 },
    { w: 28, h: 28, bgx: -396, bgy: -46, duration: 5 },
    { w: 28, h: 28, bgx: -432, bgy: -46, duration: 5 },
]

const matterProps = {
    mass: 0,
    speed: 10,
    isSensor: true,
    isStatic: true,
    collisionFilter: {
        category: categories.bullet,
        mask: categories.enemy | categories.boss,
        group: categories.bullet
    }
};

const bulletProps = {
    speed: 15,
    damage: 20,
    size: [20, 20]
}

export default class PlayerBullet extends Bullet {
    constructor({x, y, angle, factory }) {
        super({
            x, y,
            speed: bulletProps.speed,
            angle,
            factory,
            damage: bulletProps.damage,
            asset,
            bgx: 10, bgy: -980,
            size: bulletProps.size,
            frames,
            matterProps
        })
        this.shooter = "player";
        this.noGravity = true;
    };

}