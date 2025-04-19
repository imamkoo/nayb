import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="px-24 pt-8 pb-23">{children}</header>;
};

export default Header;
