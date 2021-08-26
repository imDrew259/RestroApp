import React, { Fragment } from "react";
import styles from "./Header.module.css";
import foodImage from "../assets/header-image.jpg";
import chilliImage from "../assets/restro-app-logo.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={`${styles["text-header"]} ${styles["larger-screen"]}`}>
          The Spicy Saga
        </h1>
        <h1 className={styles["img-header"]}>
          <span>
            <img
              className={styles["logo-img"]}
              src={chilliImage}
              alt="Spicy logo"
            />
          </span>
          <span className={styles["text-header"]}>Saga</span>
        </h1>
        <HeaderCartButton />
      </header>
      <div>
        <img className={styles["header-food-img"]} src={foodImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;
