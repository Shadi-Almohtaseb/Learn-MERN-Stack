import React from "react";
import { Link } from "react-router-dom";
import { Anchor } from "antd";
import Hero from "./Hero";

const NavBar = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col list-none items-center justify-center ">
        <Anchor
          className="pt-6 px-8 bg-white rounded-xl -mt-4 py-3"
          direction="horizontal"
          items={[
            {
              key: "home",
              href: "#home",
              title: "Home",
              className: "text-xl mx-4",
            },
            {
              key: "categories",
              href: "#categories",
              title: "Categories",
              className: "text-xl mx-4",
            },
            {
              key: "products",
              href: "#products",
              title: "Products",
              className: "text-xl mx-4",
            },
            {
              key: "contact",
              href: "#contact",
              title: "Contact Us",
              className: "text-xl mx-4",
            },
          ]}
        />
      </div>
      <Hero />
      <div
        id="categories"
        style={{
          height: "100vh",
          textAlign: "center",
          background: "#F4EAD5",
        }}
      />
      <div
        id="products"
        style={{
          height: "100vh",
          textAlign: "center",
          background: "#DAE2B6",
        }}
      />
      <div
        id="contact"
        style={{
          height: "100vh",
          textAlign: "center",
          background: "#CCD6A6",
        }}
      />
    </div>
  );
};

export default NavBar;
