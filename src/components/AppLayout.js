import React from "react";
import Navbar from './Navbar';

const AppLayout = ({ children, refs }) => {
  return (
    <>
      <Navbar refs={refs}/>
      {children}
    </>
  );
};

export default AppLayout;