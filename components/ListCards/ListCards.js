import {Card} from "@/components/card/Card";
import React from "react";
import styles from './ListCards.module.css'

export const ListCards = ({data}) => {
    return (
        <>
            <div
                className={styles.content}>
                {data.map((product) =>
                    <Card product={product} key={product.id}/>
                )}
            </div>
        </>
    );
};