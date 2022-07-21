import Renderer from './Element.renderer';

class Element {
    constructor({
                    asset,
                    left, top,
                    width, height,
                    rotateX, rotateY,
                    bgx, bgy,
                    zIndex
                }) {
        this.height = height;
        this.width = width;
        this.left = left;
        this.top = top;
        this.asset = asset;
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.bgx = bgx || 0;
        this.bgy = bgy || 0;
        this.renderer = Renderer;
        this.zIndex = zIndex;
        if (!this.top) {

        }
    };
};

export default Element;