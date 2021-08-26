import React from "react";
import styles from "./Menu.module.css";
import MenuCard from "./MenuCard";

const MenuDataItems = [
  {
    id: 1,
    name: "Pizza",
    description: "Italian Dish",
    price: 199,
  },
  {
    id: 2,
    name: "Noodles",
    description: "Long and Non-sticky",
    price: 155,
  },
  {
    id: 3,
    name: "Chicken Popcorn",
    description: "Fried Chicken Pieces",
    price: 220,
  },
];

const showItems = (item) => {
  return (
    <MenuCard
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      id={item.id}
    />
  );
};

const Menu = () => {
  return (
    <section className={styles.menu}>
      <ul className={styles["list-items"]}>{MenuDataItems.map(showItems)}</ul>
    </section>
  );
};

export default Menu;
