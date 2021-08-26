import React from "react";
import { useShowCart } from "../contexts/show-cart";
import { useCartManage } from "../contexts/managing-cart-function";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ShowCart = useShowCart();
  const CartItemsContext = useCartManage();

  const { items } = CartItemsContext;
  const numberOfItems = items.reduce((totalItems, item) => {
    return item.quantity + totalItems;
  }, 0);

  const showOverlay = () => {
    ShowCart.setShowOverlay(true);
  };

  return (
    <button className={styles["header-button"]} onClick={showOverlay}>
      <span className={styles["header-button-elem"]}>
        <ShoppingCartTwoToneIcon />
      </span>
      <span
        className={(styles["header-button-elem"], styles["cart-item-count"])}
      >
        {numberOfItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
