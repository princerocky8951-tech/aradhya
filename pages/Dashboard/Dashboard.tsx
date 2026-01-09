
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import UserPanel from './UserPanel';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // If not logged in, redirect to login
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-8">
      <UserPanel />
    </div>
  );
};

export default Dashboard;
