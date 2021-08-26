import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import ShowCartProvider from "./contexts/show-cart";
import CartManage from "./contexts/managing-cart-function";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <CartManage>
      <ShowCartProvider
        value={{
          showOverlay: showOverlay,
          setShowOverlay: setShowOverlay,
        }}
      >
        <Header />
        {showOverlay && <Cart />}
      </ShowCartProvider>
      <Main />
    </CartManage>
  );
}

export default App;
