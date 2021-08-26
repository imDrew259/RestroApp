import React, { Fragment } from "react";
import styles from "./CartModalItemCard.module.css";
import { useCartManage } from "../contexts/managing-cart-function";

const CartModalItemCard = (props) => {
  const ManageCartContext = useCartManage();

  const increaseQuantity = (event) => {
    event.preventDefault();
    ManageCartContext.addItem({
      ...props,
      quantity: 1,
    });
  };

  const decreaseQuantity = (event) => {
    event.preventDefault();
    ManageCartContext.removeItem(props.id);
  };

  return (
    <Fragment>
      <li className={styles["cart-item"]}>
        <div className={styles["item-info"]}>
          <h2 className={styles["item-heading"]}>{props.name}</h2>
          <div className={styles["item-amount"]}>
            <span className={styles["item-price"]}>Rs {props.price}</span>
            <span className={styles["item-quantity"]}>x {props.quantity}</span>
          </div>
        </div>
        <div className={styles["set-quantity"]}>
          <button
            onClick={decreaseQuantity}
            className={styles["quantity-button"]}
          >
            -
          </button>
          <button
            onClick={increaseQuantity}
            className={styles["quantity-button"]}
          >
            +
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default CartModalItemCard;
