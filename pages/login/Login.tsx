import React from "react";
import AppLayout from "../global/components/AppLayout";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducer";
import MyProfile from "../profiles/MyProfile";

const Login = () => {
  const isLogin = useSelector((state: RootState) => state.global.isLogin);

  return (
    <>
      {isLogin ? (
        <MyProfile isMy={true} />
      ) : (
        <AppLayout>
          <div style={{ color: "black" }}>로그인입니다.</div>
        </AppLayout>
      )}
    </>
  );
};

export default Login;
