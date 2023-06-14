import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const DashboardContent = ({ colorBgContainer }) => {
  return (
    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
      <Title>Dashboard</Title>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <Card style={{ flex: "1", height: "150px", background: "grey" }}>Offer Management</Card>
        <Card style={{ flex: "1", height: "150px", background: "grey" }}>Service Management</Card>
        <Card style={{ flex: "1", height: "150px", background: "grey" }}>Banner Management</Card>
        <Card style={{ flex: "1", height: "150px", background: "grey" }}>Role Assign</Card>
        <Card style={{ flex: "1", height: "150px", background: "grey" }}>Role Assign</Card>
        <Card style={{ flex: "1", height: "150px", background: "grey" }}>Role Assign</Card>
      </div>
    </div>
  );
};

export default DashboardContent;
