import Farm from './farm/farm';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Static';
import BgItem from '../../entities/Elements/Background';
import WaterItem from '../../entities/Elements/Water';

const blockSize = Nature.blockSize;
const waterHeight = Nature.waterHeight;
const levelWidth = blockSize * 100;
const levelHeight = blockSize * 30;
const height = levelHeight;


const backgrounds = [
    Farm.hills.element(0, height - blockSize * 3 - Farm.hills.height, levelWidth)
];

const loadBackgrounds = factory => {
    backgrounds.forEach((el, idx) => {
        const entity = new BgItem({ ...el, factory, element: "water" });
        factory.addToBodies(entity.body);
        factory.addToEntities(entity);
    });
};

/**  Земля
 *!Земля с травой слева (х, y)
 Nature.statics.ground.upper.left(blockSize * 0, height - blockSize * 4),
 *!Земля с травой внутри (х, y, ширина)
 Nature.statics.ground.upper.middle(blockSize * 1, height - blockSize * 4, blockSize * 2),
 *!Земля с травой справа (х, y)
 Nature.statics.ground.upper.right(blockSize * 5, height - blockSize * 7),
 *!Земля внутри слева (х, y, высота)
 Nature.statics.ground.vertical.left(blockSize * 0, height - blockSize * 3, blockSize * 3),
 *!Земля внутри (х, y, ширина, высота)
 Nature.statics.ground.inside(blockSize, height - blockSize * 3, blockSize * 4, blockSize * 3),
 *!Земля внутри справа (х, y, высота)
 Nature.statics.ground.vertical.right(blockSize * 5, height - blockSize * 6, blockSize * 6),
 *!Земля низ слева (х, y)
 Nature.statics.ground.down.left(blockSize * 0, height),
 *!Земля низ внутри (х, y, ширина)
 Nature.statics.ground.down.middle(blockSize * 1, height, blockSize * 4),
 *!Земля низ справа (х, y)
 Nature.statics.ground.down.right(blockSize * 5, height),
 **/


/**  Платформа
 *!Платформа слева (x,y)
 Nature.statics.ground.cornice.left(blockSize * 34, height - blockSize * 6),
 *!Платформа внутри (x,y)
 Nature.statics.ground.cornice.middle(blockSize * 35, height - blockSize * 6, blockSize),
 *!Платформа справа (x,y)
 Nature.statics.ground.cornice.right(blockSize * 36, height - blockSize * 6),
 **/
