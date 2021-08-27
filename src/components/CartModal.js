import React from "react";
import { useShowCart } from "../contexts/show-cart";
import { useCartManage } from "../contexts/managing-cart-function";
import styles from "./CartModal.module.css";
import CartModalItemCard from "./CartModalItemCard";

const Backdrop = () => {
  const showCart = useShowCart();

  const hideOverlay = () => {
    showCart.setShowOverlay(false);
  };

  return <div onClick={hideOverlay} className={styles.backdrop}></div>;
};

const CartItemCard = (item) => {
  return (
    <CartModalItemCard
      key={item.id}
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      price={item.price}
      id={item.id}
    />
  );
};

const CartModal = () => {
  const showCart = useShowCart();
  const ManageCartContext = useCartManage();

  const hideOverlay = () => {
    showCart.setShowOverlay(false);
  };

  const placeOrder = () => {
    console.log("Order Placed");
    ManageCartContext.removeAll();
    hideOverlay();
  };

  return (
    <div className={styles.modal}>
      <ul className={styles["cart-items"]}>
        {ManageCartContext.items.map(CartItemCard)};
      </ul>
      <div className={styles.footer}>
        <div className={styles.bill}>
          <span>Total Amount</span>
          <span>Rs {ManageCartContext.totalAmount}</span>
        </div>
        <div className={styles["place-order"]}>
          <button className={styles["close-button"]} onClick={hideOverlay}>
            Close
          </button>
          <button onClick={placeOrder} className={styles["confirm-button"]}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export { Backdrop, CartModal };
