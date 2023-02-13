import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from 'next/router'
import { sortByPrice, Direction } from "../../data/fake-data";
import { PageTitle, ProductGallery, PriceFilter } from "../../styles/index.style";
import { GetStaticPaths } from "next";
// import ProductCard from "./Product";

// Whenever you are creating a component that has dynamic data. Try importing that component in below mentioned format. 
// It disables SSR and lets you render new data on API call.
import dynamic from 'next/dynamic';
const ProductCard = dynamic(() => import("./Product"), {
    ssr: false,
});


const ProductHome = () => {
    const [direction, setDirection] = useState<Direction>("ASC");
    const router = useRouter();

    const products = sortByPrice(direction);

    const handleSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const dir = e.target.value;
        router.push(`${router.pathname}?direction=${dir}`, undefined, {
            shallow: true,
        });
    };

    useEffect(() => {
        if (router.query.direction) {
            setDirection(router.query.direction as Direction);
        }
    }, [router.query.direction]);

    return (
        <div>
            <PageTitle>商品列表</PageTitle>
            <PriceFilter>
                Price:
                <select value={direction} onChange={handleSortingDirectionChange}>
                    <option value="ASC">價格由低到高</option>
                    <option value="DES">價格由高到低</option>
                </select>
            </PriceFilter>
            <ProductGallery>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductGallery>
        </div>
    );
};

export default ProductHome;