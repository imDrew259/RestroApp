import React, { Fragment } from "react";
import styles from "./Header.module.css";
import foodImage from "../assets/header-image.jpg";
import chilliImage from "../assets/chilli-img.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles["text-header"]}>The Spicy Saga</h1>
        {/* <h1 className={styles["img-header"]}>
          <img src={chilliImage} alt="Spicy icon" />
          Saga
        </h1> */}
        <HeaderCartButton />
      </header>
      <div>
        <img className={styles["header-food-img"]} src={foodImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
