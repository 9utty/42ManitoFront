import React from "react";
import AppLayout from "../global/AppLayout";
import { useSelector } from "react-redux";
import Profile from "../Profile";
import { RootState } from "@/redux/store";

const Login = () => {
  const isLogin = useSelector(
    (state: RootState) => state.rootReducers.global.isLogin
  );

  return (
    <>
      {isLogin ? (
        <Profile isMy={true} />
      ) : (
        <AppLayout>
          <div style={{ color: "black" }}>로그인입니다.</div>
        </AppLayout>
      )}
    </>
  );
};

export default Login;
