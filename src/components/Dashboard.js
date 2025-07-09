import React from 'react';
import { useSelector } from 'react-redux';
import AccountCard from './AccountCard';

const Dashboard = () => {
  const accounts = useSelector((state) => state.accounts.accounts);

  return (
    <div className="dashboard">
      {accounts.map((account) => (
        <AccountCard key={account.id} account={account} />
      ))}
      
    </div>
  );
};

export default Dashboard;
