import React from "react";
import styles from "./Main.module.css";
import Menu from "./Menu";

const Main = () => {
  return (
    <main>
      <section className={styles.food}>
        <h1>Food is Fuel</h1>
        <h2>Get Delicious Food Delivered Right At Your Doorsteps</h2>
        <p>Check out our menu below and order food according to your mood</p>
      </section>
      <Menu />
    </main>
  );
};

export default Main;
