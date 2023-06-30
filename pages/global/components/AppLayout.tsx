import React from "react";
import { Layout, theme, Row, Col, Input } from "antd";
import HeaderNav from "./HeaderNav";

const { Header, Content, Footer } = Layout;

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout className="layout" style={{ backgroundColor: "white" }}>
        <HeaderNav />
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div
            className="site-layout-content"
            style={{ background: colorBgContainer }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", marginTop: "5px" }}>
          42Manito ©2023
        </Footer>
      </Layout>
    </div>
  );
};

export default AppLayout;
