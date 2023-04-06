import React from "react";
import styles from './Avatar.module.css'

export const Avatar = ({image, ...other}) => {
    return (
        <>
            <img {...other} className={styles.content}
                 src={image}/>
        </>
    );
};