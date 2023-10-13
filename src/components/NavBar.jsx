import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navListMenuItems = [
    {
      title: "home",
      description: "All the stuff that we dan from legal made us add.",
      path:"/home"
    },
    {
      title: "Products",
      description: "Checkout our products that helps a startup running.",
      path:"/Products"

    },
    {
      title: "profile",
      description: "Set of beautiful icons that you can use in your project.",
      path:"/profile"

    },
    {
      title: " cart",
      description: "High quality UI Kits helps you to 2x faster.",
      path:"/cart"

    }
    
  ];
  return (
    <>
      <div className="bg-gray-100 max-w-7xl  px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {navListMenuItems.map((item, idx) => {
          return <NavLink to={item.path}>{item.title}</NavLink>;
        })}
      </div>
      <></>
    </>
  );
}

export default NavBar;
