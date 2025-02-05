import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";

function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: IProduct[] = await res.json();

    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.shopContainer}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}
export default Products;
