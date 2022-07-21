import Static from './Static';
import Matter from 'matter-js';

export default class Water extends Static {
    constructor(props) {
        super(props);
        this.body = Matter.Bodies.rectangle(props.left + props.width / 2, props.top + props.height / 2,
            props.width, props.height,
            { isSensor: true, isStatic: true, density: 0.5 });
        this.type = "static";
        this.zIndex = 1;
        this.name = "water";
        this.isVisible = true;
    }
}