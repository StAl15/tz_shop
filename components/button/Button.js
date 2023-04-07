import styles from './Button.module.css'
import variants from './ButtonVariants.module.css'
import React, {useEffect, useState} from "react";
import classNames from "classnames";

export const Button = ({color, onClickEvent, children, cls, ...other}) => {

    const classes = classNames(
        variants[color],
        styles.content,
        cls
    )
    console.log(classes)

    return (
        <>
            <button
                {...other}
                className={classes}
                onClick={onClickEvent}>
                {children}
            </button>
        </>
    );
};