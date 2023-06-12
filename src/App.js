import React, { useState } from 'react';
import './App.css';
import Signup from './Signup.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  BellOutlined,
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
 
  FileSearchOutlined,
  ShoppingOutlined,
  
} from '@ant-design/icons';
import { Button, Row, Col, Card, Modal, Typography, Dropdown, Avatar } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from './logo.png';

let { Title } = Typography;
const { Header, Sider, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('Offer Management', '2', <AppstoreOutlined />),
  getItem('Service Management', 'sub1', <AppstoreOutlined />, [
    getItem('Lab Tests', '3'),
    getItem('Diagnostics', '4'),
    getItem('Profile and Packages', '5'),
  ]),
  getItem('Banner Management', '6', <AppstoreOutlined />),
  getItem('Role Assign', '7', <AppstoreOutlined />),
  getItem('Reports', '8', <AppstoreOutlined />)
];

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleModalClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const Logo = () => {
    return (
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '400px',
          padding: '8px',
          marginTop: '25px',
          height: '350px',
          marginRight: '14px',
        }}
      />
    );
  };

 
  const handleMenuItemClick = () => {
    setIsProfileMenuOpen(false);
  };

  


  const profileMenu = (
    <Menu>
       <Menu.Item>
        <UserOutlined />
        <Link to="/signup" onClick={handleMenuItemClick}>
          Sign up/Log
        </Link>
      </Menu.Item>
      
      <Menu.Item>
        <UserOutlined />
        Profile Settings
      </Menu.Item>

      <Menu.Item>
        <FileSearchOutlined />
        Reports
      </Menu.Item>

      <Menu.Item>
        <ShoppingOutlined />
        Order Review
      </Menu.Item>

      <Menu.Item>
        <BellOutlined />
        Notification
      </Menu.Item>

      <Menu.Item>
        <LogoutOutlined />
        logout
      </Menu.Item>
      
    </Menu>
  );

  return (
    <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: colorBgContainer,
          padding: '0 16px',
        }}
      >
        <Logo />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Dropdown overlay={profileMenu} placement="bottomRight" trigger={['click']}>
            <Avatar
              icon={<UserOutlined />}
              size={35}
              style={{ marginRight: '16px', cursor: 'pointer' }}
            />
          </Dropdown>
          <Avatar icon={<BellOutlined />} size={35} style={{ marginRight: '16px' }} />
        </div>
        {isProfileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '60px',
              right: '20px',
              background: '#fff',
              padding: '10px',
            }}
          >
          

            <ul>
              <li icon={<BellOutlined/>}>Profile Settings</li>
              <li>Reports</li>
              <li>Order Review</li>
              <li>Notification</li>
              <li icon={<LogoutOutlined/>}>Logout</li>
            </ul>
          </div>
        )}
      </Header>
      
      <Layout>
        <Sider collapsible>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
  <Title>Dashboard</Title>
  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
    <Card style={{ flex: "1", height: "250px", background: "grey" }}>Offer Management</Card>
    <Card style={{ flex: "1", height: "250px",background: "grey" }}>Service Management</Card>
    <Card style={{ flex: "1", height: "250px",background: "grey" }}>Banner Management</Card>
    <Card style={{ flex: "1", height: "250px",background: "grey" }}>Role Assign</Card>
    
  </div>
</div>
    
    
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
    <Routes>
      <Route exact path='/' />
      <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
