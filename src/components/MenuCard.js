import React, { Fragment, useState } from "react";
import { style } from "@material-ui/system";
import styles from "./MenuCard.module.css";
import { useCartManage } from "../contexts/managing-cart-function";

const MenuCard = (props) => {
  const [value, setValue] = useState("1");
  const ManageCartContext = useCartManage();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    const obj = {
      ...props,
      quantity: Number(value),
    };
    ManageCartContext.addItem(obj);
    setValue("1");
  };

  return (
    <Fragment>
      <li className={styles["list-item"]}>
        <div>
          <h3>{props.name}</h3>
          <p className={style["item-description"]}>{props.description}</p>
          <p className={styles["item-price"]}>Rs {props.price}</p>
        </div>
        <div className={styles["add-meals"]}>
          <label>
            <span>Quantity</span>
            <input
              id="item"
              className={styles["input-quantity"]}
              type="number"
              min="1"
              max="10"
              step="1"
              value={value}
              onChange={handleChange}
            />
          </label>
          <button onClick={addItem} className={styles["add-button"]}>
            ADD
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default MenuCard;
