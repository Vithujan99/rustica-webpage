import React from "react";
import Hero from "./Hero/Hero";
import Search from "../../components/Search/Search";
import MenuItems from "./MenuItems/MenuItems";

const Menu = () => {
  return (
    <div>
      <Hero />
      <Search />
      <MenuItems />
    </div>
  );
};

export default Menu;
