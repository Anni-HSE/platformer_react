import React from 'react';
import png from './indicator.png';
const asset = `url(${png})`;

const pickProps = angle => {
    switch (angle) {
        case 0: /* MoveRight */
            return ({ left: 60, top: 8, rotate: "0"})
        case -180: /* MoveLeft */
            return ({ left: 60, top: 8, rotate: "0"})
        case 315:  /* moveRightAndLookUp */
            return ({ left: 55, top: -20, rotate: "-45deg"});
        case 45:  /* moveRightAndLookDown */
            return ({ left: 55, top: 40, rotate: "45deg"});
        case -135: /* moveLeftAndLookUp */
            return ({ left: 55, top: -20, rotate: "-45deg"});
        case -225: /* moveLeftAndLookDown */
            return ({ left: 55, top: 40, rotate: "45deg"});
        case 270: /* rightlookUp */
            return ({ left: 8, top: -45, rotate: "-90deg"});
        case -90: /* leftLookUp */
            return ({ left: 8, top: -45, rotate: "-90deg"});
        case 90: /* rightLookDown */
            return ({ left: 8, top: 60, rotate: "90deg"});
        case -270: /* leftLookDown */
            return ({ left: 8, top: 60, rotate: "90deg"});
        default:
            return ({ left: 60, top: 8, rotate: "0"})
    }
}

export default function Indicator ({angle}) {

    const { left, top, rotate } = pickProps(angle);

    return (
        <div className="indicator"
             style={{
                 position: "absolute",
                 width: 30,
                 height: 30,
                 left: left,
                 top: top,
                 backgroundImage: asset,
                 backgroundSize: "cover",
                 transform: `rotate(${rotate})`
             }}
        />
    )
}