import {Button} from "@/components/button/Button";
import {Input} from "@/components/Input/Input";
import React from "react";
import styles from './Pagination.module.css'
import cl from '../../public/static/images/Icon/Chevron_Left.svg'
import cr from '../../public/static/images/Icon/Chevron_Right.svg'

import Image from "next/image";

export const Pagination = ({page, setPage}) => {
    const switchBack = () => {
        if (page > 1) setPage(page - 1)
    }
    const switchFront = () => {
        if (page < 100) setPage(page + 1)
    }
    return (
        <>
            <div className={styles.content}>
                <Button cls={styles.btn} onClickEvent={() => switchBack()}>
                    <Image alt={'cl'} src={cl}/>
                </Button>
                <Input
                    value={page}
                    disabled={true}
                    contentEditable={false}
                />
                <Button cls={styles.btn} onClickEvent={() => switchFront()}>
                    <Image alt={'cr'} src={cr}/>
                </Button>
            </div>
        </>
    );
};