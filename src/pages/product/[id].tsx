import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getProductById, Product as ProductType } from "../../data/fake-data";
import { PageTitle, ProductContainer, BackLink } from "../../styles/index.style";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
// import ProductCard from "./Product";

// Whenever you are creating a component that has dynamic data. Try importing that component in below mentioned format. 
// It disables SSR and lets you render new data on API call.
import dynamic from 'next/dynamic';
const ProductCard = dynamic(() => import("./Product"), {
  ssr: false,
});

//==============正常版本===============//
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

// interface ProductProps {
//   product: ProductType;
// }


// //Step3
// const Product = ({ product }: ProductProps) => {
//   const router = useRouter();

//   if (router.isFallback){
//     return <>Loading...</>; //防止因為第一次渲染沒拿到id而出問題
//   }

//   return (
//     <div>
//       <PageTitle>商品詳細頁面</PageTitle>
//       <BackLink>
//         <Link href="/product">
//           回產品列表
//         </Link>
//       </BackLink>
//       <ProductContainer>
//         <ProductCard product={product} all />
//       </ProductContainer>
//     </div>
//   );
// };

// //Step2
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const product = getProductById(params?.id as string);
//   return {
//     props: { product },
//   }
// }

// //Step1 
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { id: "1" } },
//       { params: { id: "2" } }
//     ], //預先產生id=1與id=2的頁面
//     fallback: false //非id=1, id=2的頁面一律404
//   }
// }

export default Product;