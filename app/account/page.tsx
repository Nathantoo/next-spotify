import Header from "@/components/header";
import AccountContent from "./components/account-content";

const Account = () => {
  return (
    <div className="w-full h-full bg-neutral-900 rounded-lg">
      <Header className="from-bg-neutral-900">
        <div className="flex flex-col gap-y-6 mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;
