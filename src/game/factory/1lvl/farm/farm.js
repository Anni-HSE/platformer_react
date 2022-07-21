import background from './assets/background.png';
import hills from './assets/hills.png';

const defaultPerspective = 10;


const asset = `url(${background})`;

const Background = {
    arc1: { width: 242, height: 95, bgx: -47, bgy: -46, perspective: 10  },
    leftHalfArc1: { width: 121, height: 95, bgx: -47, bgy: -46, perspective: 10  },
    rightHalfArc1: { width: 121, height: 95, bgx: -159, bgy: -46, perspective: 10  },
    middleArc1: { width: 199, height: 95, bgx: -447, bgy: -46, perspective: 10  },
    tower: {
        small: { width: 114, height: 221, bgx: -950, bgy: -46, perspective: 10  },
        medium: { width: 114, height: 292, bgx: -1110, bgy: -46, perspective: 10  },
        big: { width: 114, height: 370, bgx: -1276, bgy: -46, perspective: 10 }
    },
    scultpure: { width: 188, height: 151, bgx: -304, bgy: -174, perspective: 10  },
    stackOfHay: { width: 77, height: 36, bgx: -834, bgy: -234, perspective: 25  },
    houses: {
        square: { width: 205, height: 157, bgx: -45, bgy: -352, perspective: 10 },
        noWalls: { width: 266, height: 146, bgx: -34, bgy: -612, perspective: 10  },
    },
    hills: { width: 1900, height: 700, bgx: 0, bgy: 0, perspective: 7  },
}

const getItem = (left, top, props, perspective) => {

    return ({
        ...props,
        left: left,
        top: top - props.height,
        asset,
        perspective: perspective || defaultPerspective
    })
};

const farm = {
    arc: {
        whole: (left, top, perspective) => getItem(left, top, Background.arc1, perspective),
        leftPart: (left, top, perspective) => getItem(left, top, Background.leftHalfArc1, perspective),
        rigthPart: (left, top, perspective) => getItem(left, top, Background.rightHalfArc1, perspective),
        middlePart: (left, top, perspective) => getItem(left, top, Background.middleArc1, perspective),
    },
    towers: {
        small: (left, top, perspective) => getItem(left, top, Background.tower.small, perspective),
        medium: (left, top, perspective) => getItem(left, top, Background.tower.medium, perspective),
        big: (left, top, perspective) => getItem(left, top, Background.tower.big, perspective),
    },
    scultpure: (left, top, perspective) => getItem(left, top, Background.scultpure, perspective),
    stackOfHay: (left, top, perspective) => getItem(left, top, Background.stackOfHay, perspective),
    houses: {
        square: (left, top, perspective) => getItem(left, top, Background.houses.square, perspective),
        noWalls: (left, top, perspective) => getItem(left, top, Background.houses.noWalls, perspective),
    },
    hills: {
        height: 680,
        element: (left, top, width ) => ({left, top, width, height: 680, asset: `url(${hills})`, perspective: 20, zIndex: 0})
    }
};

export default farm;