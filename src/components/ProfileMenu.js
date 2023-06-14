import React from 'react';
import { UserOutlined, FileSearchOutlined, ShoppingOutlined, BellOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {  Menu } from 'antd';
const ProfileMenu = ({ handleMenuItemClick }) => {
  return (
    <Menu>
      <Menu.Item>
        <UserOutlined />
        <Link to="/signup" onClick={handleMenuItemClick}>
          Sign up/Log
        </Link>
      </Menu.Item>

      <Menu.Item>
        <UserOutlined />
        <Link to="/profilesetting" onClick={handleMenuItemClick}>
          Profile Settings
        </Link>
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
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default ProfileMenu;
