import React, {useState} from "react";
import {useQuery} from "react-query";
import {ListCards} from "@/components/ListCards/ListCards";
import {Heading} from "@/components/heading/Heading";
import {Pagination} from "@/components/Pagination/Pagination";
import styles from './ListShops.module.css'
// import {data, isLoading, page, setPage} from "@/API/productsAPI";

const ListShops = (props) => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1)

    const getProducts = async () =>
        await (await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)).json();

    const {data, isLoading, error} = useQuery(
        ['products', {limit, page}],
        getProducts,
    );
    return (
        isLoading
            ?
            <>
                <p>Loading...</p>
            </>
            : <>
                <div className={styles.content}>
                    <div className={styles.controls}>
                        <Heading text={'Welcome to shop'}/>
                        <Pagination page={page} setPage={setPage}/>
                    </div>
                    <ListCards data={data}/>
                </div>
            </>
    )
        ;
};

export default ListShops;