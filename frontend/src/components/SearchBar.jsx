import React from "react";
import { AutoComplete, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });
  const options = [
    {
      label: "Libraries",
      options: [
        renderItem("AntDesign", 10000),
        renderItem("AntDesign UI", 10600),
      ],
    },
    {
      label: "Solutions",
      options: [
        renderItem("AntDesign UI FAQ", 60100),
        renderItem("AntDesign FAQ", 30010),
      ],
    },
    {
      label: "Articles",
      options: [renderItem("AntDesign design language", 100000)],
    },
  ];
  return (
    <>
      <AutoComplete
        popupClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={300}
        className="w-[460px]"
        options={options}
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
    </>
  );
};

export default SearchBar;
