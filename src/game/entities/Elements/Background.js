
import Element from './Element';
import Matter from 'matter-js';

export default class BgElement extends Element {
    constructor(props) {
        super(props);
        this.body = Matter.Bodies.rectangle(props.left + props.width / 2, props.top + props.height / 2,
            props.width, props.height,
            { isSensor: true, isStatic: true });
        this.perspective = props.perspective;
        this.left = props.left;
        this.top = props.top;
        this.bgx = props.bgx;
        this.bgy = props.bgy;
        this.type = "background";
    }

    move = left => {
        Matter.Body.setPosition(this.body, { x: this.left + this.width / 2 + left / this.perspective , y: this.body.position.y})
    };
}