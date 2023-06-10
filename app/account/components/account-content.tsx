"use client";

import Button from "@/components/button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { user, isLoading, subscription } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [router, isLoading, user]);
  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url } = await postData({ url: "/api/create-portal-link" });
      window.location.assign(url);
    } catch (error: any) {
      if (error) {
        toast.error((error as Error).message);
      }
    }
    setLoading(false);
  };
  return (
    <div className="mb-7 px-6">
      {!subscription ? (
        <div className="flex flex-col gap-y-4">
          <p>No active plans!</p>
          <Button onClick={subscribeModal.onOpen} className="w-[300px]">
            Subscribe
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the {subscription?.prices?.products?.name} plan
          </p>
          <Button
            disabled={isLoading || loading}
            className="w-[300px]"
            onClick={redirectToCustomerPortal}
          >
            Open Customer portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
