import React from "react";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  // Get the selected account from Redux store
  const account = useSelector((state) => state.accounts.selectedAccount);

  // If no account is selected, show a message
  if (!account) {
    return <p>No account selected.</p>;
  }

  return (
    <div className="account-details">
      <h2>{account.name}</h2>
      <p>
        <strong>Balance:</strong> {account.balance} {account.currency}
      </p>
      <p>
        <strong>Account Number:</strong> {account.accountNumber}
      </p>
      <p>
        <strong>Account Name:</strong> {account.name}
      </p>
      {/* Add any other account details you'd like to display */}
    </div>
  );
};

export default AccountDetails;
