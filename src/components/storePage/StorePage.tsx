import { useEffect, useState } from "react";
import { IStore } from "../store/Store";
import styles from "./storePage.module.css";
import { Link, useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import MyButton from "../myButton/MyButton";
import { useCart } from "../../context/CartContext";
const initialProduct: IStore = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  thumbnail: "",
  reviews: [
    {
      rating: 0,
    },
  ],
};

export default function StorePage(): JSX.Element {
  const [product, setProduct] = useState<IStore>(initialProduct);

  const { id } = useParams();

  const { addToCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data: IStore) => {
          setProduct(data);
        });
    }, 1500);
  }, [id]);

  return (
    <div className={styles.mainContainer}>
      {product.title ? (
        <div className={styles.productCard}>
          <div className={styles.imageWrapper}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={styles.detailsWrapper}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p style={{ color: "red" }}>
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
              €
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "15px" }}
            >
              <p style={{ fontSize: "medium" }}>Stock: {product.stock}</p>
              <p style={{ fontSize: "medium" }}>Rating: {product.rating}</p>
            </div>
            <MyButton
              text="Add to cart"
              func={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  image: product.thumbnail,
                  price: product.price * (1 - product.discountPercentage / 100),
                  quantity: 1,
                })
              }
            />
          </div>
          <Link to="/store" className={styles.backLink}>
            Go back to homepage
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
