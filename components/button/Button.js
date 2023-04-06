import styles from './Button.module.css'
import React, {useEffect, useState} from "react";

export const Button = ({color, onClickEvent, children, cls, ...other}) => {
    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        return () => {
            switch (color) {
                case 'primary':
                    setBgColor('#F4684C')
                    break;
                case 'success':
                    setBgColor('green')
                    break;
                case 'danger':
                    setBgColor('yellow')
                    break;
            }
        };
    }, [bgColor]);


    return (
        <>
            <button
                {...other}
                style={{backgroundColor: bgColor}}
                className={cls ? cls : styles.content}
                onClick={onClickEvent}>
                {children}
            </button>
        </>
    );
};