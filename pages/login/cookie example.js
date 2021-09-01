import { useToast } from "@chakra-ui/react";
import React, { useState, createContext } from "react";
import axios from "../axios";
import Cookies from "js-cookie";
export const UserContext = createContext();
const initialValues = {
  token: null,
  username: null,
  profileId: null,
  refreshToken: null,
  contractId: null,
};
export const UserProvider = (props) => {
  const toast = useToast();
  const [state, setState] = useState(initialValues);
  const loginUserSuccess = (
    token,
    username,
    profileId,
    refreshToken,
    expireDate
  ) => {
    Cookies.set("token", token);
    Cookies.set("username", username);
    Cookies.set("profileId", profileId);
    Cookies.set("refreshToken", refreshToken);
    Cookies.set("isLog", true);
    Cookies.set("expireDate", expireDate);
    setState({
      ...state,
      error: null,
      errorCode: null,
      token,
      username,
      profileId,
      refreshToken,
    });
    window.location.reload();
  };
  const logOut = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("profileId");
    Cookies.remove("expireDate");
    setState(initialValues);
    const TheRefreshToken = JSON.stringify(Cookies.get("refreshToken"));

    axios
      .post("/user/logout", { TheRefreshToken })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    Cookies.remove("refreshToken");
  };
  const LoginUser = (loginData) => {
    axios
      .post("/user/login", { loginData })
      .then((result) => {
        const token = result.data.accessToken;
        const username = result.data.username;
        const profileId = result.data.profileId;
        const refreshToken = result.data.refreshToken;
        const expireDate = new Date(result.data.time).getTime() + 86400000;

        loginUserSuccess(token, username, profileId, refreshToken, expireDate);
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.message,
          errorCode: err.response,
          token: null,
          username: null,
        });
        console.log(err.response);
        // if(err.data)
        toast({
          position: "top",
          title: "Алдаа",
          description: "Таны оруулсан нэр эсвэл нууц үг буруу байна",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      });
  };
  return (
    <UserContext.Provider
      value={{ LoginUser, state, loginUserSuccess, logOut }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