const ground = [
    Nature.statics.ground.upper.left(blockSize * 0, height - blockSize * 4),
    Nature.statics.ground.upper.middle(blockSize * 1, height - blockSize * 4, blockSize * 2),
    Nature.statics.ground.upper.rightCorner(blockSize * 3, height - blockSize * 4, blockSize),
    Nature.statics.ground.corner.right(blockSize * 4, height - blockSize * 4),
    Nature.statics.ground.upper.left(blockSize * 4, height - blockSize * 7),
    Nature.statics.ground.upper.right(blockSize * 5, height - blockSize * 7),
    Nature.statics.ground.inside(blockSize, height - blockSize * 3, blockSize * 4, blockSize * 3),
    Nature.statics.ground.vertical.left(blockSize * 4, height - blockSize * 6, blockSize * 2),
    Nature.statics.ground.vertical.left(blockSize * 0, height - blockSize * 3, blockSize * 3),
    Nature.statics.ground.vertical.right(blockSize * 5, height - blockSize * 6, blockSize * 6),
    Nature.statics.ground.down.left(blockSize * 0, height),
    Nature.statics.ground.down.middle(blockSize * 1, height, blockSize * 4),
    Nature.statics.ground.down.right(blockSize * 5, height),

    Nature.statics.ground.upper.left(blockSize * 9, height - blockSize * 4),
    Nature.statics.ground.upper.middle(blockSize * 10, height - blockSize * 4, blockSize * 3),
    Nature.statics.ground.upper.right(blockSize * 13, height - blockSize * 4),
    Nature.statics.ground.vertical.left(blockSize * 9, height - blockSize * 3, blockSize * 3),
    Nature.statics.ground.inside(blockSize * 10, height - blockSize * 3, blockSize * 3, blockSize * 3),
    Nature.statics.ground.vertical.right(blockSize * 13, height - blockSize * 3, blockSize * 3),
    Nature.statics.ground.down.left(blockSize * 9, height),
    Nature.statics.ground.down.middle(blockSize * 10, height, blockSize * 3),
    Nature.statics.ground.down.right(blockSize * 13, height),

    Nature.statics.ground.cornice.left(blockSize * 18, height - blockSize * 6),
    Nature.statics.ground.cornice.middle(blockSize * 19, height - blockSize * 6, blockSize * 3),
    Nature.statics.ground.cornice.right(blockSize * 22, height - blockSize * 6),

    Nature.statics.ground.cornice.left(blockSize * 26, height - blockSize * 6),
    Nature.statics.ground.cornice.middle(blockSize * 27, height - blockSize * 6, blockSize * 2),
    Nature.statics.ground.cornice.right(blockSize * 29, height - blockSize * 6),

    Nature.statics.ground.cornice.left(blockSize * 34, height - blockSize * 6),
    Nature.statics.ground.cornice.middle(blockSize * 35, height - blockSize * 6, blockSize),
    Nature.statics.ground.cornice.right(blockSize * 36, height - blockSize * 6),

    Nature.statics.ground.cornice.left(blockSize * 42, height - blockSize * 6),
    Nature.statics.ground.cornice.right(blockSize * 43, height - blockSize * 6),


    Nature.statics.ground.upper.left(blockSize * 47, height - blockSize * 9),
    Nature.statics.ground.upper.middle(blockSize * 48, height - blockSize * 9, blockSize * 15),
    Nature.statics.ground.vertical.left(blockSize * 47, height - blockSize * 8, blockSize * 8),
    Nature.statics.ground.inside(blockSize * 48, height - blockSize * 8, blockSize * 31, blockSize * 8),
    Nature.statics.ground.upper.rightCorner(blockSize * 76, height - blockSize * 12, blockSize),


    Nature.statics.ground.down.left(blockSize * 47, height),
    Nature.statics.ground.down.middle(blockSize * 48, height, blockSize * 32),
    Nature.statics.ground.down.right(blockSize * 94, height),
    Nature.statics.ground.inside(blockSize * 94, height - blockSize * 13, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 99, height - blockSize * 13, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 102, height - blockSize * 14, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 107, height - blockSize * 14, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 110, height - blockSize * 15, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 115, height - blockSize * 15, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 118, height - blockSize * 16, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 133, height - blockSize * 16, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 126, height - blockSize * 9, blockSize * 1, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 139, height - blockSize * 16, blockSize * 2, blockSize * 1),





    Nature.statics.ground.corner.right(blockSize * 127, height - blockSize * 10),
    Nature.statics.ground.corner.right(blockSize * 127, height - blockSize * 10),
    Nature.statics.ground.corner.right(blockSize * 127, height - blockSize * 10),
    Nature.statics.ground.down.left(blockSize * 133, height - blockSize * 12, blockSize * 1),
    Nature.statics.ground.down.left(blockSize * 134, height - blockSize * 9, blockSize * 1),
    Nature.statics.ground.corner.right(blockSize * 166, height - blockSize * 5, blockSize * 1),
    //Nature.statics.ground.down.middle(blockSize * 134, height - blockSize * 9, blockSize * 1),



    Nature.statics.ground.vertical.left(blockSize * 63, height - blockSize * 11, blockSize * 2),
    Nature.statics.ground.inside(blockSize * 64, height - blockSize * 11, blockSize * 15, blockSize * 3),


    Nature.statics.ground.cornice.left(blockSize * 75, height - blockSize * 15),
    Nature.statics.ground.cornice.middle(blockSize * 76, height - blockSize * 15, blockSize * 2),

    Nature.statics.ground.upper.left(blockSize * 63, height - blockSize * 12),
    Nature.statics.ground.corner.right(blockSize * 63, height - blockSize * 9),
    Nature.statics.ground.corner.right(blockSize * 77, height - blockSize * 12),

    Nature.statics.ground.upper.middle(blockSize * 64, height - blockSize * 12, blockSize * 12),
    Nature.statics.ground.vertical.left(blockSize * 77, height - blockSize * 20, blockSize * 8),
    Nature.statics.ground.inside(blockSize * 78, height - blockSize * 20, blockSize * 1, blockSize * 9),

    Nature.statics.ground.cornice.left(blockSize * 52, height - blockSize * 12),
    Nature.statics.ground.cornice.middle(blockSize * 53, height - blockSize * 12, blockSize),
    Nature.statics.ground.cornice.right(blockSize * 54, height - blockSize * 12),

    Nature.statics.ground.cornice.right(blockSize * 62, height - blockSize * 15),
    Nature.statics.ground.cornice.middle(blockSize * 59, height - blockSize * 15, blockSize * 3),
    Nature.statics.ground.down.middle(blockSize * 59, height - blockSize * 12, blockSize),
    Nature.statics.ground.inside(blockSize * 59, height - blockSize * 21, blockSize * 1, blockSize * 9),



    Nature.statics.ground.cornice.left(blockSize * 76, height - blockSize * 21),
    Nature.statics.ground.cornice.middle(blockSize * 77, height - blockSize * 21, blockSize * 1),

    Nature.statics.ground.cornice.left(blockSize * 82, height - blockSize * 17),
    Nature.statics.ground.cornice.middle(blockSize * 83, height - blockSize * 17, blockSize * 7),

    Nature.statics.ground.cornice.left(blockSize * 82, height - blockSize * 11),
    Nature.statics.ground.cornice.middle(blockSize * 83, height - blockSize * 11, blockSize * 7),

    Nature.statics.ground.cornice.middle(blockSize * 79, height - blockSize * 21, blockSize * 7),
    Nature.statics.ground.cornice.right(blockSize * 86, height - blockSize * 21),

    Nature.statics.ground.cornice.middle(blockSize * 79, height - blockSize * 14, blockSize * 7),
    Nature.statics.ground.cornice.right(blockSize * 86, height - blockSize * 14),

    Nature.statics.ground.vertical.right(blockSize * 79, height - blockSize * 20, blockSize * 16),

    Nature.statics.ground.cornice.right(blockSize * 71, height - blockSize * 18),
    Nature.statics.ground.cornice.middle(blockSize * 69, height - blockSize * 18, blockSize * 2),

    Nature.statics.ground.down.middle(blockSize * 69, height - blockSize * 15, blockSize),
    Nature.statics.ground.inside(blockSize * 69, height - blockSize * 27, blockSize * 1, blockSize * 12),

    Nature.statics.ground.upper.left(blockSize * 77, height - blockSize * 21),
    Nature.statics.ground.upper.middle(blockSize * 78, height - blockSize * 21, blockSize * 1),
    Nature.statics.ground.upper.right(blockSize * 79, height - blockSize * 21),

    Nature.statics.ground.inside(blockSize * 60, height - blockSize * 27, blockSize * 9, blockSize * 6),
    Nature.statics.ground.down.middle(blockSize * 60, height - blockSize * 21, blockSize * 9),
    Nature.statics.ground.inside(blockSize * 69, height - blockSize * 27, blockSize * 21, blockSize * 1),
    Nature.statics.ground.down.middle(blockSize * 69, height - blockSize * 26, blockSize * 20),

    Nature.statics.ground.upper.left(blockSize * 59, height - blockSize * 28),
    Nature.statics.ground.upper.middle(blockSize * 60, height - blockSize * 28, blockSize * 110),

    Nature.statics.ground.vertical.left(blockSize * 89, height - blockSize * 25, blockSize * 14),
    Nature.statics.ground.inside(blockSize * 90, height - blockSize * 27, blockSize * 80, blockSize * 11),
    Nature.statics.ground.inside(blockSize * 89, height - blockSize * 26, blockSize * 1, blockSize * 1),

    Nature.statics.ground.inside(blockSize * 79, height - blockSize * 3, blockSize * 1, blockSize * 3),
    Nature.statics.ground.inside(blockSize * 86, height - blockSize * 5, blockSize * 8, blockSize * 5),
    Nature.statics.ground.upper.right(blockSize * 80, height - blockSize * 4),
    Nature.statics.ground.vertical.right(blockSize * 80, height - blockSize * 3, blockSize * 3),

    Nature.statics.ground.down.right(blockSize * 80, height),

    Nature.statics.ground.upper.left(blockSize * 85, height - blockSize * 6),
    Nature.statics.ground.upper.middle(blockSize * 86, height - blockSize * 6, blockSize * 8),
    Nature.statics.ground.upper.right(blockSize * 94, height - blockSize * 6),
    Nature.statics.ground.vertical.left(blockSize * 85, height - blockSize * 5, blockSize * 5),
    Nature.statics.ground.vertical.right(blockSize * 94, height - blockSize * 5, blockSize * 5),
    Nature.statics.ground.down.left(blockSize * 85, height),
    Nature.statics.ground.down.middle(blockSize * 86, height, blockSize * 8),

    Nature.statics.ground.inside(blockSize * 90, height - blockSize * 16, blockSize * 4, blockSize * 5),
    Nature.statics.ground.inside(blockSize * 94, height - blockSize * 16, blockSize * 6, blockSize * 3),
    Nature.statics.ground.inside(blockSize * 100, height - blockSize * 16, blockSize * 2, blockSize * 4),
    Nature.statics.ground.inside(blockSize * 102, height - blockSize * 16, blockSize * 6, blockSize * 2),
    Nature.statics.ground.inside(blockSize * 108, height - blockSize * 16, blockSize * 2, blockSize * 3),
    Nature.statics.ground.inside(blockSize * 110, height - blockSize * 16, blockSize * 6, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 116, height - blockSize * 16, blockSize * 2, blockSize * 2),

    Nature.statics.ground.cornice.left(blockSize * 99, height - blockSize * 8),
    Nature.statics.ground.cornice.middle(blockSize * 100, height - blockSize * 8, blockSize * 2),
    Nature.statics.ground.cornice.right(blockSize * 102, height - blockSize * 8),

    Nature.statics.ground.cornice.left(blockSize * 107, height - blockSize * 9),
    Nature.statics.ground.cornice.middle(blockSize * 108, height - blockSize * 9, blockSize * 2),
    Nature.statics.ground.cornice.right(blockSize * 110, height - blockSize * 9),

    Nature.statics.ground.cornice.left(blockSize * 115, height - blockSize * 10),
    Nature.statics.ground.cornice.middle(blockSize * 116, height - blockSize * 10, blockSize * 2),
    Nature.statics.ground.cornice.right(blockSize * 118, height - blockSize * 10),

    Nature.statics.ground.down.left(blockSize * 89, height - blockSize * 11),
    Nature.statics.ground.down.middle(blockSize * 90, height - blockSize * 11, blockSize * 5),
    Nature.statics.ground.down.right(blockSize * 94, height - blockSize * 11),

    Nature.statics.ground.down.left(blockSize * 99, height - blockSize * 12),
    Nature.statics.ground.down.middle(blockSize * 100, height - blockSize * 12, blockSize * 2),
    Nature.statics.ground.down.right(blockSize * 102, height - blockSize * 12),

    Nature.statics.ground.down.left(blockSize * 107, height - blockSize * 13),
    Nature.statics.ground.down.middle(blockSize * 108, height - blockSize * 13, blockSize * 2),
    Nature.statics.ground.down.right(blockSize * 110, height - blockSize * 13),

    Nature.statics.ground.down.left(blockSize * 115, height - blockSize * 14),
    Nature.statics.ground.down.middle(blockSize * 116, height - blockSize * 14, blockSize * 2),
    Nature.statics.ground.down.right(blockSize * 118, height - blockSize * 14),

    Nature.statics.ground.down.middle(blockSize * 95, height - blockSize * 13, blockSize * 4),
    Nature.statics.ground.down.middle(blockSize * 103, height - blockSize * 14, blockSize * 4),
    Nature.statics.ground.down.middle(blockSize * 111, height - blockSize * 15, blockSize * 4),
    Nature.statics.ground.down.middle(blockSize * 119, height - blockSize * 16, blockSize * 14),
    Nature.statics.ground.down.middle(blockSize * 134, height - blockSize * 16, blockSize * 5),
    Nature.statics.ground.down.middle(blockSize * 141, height - blockSize * 16, blockSize * 19),

    Nature.statics.ground.vertical.right(blockSize * 94, height - blockSize * 12, blockSize * 1),
    Nature.statics.ground.vertical.right(blockSize * 102, height - blockSize * 13, blockSize * 1),
    Nature.statics.ground.vertical.right(blockSize * 110, height - blockSize * 14, blockSize * 1),
    Nature.statics.ground.vertical.right(blockSize * 118, height - blockSize * 15, blockSize * 1),

    Nature.statics.ground.vertical.left(blockSize * 124, height - blockSize * 9, blockSize * 9),
    Nature.statics.ground.vertical.right(blockSize * 126, height - blockSize * 8, blockSize * 5),
    Nature.statics.ground.inside(blockSize * 125, height - blockSize * 9, blockSize * 1, blockSize * 9),
    Nature.statics.ground.inside(blockSize * 126, height - blockSize * 2, blockSize * 11, blockSize * 2),

    Nature.statics.ground.upper.left(blockSize * 124, height - blockSize * 10),
    Nature.statics.ground.upper.middle(blockSize * 125, height - blockSize * 10, blockSize * 2),
    // Nature.statics.ground.upper.right(blockSize * 127, height - blockSize * 10),
    Nature.statics.ground.cornice.middle(blockSize * 128, height - blockSize * 9, blockSize * 6),

    Nature.statics.ground.cornice.middle(blockSize * 128, height - blockSize * 12, blockSize * 1),
    Nature.statics.ground.cornice.right(blockSize * 129, height - blockSize * 12),

    Nature.statics.ground.cornice.left(blockSize * 131, height - blockSize * 12),
    Nature.statics.ground.cornice.middle(blockSize * 132, height - blockSize * 12, blockSize * 1),
    Nature.statics.ground.vertical.left(blockSize * 127, height - blockSize * 12, blockSize * 2),
    Nature.statics.ground.upper.left(blockSize * 127, height - blockSize * 12),
    Nature.statics.ground.vertical.left(blockSize * 133, height - blockSize * 15, blockSize * 3),

    Nature.statics.ground.upper.middle(blockSize * 127, height - blockSize * 3, blockSize * 10),
    Nature.statics.ground.upper.right(blockSize * 137, height - blockSize * 3),
    Nature.statics.ground.vertical.right(blockSize * 137, height - blockSize * 2, blockSize * 2),
    Nature.statics.ground.down.middle(blockSize * 141, height - blockSize * 16, blockSize * 25),
    Nature.statics.ground.down.left(blockSize * 124, height),
    Nature.statics.ground.down.middle(blockSize * 125, height, blockSize * 12),
    Nature.statics.ground.down.right(blockSize * 137, height),
    Nature.statics.ground.down.middle(blockSize * 127, height - blockSize * 9, blockSize * 1),

    Nature.statics.ground.upper.left(blockSize * 134, height - blockSize * 10),
    Nature.statics.ground.upper.right(blockSize * 135, height - blockSize * 10),
    Nature.statics.ground.upper.left(blockSize * 137, height - blockSize * 10),
    Nature.statics.ground.upper.middle(blockSize * 138, height - blockSize * 10, blockSize * 2),
    Nature.statics.ground.vertical.left(blockSize * 139, height - blockSize * 15, blockSize * 7),
    Nature.statics.ground.vertical.right(blockSize * 140, height - blockSize * 15, blockSize * 7),
    Nature.statics.ground.down.left(blockSize * 139, height - blockSize * 8),
    Nature.statics.ground.down.right(blockSize * 140, height - blockSize * 8),

    Nature.statics.ground.cornice.left(blockSize * 132, height - blockSize * 6),
    Nature.statics.ground.cornice.middle(blockSize * 133, height - blockSize * 6, blockSize * 5),
    Nature.statics.ground.cornice.right(blockSize * 138, height - blockSize * 6),
    Nature.statics.ground.upper.left(blockSize * 136, height - blockSize * 7),
    Nature.statics.ground.upper.middle(blockSize * 137, height - blockSize * 7, blockSize * 1),
    Nature.statics.ground.upper.right(blockSize * 138, height - blockSize * 7),
    Nature.statics.ground.down.left(blockSize * 136, height - blockSize * 6),
    Nature.statics.ground.down.middle(blockSize * 137, height - blockSize * 6, blockSize * 1),
    Nature.statics.ground.down.right(blockSize * 138, height - blockSize * 6),

    Nature.statics.ground.upper.middle(blockSize * 139, height - blockSize * 4, blockSize * 1),
    Nature.statics.ground.inside(blockSize * 139, height - blockSize * 3, blockSize * 1, blockSize * 3),
    Nature.statics.ground.down.middle(blockSize * 139, height, blockSize * 1),
    Nature.statics.ground.upper.left(blockSize * 145, height - blockSize * 5),
    Nature.statics.ground.vertical.left(blockSize * 145, height - blockSize * 4, blockSize * 4),
    Nature.statics.ground.down.left(blockSize * 145, height, blockSize * 1),
    Nature.statics.ground.upper.middle(blockSize * 146, height - blockSize * 5, blockSize * 20, true),
    Nature.statics.ground.inside(blockSize * 146, height - blockSize * 4, blockSize * 21, blockSize * 4),
    Nature.statics.ground.down.middle(blockSize * 146, height, blockSize * 21),

    Nature.statics.ground.down.left(blockSize * 149, height - blockSize * 7),
    Nature.statics.ground.down.right(blockSize * 150, height - blockSize * 7),
    Nature.statics.ground.vertical.left(blockSize * 149, height - blockSize * 15, blockSize * 8),


    Nature.statics.ground.cornice.left(blockSize * 157, height - blockSize * 8),
    Nature.statics.ground.cornice.middle(blockSize * 158, height - blockSize * 8, blockSize * 2),
    Nature.statics.ground.cornice.right(blockSize * 160, height - blockSize * 8),

    Nature.statics.ground.cornice.middle(blockSize * 150, height - blockSize * 11, blockSize * 3),
    Nature.statics.ground.cornice.right(blockSize * 153, height - blockSize * 11),
    Nature.statics.ground.vertical.right(blockSize * 150, height - blockSize * 15, blockSize * 8),

    Nature.statics.ground.cornice.left(blockSize * 158, height - blockSize * 13),
    Nature.statics.ground.cornice.middle(blockSize * 159, height - blockSize * 13, blockSize * 2),
    Nature.statics.ground.cornice.right(blockSize * 161, height - blockSize * 13),

    Nature.statics.ground.vertical.left(blockSize * 166, height - blockSize * 15, blockSize * 10),
    Nature.statics.ground.inside(blockSize * 167, height - blockSize * 16, blockSize * 10, blockSize * 16),


];

