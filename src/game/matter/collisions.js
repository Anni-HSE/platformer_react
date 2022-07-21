import Matter from 'matter-js';
import categories from '../constraints/colides';

const isColide = (groups, key) => groups.some(group => group === key);

const playerColides = (...groups) => isColide([...groups], categories.player);
const staticColides = (...groups) => isColide([...groups], categories.static);
const playerBulletColides = (...groups) => isColide([...groups], categories.bullet);
const enemyBulletColides = (...groups) => isColide([...groups], categories.enemyBullet);
const enemyColides = (...groups) => isColide([...groups], categories.enemy);

export default function addCollosionsHandlers() {

    const entities = this.factory.entities;
    Matter.Events.on(this.factory.engine, "collisionStart", (event) => {

        const player = entities.player;

        const pairs = event.pairs;

        pairs.forEach(contact => {
            const bodyA = contact.bodyA;
            const bodyB = contact.bodyB;

            const groupA = bodyA.collisionFilter.group;
            const groupB = bodyB.collisionFilter.group;

            if (playerColides(groupB, groupA) && staticColides(groupB, groupA)) {

                if (contact.collision.normal.y === 1) {
                    player.stopJumpAudio();
                    player.isJumping = false;
                    player.forceJump = false;
                }

            };

            if (playerBulletColides(groupB, groupA) && enemyColides(groupB, groupA)) {
                const enemy = groupA === categories.enemy ? bodyA.unit : bodyB.unit;
                const bullet = groupA === categories.bullet ? bodyA.unit : bodyB.unit;

                enemy.hit(bullet.damage);
                bullet.hitTarget()
            };

            if (playerColides(groupA, groupB) && enemyColides(groupA, groupB)) {
                const enemy = groupA === categories.enemy ? bodyA.unit : bodyB.unit;

                if (player.forceJump) {
                    enemy.die()
                }
            };


            if (enemyBulletColides(groupB, groupA) && playerColides(groupB, groupA)) {
                const bullet = groupA === categories.enemyBullet ? bodyA.unit : bodyB.unit;
                player.hit(bullet.damage);
            };

            if (enemyColides(groupA, groupB) && playerColides(groupA, groupB)) {
                if (!player.forceJump) {
                    this.factory.game.setHealth(player.health - 20);
                    player.hit(20);
                }
            };

            if (enemyColides(groupA, groupB) && staticColides(groupB, groupA)) {
                const enemy = groupA === categories.enemy ? bodyA.unit : bodyB.unit;
                if (enemy.unit === "bird") {
                    enemy.angle = enemy.angle === 0 ? -180 : 0;
                }
            }
        })
    });
};