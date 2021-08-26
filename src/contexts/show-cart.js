import React, { useContext } from "react";

const ShowCartContext = React.createContext(null);

const useShowCart = () => useContext(ShowCartContext);

const ShowCartProvider = ({ value, children }) => {
  return (
    <ShowCartContext.Provider value={value}>
      {children}
    </ShowCartContext.Provider>
  );
};

export default ShowCartProvider;
export { useShowCart };
