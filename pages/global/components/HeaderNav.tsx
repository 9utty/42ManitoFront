import React, { useState } from "react";
import Link from "next/link";
import { Menu, Input, Drawer } from "antd";
import { FaRegUser } from "react-icons/fa";
import { HiHashtag, HiMenu } from "react-icons/hi";
import Router from "next/router";
import SearchInput from "./InputSearch";

const HeaderNav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleSearch = (value: string) => {
    Router.push(`/search/${value}`);
  };

  return (
    <div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Menu.Item
          style={{ flex: 1, verticalAlign: "middle" }}
          className="header-menu-item"
          disabled
        >
          <Link href="/home/Manito" passHref legacyBehavior>
            <a>
              <div style={{ fontSize: "25px", color: "#000" }}>42Manito</div>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/category/Category" passHref legacyBehavior>
            <a style={{ display: "inline-block", paddingTop: "13px" }}>
              <HiHashtag style={{ fontSize: "25px" }} />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/login/Login" passHref legacyBehavior>
            <a style={{ display: "inline-block", paddingTop: "13px" }}>
              <FaRegUser style={{ fontSize: "25px" }} />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item onClick={showDrawer}>
          <a style={{ display: "inline-block", paddingTop: "13px" }}>
            <HiMenu style={{ fontSize: "25px" }} />
          </a>
        </Menu.Item>
      </Menu>
      <Drawer
        title="메뉴"
        width={180}
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Menu>
          <Menu.Item>
            <Link href="/ranking/Ranking" passHref legacyBehavior>
              <a onClick={onClose}>랭킹</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/feedbackLog/FeedbackLog" passHref legacyBehavior>
              <a onClick={onClose}>후기</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
      <Menu theme="dark" mode="horizontal" multiple={true}>
        <Menu.Item style={{ flex: 2 }}>
          <SearchInput />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderNav;
