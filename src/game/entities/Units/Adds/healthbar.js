import React from 'react';

export default function Healthbar ({props}) {

    const getHealthWidth = () => `${100 * (props.maxHealth - props.health) / props.maxHealth}%`;

    const { effect } = props;

    return (!effect) ? (
        <div style={{
            position: "absolute",
            height: 20,
            width: props.width + 20,
            backgroundColor: "green",
            border: "1px solid #fff",
            top: -30,
            left: -10
        }}>

            <div style={{
                position: "absolute",
                height: "100%",
                width: getHealthWidth(),
                backgroundColor: "yellow",
                left: 0,
                top: 0
            }}
            >
                <div style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "red",
                    left: 0,
                    top: 0,
                    transition: "0.2s ease-out 0s",
                    zIndex: 5
                }}
                />
            </div>

        </div>

    ) : null;
}