'use client';

import React from 'react';
import withAdminAuth from '../../hoc/withAdminAuth';
import DashboardComponent from '../../components/Dashboard';

const Dashboard: React.FC = () => {
  return <DashboardComponent />;
};

export default withAdminAuth(Dashboard);
