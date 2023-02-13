import Image from "next/image";
import Link from "next/link";

import { Product as ProductType } from "../../data/fake-data";
import {
  Product,
  ImageWrapper,
  ProductDetail,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "../../styles/ProductCard.style";

interface ProductCardProps {
  product: ProductType;
  all?: boolean;
}

const ProductCard = ({ product, all }: ProductCardProps) => {
  console.log(product)
  const { id, image, title, description, price } = product  || {};
  return (
    <Product key={id}>
      <ImageWrapper>
        <Image src={image} alt="product" style={{ objectFit:"cover"}} fill/>
      </ImageWrapper>
      <ProductDetail>
        <Link href={`/product/${id}`} passHref>
          <ProductTitle>{title}</ProductTitle>
        </Link>
        <ProductDescription $all={all}>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetail>
    </Product>
  );
};

export default ProductCard;