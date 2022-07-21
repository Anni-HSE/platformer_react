import React from 'react';
import classes from './Bar.module.css';

export default function Bar (props) {

    return (
        <div className={classes.root} style={{
            left: props.left,
            bottom: props.bottom
        }}>
            Healthbar
        </div>
    )
}