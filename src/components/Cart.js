import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { Backdrop, CartModal } from "./CartModal";

const Cart = () => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <Backdrop />
          <CartModal />
        </Fragment>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Cart;
