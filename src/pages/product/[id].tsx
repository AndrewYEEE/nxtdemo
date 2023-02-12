import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getProductById } from "../../data/fake-data";
import { PageTitle, ProductContainer, BackLink } from "./index.style";
// import ProductCard from "./Product";

// Whenever you are creating a component that has dynamic data. Try importing that component in below mentioned format. 
// It disables SSR and lets you render new data on API call.
import dynamic from 'next/dynamic';
const ProductCard = dynamic(() => import("./Product"), {
    ssr: false,
});


const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <></>; //防止因為第一次渲染沒拿到id而出問題

  const product = getProductById(id as string);

  return (
    <div>
      <PageTitle>商品詳細頁面</PageTitle>
      <BackLink>
        <Link href="/product">
            回產品列表
        </Link>
      </BackLink>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </div>
  );
};

export default Product;