const loadGround = factory => {
    ground.forEach((el) => {
        const entity = new StaticItem({ ...el, factory, element: "ground" });
        factory.addToBodies(entity.body);
        factory.addToEntities(entity);
    })
};

const water = [

    Nature.statics.water.up(blockSize * 0, height - blockSize * 3 - waterHeight, blockSize * 124),
    Nature.statics.water.inside(blockSize * 0, height - blockSize * 3, blockSize * 124, blockSize * 6),

    Nature.statics.water.up(blockSize * 135, height - blockSize * 2 - waterHeight, blockSize * 11),
    Nature.statics.water.inside(blockSize * 135, height - blockSize * 2, blockSize * 11, blockSize * 3),

];

const loadWater = factory => {
    water.forEach((el, idx) => {
        const entity = new WaterItem({ ...el, factory, element: "water" });
        factory.addToBodies(entity.body);
        factory.addToEntities(entity);
    })
};

const loadtTriggers = (factory) => {
    factory.triggers = [

        {
            condition: factory => factory.entities.player.body.position.x >= 200 && factory.triggers[0].done === false,
            action: (factory) => factory.addBird.call(factory, 1800, 200),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 200 && factory.triggers[1].done === false,
            action: (factory) => factory.addGolem.call(factory, 800, height - blockSize * 5, {
                from: 600,
                to: 1000
            }),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 1000 && factory.triggers[2].done === false,
            action: (factory) => factory.addBird.call(factory, 2300, 1550),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 2200 && factory.triggers[3].done === false,
            action: (factory) => factory.addBird.call(factory, 3500, 1200),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 2700 && factory.triggers[4].done === false,
            action: (factory) => factory.addGolem.call(factory, 4070, 1406),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 3300 && factory.triggers[5].done === false,
            action: (factory) => factory.addGolem.call(factory, 4600, 1184),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 3500 && factory.triggers[6].done === false,
            action: (factory) => factory.addBird.call(factory, 4800, 1036),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 4500 && factory.triggers[7].done === false,
            action: (factory) => factory.addGolem.call(factory, 5800, 518),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 5000 && factory.triggers[8].done === false,
            action: (factory) => factory.addBird.call(factory, 6300, 518),
            done: false,

        },
        {
            condition: factory => factory.entities.player.body.position.x >= 5000 && factory.triggers[9].done === false,
            action: (factory) => factory.addGolem.call(factory, 6300, 814),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 5000 && factory.triggers[10].done === false,
            action: (factory) => factory.addGolem.call(factory, 6300, 1110),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 5000 && factory.triggers[11].done === false,
            action: (factory) => factory.addGolem.call(factory, 6300, 1332),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 5200 && factory.triggers[12].done === false,
            action: (factory) => factory.addBird.call(factory, 6500, 1628),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 5600 && factory.triggers[13].done === false,
            action: (factory) => factory.addGolem.call(factory, 6900, 1650),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 6400 && factory.triggers[14].done === false,
            action: (factory) => factory.addBird.call(factory, 7700, 1406),
            done: false,

        },
        {
            condition: factory => factory.entities.player.body.position.x >= 6850 && factory.triggers[15].done === false,
            action: (factory) => factory.addBird.call(factory, 8150, 1332),
            done: false,

        },
        {
            condition: factory => factory.entities.player.body.position.x >= 7350 && factory.triggers[16].done === false,
            action: (factory) => factory.addBird.call(factory, 8650, 1258),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 8100 && factory.triggers[17].done === false,
            action: (factory) => factory.addGolem.call(factory, 9400, 1332),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 8500 && factory.triggers[18].done === false,
            action: (factory) => factory.addGolem.call(factory, 9800, 1480),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 8500 && factory.triggers[19].done === false,
            action: (factory) => factory.addGolem.call(factory, 9800, 1702),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 8500 && factory.triggers[20].done === false,
            action: (factory) => factory.addGolem.call(factory, 9800, 1850),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 8850 && factory.triggers[21].done === false,
            action: (factory) => factory.addBird.call(factory, 10150, 1332),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 9350 && factory.triggers[22].done === false,
            action: (factory) => factory.addBird.call(factory, 10650, 1776),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 10700 && factory.triggers[23].done === false,
            action: (factory) => factory.addGolem.call(factory, 11000, 1776),
            done: false,
        },
        {
            condition: factory => factory.entities.player.body.position.x >= 11300 && factory.triggers[24].done === false,
            action: (factory) => {
                factory.addBoss1.call(factory, 12000, height - blockSize * 7);
                factory.fixCamera.call(factory, 11125, height - blockSize * 15);
            },
            done: false,
        },
    ]
};

const setup = factory => {
    loadGround(factory);
    loadWater(factory);
    loadBackgrounds(factory);
    loadtTriggers(factory);
    return {
        levelWidth, levelHeight, playerStart: {
            x: 200,
            y: height - blockSize * 7
        }
    }
};

const level1 = {
    setup: (factory) => setup(factory)
};

export default level1;