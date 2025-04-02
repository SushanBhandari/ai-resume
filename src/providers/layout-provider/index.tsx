"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { message } from "antd";
import { getCurrentUserFromMongoDB } from "@/server-actions/user";
import usersGlobalStore, { IUsersStroe } from "@/store/user-store";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isProtected =
    !pathname.includes("/sign-in") && !pathname.includes("/sign-up");
  const { setCurrentUserData, currentUserData }: IUsersStroe =
    usersGlobalStore() as any;

  const getCurrentUser = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUserFromMongoDB();
      if (response.success) {
        setCurrentUserData(response.data);
      } else {
        message.error(response.message);
        setError(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (!isProtected) {
    return <div>{children}</div>;
  }
  React.useEffect(() => {
    if (isProtected) {
      getCurrentUser();
    }
  }, [pathname]);

  if (loading)
    return <div className="flex justify-center items-center h-full"></div>;
  if (error) return <div className="p-5">{error}</div>;

  return (
    <div>
      <div className=" header p-5 bg-primary flex justify-between items-center">
        <h1
          className=" text-xl font-bold text-white cursor-pointer"
          onClick={() => router.push("/")}
        >
          AI-based resume builder
        </h1>
        <div className="flex gap-5 items-center ">
          <h1
            className="text-sm text-white cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            {currentUserData?.name}
          </h1>
        </div>

        <UserButton />
      </div>
      <div className="p-5 ">{children}</div>
    </div>
  );
}

export default LayoutProvider;
