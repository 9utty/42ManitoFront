import React from "react";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import IconButton from "@mui/material/IconButton";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const ProfileUpdate = () => {
  const screens = useBreakpoint();

  const size = screens.md ? "80px" : "50px";
  const iconSize = screens.md ? "60px" : "40px";

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "rgba(226, 225, 225, 1)",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <IconButton
        color="primary"
        aria-lable="Profle Update"
        style={{ width: size, height: size }}
      >
        <ManageAccountsTwoToneIcon
          style={{ color: "black", width: iconSize, height: iconSize }}
        />
      </IconButton>
    </div>
  );
};

export default ProfileUpdate;
