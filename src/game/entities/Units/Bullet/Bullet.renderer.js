import React from 'react'

export default function Person(props) {

    const [width, height] = props.size;
    const left = props.body.position.x - width / 2;
    const top = props.body.position.y - height / 2;
    const [bgx, bgy] = props.backgroundPosition;
    const asset = props.asset;

    return (
        <div style={{
            position: "absolute",
            zIndex: 10,
            top: top,
            left: left,
            width: width,
            height: height,
            backgroundImage: asset,
            backgroundPositionX: bgx,
            backgroundPositionY: bgy,
            transform: `rotateY(180deg) scale(0.6)`
        }} />
    )
}