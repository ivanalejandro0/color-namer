import React from 'react';

import Layout from "antd/lib/layout";
import "antd/lib/layout/style/css";

import ColorNamer from "./ColorNamer";
import GithubLink from "./GithubLink";

const { Header, Content, Footer } = Layout;

const logoStyle = {
  color: "white",
  fontSize: "18px",
};

const Site = () => (
  <Layout style={{height:"100vh"}}>
    <GithubLink />
    <Header>
      <div style={logoStyle}>Look for similar colors</div>
    </Header>

    <Content style={{ padding: "0 50px" }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        <ColorNamer />
      </div>
    </Content>

    <Footer style={{ textAlign: "center" }}>
      Similar colors - by <a href="https://github.com/ivanalejandro0">Ivan Alejandro</a>
    </Footer>
  </Layout>
);

export default Site;
