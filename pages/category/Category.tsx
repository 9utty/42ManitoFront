import React from "react";
import App from "../_app";
import AppLayout from "../global/components/AppLayout";
import Link from "next/link";
import { Menu, Row, Col, Divider } from "antd";
import MenuCategory from "./components/MenuCategory";

export default function Category() {
  return (
    <AppLayout>
      <MenuCategory />
    </AppLayout>
  );
}
