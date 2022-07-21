import React from 'react'

export default function Static(props) {

    const {
        width,
        height,
        bgx,
        bgy,
        isVisible,
        rotateX,
        rotateY,
        body,
        asset,
        zIndex
    } = props;

    const getTranform = () => {
        if (rotateX) {
            return `rotateX(${rotateX})`
        } else if (rotateY) {
            return `rotateY(${rotateY})`
        }
    }

    const left = body.position.x - width / 2;
    const top = body.position.y - height / 2;

    return isVisible ? (
        <div style={{
            position: "absolute",
            zIndex: zIndex,
            top: top,
            left: left,
            width: width,
            height: height,
            backgroundImage: asset,
            backgroundPositionY: bgy,
            backgroundPositionX: bgx,
            backgroundRepeat: "repeat",
            transform: getTranform(),

        }} />
    ) : null;
}