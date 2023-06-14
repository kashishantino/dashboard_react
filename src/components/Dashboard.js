import React, { useState } from 'react';
import { Layout, Avatar, Dropdown } from 'antd';
import { BellOutlined, UserOutlined, LogoutOutlined,AppstoreOutlined } from '@ant-design/icons';
import {Breadcrumb, theme ,Menu} from 'antd';
import Logo from './Logo';
import ProfileMenu from './ProfileMenu';
import DashboardContent from './DashboardContent';


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

function Dashboard() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsProfileMenuOpen(false);
  };

  const profileMenu = <ProfileMenu handleMenuItemClick={handleMenuItemClick} />;

  return (
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
              <li>
                <UserOutlined /> Profile Settings
              </li>
              <li>Reports</li>
              <li>Order Review</li>
              <li>Notification</li>
              <li>
                <LogoutOutlined /> Logout
              </li>
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
            <DashboardContent colorBgContainer={colorBgContainer} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
