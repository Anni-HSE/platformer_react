import cornice from './assets/cornice.png'
import corniceCorner from './assets/corniceCorner.png';
import down from './assets/down.png';
import downCorner from './assets/downCorner.png';
import middle from './assets/middle.png';
import corner from './assets/corner.png';
import up from './assets/up.png';
import upCorner from './assets/upCorner.png';
import vertical from './assets/vertical.png';
import water from './assets/water.png';
import waterUp from './assets/waterUp.png';
import asset from './nature.png';
import cornerInside from './assets/cornerInside.png';

const defaultPerspective = 10;
const size = 74;
const corniceHeight = 46;
const waterHeight = 46;

const getAsset = asset => `url(${asset})`;

const mirror = "180deg";

/* Углы */

const bgs = {
    plate: { width: 36, height: 38, bgx: -514, bgy: -39 },
    pointer: { width: 36, height: 38, bgx: -567, bgy: -39 },
    mashroomOrange: { width: 29, height: 23, bgx: -649, bgy: -53 },
    mashroomPink: { width: 29, height: 23, bgx: -616, bgy: -53 },
    stump: { width: 76, height: 25, bgx: -696, bgy: -68 },
    trees: {
        big: { width: 167, height: 182, bgx: -448, bgy: -91 },
        small: { width: 167, height: 165, bgx: -620, bgy: -107 }
    },
    bush: {
        big: {
            green: { width: 82, height: 38, bgx: -479, bgy: -301 },
            yellow: { width: 82, height: 38, bgx: -566, bgy: -301 }
        },
        small: {
            green: { width: 42, height: 38, bgx: -672, bgy: -307 },
            yellow: { width: 42, height: 38, bgx: -726, bgy: -301 }
        }
    }
};


const getItem = (left, top, props, perspective, middle) => {

    return ({
        ...props,
        left: left,
        top: top,
        asset,
        perspective: perspective || defaultPerspective
    })
};

const _nature =  {
    blockSize: size,
    waterHeight,
    corniceHeight,
    statics: {

        ground: {

            inside: (left, top, width, height) => ({
                left, top,
                width, height,
                asset: getAsset(middle)
            }),

            corner:
                {
                    right: (left, top) => ({
                        left, top, width: size, height: size,
                        asset: getAsset(cornerInside),
                        rotateY: mirror
                    }),
                    left: (left, top) => ({
                        left, top, width: size, height: size,
                        asset: getAsset(cornerInside),
                    })
                },

            upper: {

                left: (left, top) => ({
                    left, top,
                    width: size,
                    height: size,
                    asset: getAsset(upCorner),
                    bgy: 1,
                }),

                middle: (left, top, width, platform) => ({
                    left, top,
                    width, height: size,
                    asset: getAsset(up),
                    bgy: 1,
                    platform
                }),

                right: (left, top) => ({
                    left, top,
                    width: size, height: size,
                    asset: getAsset(upCorner),
                    rotateY: mirror,
                    bgy: 1,
                }),
                leftCorner: (left, top) => ({
                    left, top,
                    width: size, height: size,
                    asset: getAsset(corner),
                }),

                rightCorner: (left, top) => ({
                    left, top,
                    width: size, height: size,
                    asset: getAsset(corner),
                    rotateY: mirror
                }),

            },

            vertical: {

                left: (left, top, height) => ({
                    left, top,
                    width: size, height,
                    asset: getAsset(vertical),
                }),

                right: (left, top, height) => ({
                    left, top,
                    width: size, height,
                    asset: getAsset(vertical),
                    rotateY: mirror
                }),

            },

            down: {

                left: (left, top) => ({
                    left, top,
                    width: size, height: size,
                    asset: getAsset(downCorner)
                }),

                middle: (left, top, width) => ({
                    left, top,
                    width, height: size,
                    asset: getAsset(down)
                }),

                right: (left, top) => ({
                    left, top,
                    width: size, height: size,
                    asset: getAsset(downCorner),
                    rotateY: mirror
                }),

            },

            cornice: {
                left: (left, top) => ({
                    left, top,
                    width: size, height: corniceHeight,
                    asset: getAsset(corniceCorner)
                }),

                middle: (left, top, width) => ({
                    left, top,
                    width, height: corniceHeight,
                    asset: getAsset(cornice),
                }),

                right: (left, top) => ({
                    left, top,
                    width: size, height: corniceHeight,
                    asset: getAsset(corniceCorner),
                    rotateY: mirror
                }),

            },

        },

        water: {

            up: (left, top, w) => ({
                left, top,
                width: w, height: waterHeight,
                asset: getAsset(waterUp),
            }),

            inside: (left, top, width, height) => ({
                left, top,
                width: width, height: height,
                asset: getAsset(water),
            }),

        },
    },

    backgrounds: {
        plate: (left, top, perspective) => getItem(left, top, bgs.plate, perspective),
        pointer: (left, top, perspective) => getItem(left, top, bgs.pointer, perspective),
        mashrooms: {
            orange: (left, top, perspective) => getItem(left, top, bgs.mashroomOrange, perspective),
            pink: (left, top, perspective) => getItem(left, top, bgs.mashroomPink, perspective),
        },
        stump: (left, top, perspective) => getItem(left, top, bgs.stump, perspective),
        trees: {
            big: (left, top, perspective) => getItem(left, top, bgs.trees.big, perspective),
            small: (left, top, perspective) => getItem(left, top, bgs.trees.small, perspective),
        },
        bush: {
            big: {
                green: (left, top, perspective) => getItem(left, top, bgs.bush.big.green, perspective),
                yellow: (left, top, perspective) => getItem(left, top, bgs.bush.big.yellow, perspective),
            },
            small: {
                green: (left, top, perspective) => getItem(left, top, bgs.bush.small.green, perspective),
                yellow: (left, top, perspective) => getItem(left, top, bgs.bush.small.yellow, perspective),
            }
        }
    }
}

export default _nature;