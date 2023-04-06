import React from "react";
import styles from './Bage.module.css'

export const Bage = ({cls, text, ...other}) => {
    return (
        <>
            <p {...other} className={cls ? cls : styles.content}>{text}</p>
        </>
    );
};