import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateState } from '../redux/accountsSlice';
import { mockAccounts } from '../api/Api';
import Dashboard from '../components/Dashboard'; // or correct path


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch mock account data to Redux
    dispatch(updateState({ key: 'accounts', value: mockAccounts }));
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ color: "red" }}>My Bank Accounts</h1>
      <Dashboard />
    </div>
  );
};

export default Home;
