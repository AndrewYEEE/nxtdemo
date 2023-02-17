import React from "react";
import type { NextPage } from "next";
import Link from "next/link";


interface Props {
    products: string;
}

const Products = ({products}: Props) =>{
    return <div>{products}</div>
}

export const getServerSideProps= async ()=>{
    return {
        props: {
            products: "productsdddd",
        }
    }
}

export default Products;