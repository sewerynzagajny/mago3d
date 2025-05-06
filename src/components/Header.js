import React, { forwardRef } from "react";

// Pozwala przekazać ref do <header>
const Header = forwardRef(function Header({ children }, ref) {
  return (
    <header className="header" ref={ref}>
      {children}
    </header>
  );
});

export default Header;
