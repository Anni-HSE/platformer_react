import getFromEntities from '../lib/getFromEnitites';

const pifagor = (a, b) => Math.sqrt(a ** 2 + b ** 2);

const Scene = (entities, screen) => {

    const player = entities.player;

    if (!player) {
        return entities
    };

    const factory = entities.factory;

    if (!factory) {
        return entities
    };

    const camera = document.getElementById("game-container");
    const cameraWidth = camera.offsetWidth;
    const cameraHeight = camera.offsetHeight;

    const scene = document.querySelector('.game-scene');
    const sceneLeft = Math.abs(scene.offsetLeft);
    const sceneTop = Math.abs(scene.offsetTop);
    const sceneHeight = scene.offsetHeight;

    const playerLeft = player.body.position.x;
    const playerTop = player.body.position.y;
    const playerWidth = player.width;
    const playerHeight = player.height;

    const topCameraSpace = (cameraHeight - playerHeight) / 2;
    const leftCameraSpace = (cameraWidth - playerWidth) / 2;

    const triggers = factory.triggers;

    if (entities.scene.fixed && entities.scene.fixedNotDone) {
        const { left, top } = entities.scene.fixed;
        scene.style.transitionDuration = "5s";
        scene.style.left = `${-left}px`;
        scene.style.top = `${-top}px`;
        entities.sceneLeft = -left;
        entities.sceneTop = -top;
        entities.scene.fixedNotDone = false;
        entities.disableMoving = true;

        getFromEntities(entities, "static").forEach(element => {
            element.isVisible = true;
        });

        setTimeout(() => {
            scene.style.transitionDuration = "0.1s";
            entities.disableMoving = false;
        }, 5000);

        return entities
    };

    if (entities.scene.fixed && !entities.scene.fixedNotDone) {
        entities.sceneLeft = -sceneLeft;
        entities.sceneTop = -sceneTop;
        return entities
    }

    triggers.forEach((trigger, idx) => {
        if (trigger.condition(factory)) {
            trigger.action(factory);
            trigger.done = true;
        }
    });

    const left = leftCameraSpace - playerLeft;
    const top = topCameraSpace - playerTop;

    scene.style.top = `${0}px`;
    entities.sceneTop = top;

    if (playerLeft >= leftCameraSpace) {
        if (playerLeft - sceneLeft >= leftCameraSpace) {
            scene.style.left = `${left}px`;
            entities.sceneLeft = left;
        }

        Object.values(entities).forEach(entity => {
            if (entity.type === "background") {
                entity.move(left);
            };
        });
    };
    scene.style.top = `${Math.abs(top) > entities.levelHeight - topCameraSpace - 250 ? (-entities.levelHeight + topCameraSpace + 250) : top}px`

    Object.values(entities).forEach(entity => {
        if (entity.body && entity.type !== "player") {

            const centerX = entity.body.position.x;
            const centerY = entity.body.position.y;
            const halfWidth = entity.width / 2;
            const halfHeight = entity.height / 2;
            const entityDig = pifagor(halfHeight, halfWidth);

            if (centerX + halfWidth < sceneLeft ) {
                factory.removeUnit(entity)
            } else {
                if (entity.type !== "enemy") {
                    const halfCameraWidth = cameraWidth / 2;
                    const halfCameraHeight = cameraHeight / 2;
                    const sceneCenterX = sceneLeft + halfCameraWidth;
                    const sceneCenterY = sceneTop + halfCameraHeight;
                    const sceneDig = pifagor(halfCameraWidth, halfCameraHeight);

                    const deltaX = sceneCenterX - centerX;
                    const deltaY = sceneCenterY - centerY;

                    entity.isVisible = pifagor(deltaX, deltaY) < entityDig + sceneDig;
                };

            }

        };
    });

    getFromEntities(entities, "enemy").forEach(enemy => {
        if (enemy.body.position.x < sceneLeft || enemy.body.position.y > sceneHeight) {
            factory.removeUnit(enemy)
        }
    });

    return entities

}

export default Scene