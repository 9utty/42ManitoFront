import React, { useState } from "react";
import Link from "next/link";
import { Menu, Divider, Row, Col } from "antd";
import Category from "../Category";
import StudyCategory from "./StudyCategory";
import HobbyCategory from "./HobbyCategory";

const MenuCategory = () => {
  const [isStudy, setIsStudy] = useState(true);
  const onStudy = () => {
    setIsStudy(true);
  };
  const onHobby = () => {
    setIsStudy(false);
  };
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="study" onClick={onStudy} style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "22px",

              color: "#555",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Coding
          </div>
        </Menu.Item>
        <Menu.Item key="hobby" onClick={onHobby} style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "22px",

              color: "#555",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Hobby
          </div>
        </Menu.Item>
      </Menu>
      {isStudy ? <StudyCategory /> : <HobbyCategory />}
    </>
  );
};

export default MenuCategory;
