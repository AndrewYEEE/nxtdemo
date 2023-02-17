import React from "react";
import Layout from "./Layout";

interface ProductLayoutProps {
    children?: React.ReactNode;
}

const ProductsLayout = ({children}: ProductLayoutProps)=>{
    return (
        <Layout>
            <div>Product Layout</div>
            {children}
        </Layout>
    )
}

export default ProductsLayout;