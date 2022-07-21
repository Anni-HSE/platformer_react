import React from 'react';
import classes from './bar.module.css';
import healthPng from './health.png';

export default function Bar ({game}) {

    const { health, lives } = game.state;

    return (
        <div className={classes.root}>

            <div className={classes.health}>
                <div
                    className={classes.healthIcon}
                    style={{
                        backgroundImage: `url(${healthPng})`
                    }}></div>
                <span
                    className={classes.healthValue}
                    style={{

                    }}>{health}</span>
            </div>

            <div className={classes.livesContainer}>
                {Array(lives).fill(0).map((el, idx) => <div
                    key={idx}
                    style={{backgroundImage: `url(${healthPng})`}}
                    className={classes.lives}
                />)}
            </div>
        </div>
    )
}