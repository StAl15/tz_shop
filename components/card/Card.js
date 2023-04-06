import styles from './Card.module.css'
import React from "react";
import {Button} from "@/components/button/Button";
import {Avatar} from "@/components/Avatar/Avatar";
import {Heading} from "@/components/heading/Heading";
import {Bage} from "@/components/Bage/Bage";

export const Card = ({product, ...other}) => {
    return (
        <>
            <div
                {...other}
                className={styles.content}
            >
                <Avatar image={product.url}/>
                <div>
                    <Heading style={{fontSize: '20px'}} text={product.title}/>
                    <Bage text={product.id % 2 === 0 ? 'top' : 'new'}/>
                </div>

                <Button color={'primary'}>
                    I want
                </Button>
            </div>
        </>
    );
};