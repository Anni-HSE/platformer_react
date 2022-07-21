import Matter from 'matter-js';
import Bullet from './Bullet.renderer';

class _Bullet {
    constructor({ x, y, speed, angle, factory, damage, asset, bgx, bgy, frames, size, matterProps }) {
        this.left = x;
        this.top = y;
        this.size = size;
        this.left = x + (angle >= 0 ? 0 : - this.size[0]);
        this.top = y;
        this.backgroundPosition = [bgx, bgy];
        this.angle = angle;
        this.body = Matter.Bodies.rectangle(this.left, this.top, this.size[0], this.size[1], matterProps);
        this.body.unit = this;
        this.renderer = Bullet;
        this.speed = speed;
        this.distance = 0;
        this.factory = factory;
        this.type = "bullet";
        this.damage = damage;
        this.asset = asset;
        this.animation = {
            frameIdx: 0,
            durationIdx: 0,
            duration: 0,
            isCycle: true
        };
        this.frames = frames;
    }

    animate = () => {
        const frameIdx = this.animation.frameIdx;
        const frame = this.frames[frameIdx];
        this.size = [frame.w, frame.h];
        this.animation.duration = frame.duration;
        this.backgroundPosition = [frame.bgx, frame.bgy];
        if (this.animation.durationIdx < this.animation.duration) {
            this.animation.durationIdx += 1;
        } else {
            this.animation.frameIdx = this.frames[frameIdx + 1] ? frameIdx + 1 : frameIdx;
            this.animation.durationIdx = 0;
        }
    };

    move = () => {
        const PI = 3.1416;
        const rad = (this.angle * PI) / 180;
        this.animate();
        const vector = { x: this.speed * Math.cos(rad), y: this.speed * Math.sin(rad) };
        Matter.Body.translate(this.body, vector);
        this.distance += this.speed;

        if (this.distance >= 500) {
            this.factory.removeUnit(this);
        }
    };

    hitTarget = () => {
        /* пуля подпадает в цель => должна взорваться и исчезнуть из мира matter-js и из entities */
        this.factory.game.addToStatistic("hits")
        this.factory.addBulletHit({
            centerX: this.body.position.x,
            centerY: this.body.position.y
        })
        this.factory.deleteBullet(this);
    }

}

export default _Bullet;