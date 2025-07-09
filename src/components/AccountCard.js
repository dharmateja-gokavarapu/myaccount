import React from 'react';
import { useDispatch } from 'react-redux';
import { selectState } from '../redux/accountsSlice'; 
import { useNavigate } from 'react-router-dom';

const AccountCard = ({ account }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
       // ✅ Use the generic action to set selectedAccount
       dispatch(selectState({ key: 'selectedAccount', value: account }));
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
