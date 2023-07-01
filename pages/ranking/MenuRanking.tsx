import React, { useState } from "react";
import { Menu, Divider } from "antd";
import TotalRanking from "./Total";
import MonthlyRanking from "./Month";

const MenuRanking = () => {
  const [isTotal, setIsTotal] = useState(true);
  const onTotal = () => {
    setIsTotal(true);
  };
  const onMonth = () => {
    setIsTotal(false);
  };
  return (
    <>
      <Menu
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu.Item key="total" onClick={onTotal}>
          <div
            style={{
              fontSize: "20px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            Total
          </div>
        </Menu.Item>
        <Divider type="vertical" />
        <Menu.Item key="month" onClick={onMonth}>
          <div
            style={{
              fontSize: "20px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            Monthly
          </div>
        </Menu.Item>
      </Menu>
      {isTotal ? <TotalRanking /> : <MonthlyRanking />}
    </>
  );
};

export default MenuRanking;
