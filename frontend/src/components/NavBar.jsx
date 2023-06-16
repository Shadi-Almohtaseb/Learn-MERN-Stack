import React from "react";
import { Link } from "react-router-dom";
import { Anchor } from "antd";
import Hero from "./Hero";

const NavBar = () => {
  return (
    <div className="border-[1px] border-b-black">
      <div className="flex flex-col list-none items-center justify-center ">
        <div className="flex items-center justify-center gap-8 ">
          <li className="text-xl font-semibold py-[5px] px-5 rounded-full border-[1px] border-sky-500 mt-3 hover:bg-sky-500 duration-200 hover:text-white cursor-pointer ">
            <Link to="products">Products</Link>
          </li>
          <li className="text-xl font-semibold py-[5px] px-5 rounded-full border-[1px] border-sky-500 mt-3 hover:bg-sky-500 duration-200 hover:text-white cursor-pointer ">
            <Link to="beast-selling">Beast Selling</Link>
          </li>
        </div>
        <Anchor
          className="pt-6 px-8"
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
