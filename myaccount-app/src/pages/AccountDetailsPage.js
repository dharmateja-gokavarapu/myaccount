import React from "react";
import PageWrapper from "../components/PageWrapper";
import AccountDetails from "../components/AccountDetails";

const AccountDetailsPage = () => {
  const beforePageLoad = () => {
    console.log("🔥 Before Page Load - AccountDetailsPage");
    // Add pre-render logic here (e.g., validate ID, load data)
  };

  const afterPageLoad = () => {
    console.log("✅ After Page Load - AccountDetailsPage");
    // Add logic for after page loads (e.g., tracking, animations)
  };

  return (
    <PageWrapper beforePageLoad={beforePageLoad} afterPageLoad={afterPageLoad}>
      <AccountDetails />
    </PageWrapper>
  );
};

export default AccountDetailsPage;
