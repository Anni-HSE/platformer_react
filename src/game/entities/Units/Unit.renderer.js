import React from 'react';
import Indicator from './Adds/Indicator/indicator';
import HealthBar from './Adds/healthbar';
import classes from './Unit.module.css';

export default function Unit(props) {

    const left = props.body.position.x - props.width / 2;
    const top = props.body.position.y - props.height / 2;

    const chooseRotate = () => {
        const rotate = props.angle >= 0 ? "" : "rotateY(180deg)";
        const scale = props.scale ? ` scale(${props.scale})` : "";
        return rotate + scale
    };

    return props.isVisible ? (
        <div
            className={props.isDead ? classes.isDead : null}
            style={{
                position: "absolute",
                zIndex: props.zIndex,
                top: top,
                left: left,
                width: props.width,
                height: props.height,
                backgroundImage: props.asset,
                backgroundPositionX: props.bgx,
                backgroundPositionY: props.bgy,
                backgroundRepeat: props.repeat || "repeat",
                transform: chooseRotate()
            }}>
            {props.indicator && <Indicator angle={props.angle}/>}
            {props.healthbar && <HealthBar props={props} />}
        </div>
    ) : null;
}