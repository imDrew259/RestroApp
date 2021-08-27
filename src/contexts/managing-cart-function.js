import React, { useContext, useReducer } from "react";

const ManagingCartContext = React.createContext(null);
const useCartManage = () => useContext(ManagingCartContext);

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  let updatedTotalAmount;
  switch (action.type) {
    case "add":
      const index = state.items.findIndex((item) => item.id === action.item.id);

      if (index === -1) {
        updatedItems = [...state.items, action.item];
      } else {
        updatedItems = [...state.items];
        updatedItems[index].quantity += action.item.quantity;
      }
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "remove":
      const toBeRemove = state.items.findIndex((item) => item.id === action.id);
      console.log(toBeRemove);
      if (state.items[toBeRemove].quantity === 1) {
        updatedItems = [...state.items];
        updatedTotalAmount = state.totalAmount - state.items[toBeRemove].price;
        updatedItems.splice(toBeRemove, 1);
      } else {
        updatedItems = [...state.items];
        updatedItems[toBeRemove].quantity -= 1;
        updatedTotalAmount = state.totalAmount - state.items[toBeRemove].price;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "removeAll":
      return {
        items: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
};

const CartManage = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatchCart({ type: "add", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "remove", id: id });
  };

  const removeAllFromCart = () => {
    dispatchCart({ type: "removeAll" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    removeAll: removeAllFromCart,
  };

  return (
    <ManagingCartContext.Provider value={cartContext}>
      {props.children}
    </ManagingCartContext.Provider>
  );
};

export default CartManage;
export { useCartManage };
