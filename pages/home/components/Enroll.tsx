import React from "react";
import { Col, Row, Card, Grid, Divider } from "antd";

const { useBreakpoint } = Grid;

const HomeEnroll = () => {
  const screens = useBreakpoint();

  const cardWidth = screens.md ? 400 : 200;

  return (
    <>
      <Divider />
      <div
        style={{
          paddingBottom: "30px",
          display: "flex",
          flexDirection: screens.md ? "row" : "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#000",
            marginRight: screens.md ? "24px" : "0",
            marginBottom: screens.md ? "0" : "24px",
          }}
        >
          <div>
            {" "}
            <div style={{ marginBottom: "8px" }}>멘토</div>
            <div style={{ marginBottom: "8px" }}>멘토</div>
            <div style={{ marginBottom: "8px" }}>멘토</div>
            <div style={{ marginBottom: "8px" }}>멘토</div>
          </div>
        </div>
        {screens.md && <Divider type="vertical" />}

        <div style={{ color: "#000", marginBottom: screens.md ? "0" : "24px" }}>
          <div style={{ justifyContent: "flex-start" }}>
            <div style={{ marginBottom: "8px" }}>멘티</div>
            <div style={{ marginBottom: "8px" }}>멘티</div>
            <div style={{ marginBottom: "8px" }}>멘티</div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default HomeEnroll;
