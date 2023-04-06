import React from "react";
import styles from "./Heading.module.css"

export const Heading = ({text, ...other}) => {
    return (
        <>
            <h1 {...other} className={styles.content}>{text}</h1>
        </>
    );
};