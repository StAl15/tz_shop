import React from "react";
import styles from './Input.module.css'

export const Input = ({value, ...other}) => {
    return (
        <>
            <input
                {...other}
                className={styles.content}
                value={value}
            />
        </>
    );
};