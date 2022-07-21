import React from 'react';
import classes from './statistics.module.css';

export default function Statistics ({shots, hits, time, kills}) {

    return (
        <div className={classes.content}>
            <h3>Level Complete</h3>
            <p>Shots : <span>{shots}</span><br />
                Hits : <span>{hits}</span><br />
                Kills : <span>{kills}</span><br />
                Time : <span>{(Date.now() - time) / 1000} seconds</span>
            </p>
        </div>
    )
}