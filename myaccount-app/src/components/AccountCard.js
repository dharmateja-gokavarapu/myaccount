import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAccount } from '../redux/accountsSlice';
import { useNavigate } from 'react-router-dom';

const AccountCard = ({ account }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    // Dispatch action to select the account
    dispatch(selectAccount(account));
    // Navigate to Account Details Page
    navigate(`/account/${account.id}`);
  };

  return (
    <div className="account-card" onClick={handleClick}>
      <h3>{account.name}</h3>
      <p>Balance: {account.balance} {account.currency}</p>
    </div>
  );
};

export default AccountCard;
