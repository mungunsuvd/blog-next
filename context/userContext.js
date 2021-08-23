import React, { useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

const initialState = {
  saving: false,
  logginIn: false,
  error: null,
  errorCode: null,
  token: null,
  email: null,
  expireDate: null,
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("expireDate");
    localStorage.removeItem("refreshToken");
    setState(initialState);
  };

  const login = (email, password) => {
    setState({ ...state, logginIn: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
        data
      )
      .then((result) => {
        // LocalStorage ruu hadgalna
        const token = result.data.idToken;
        const email = result.data.email;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;

        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("refreshToken", refreshToken);

        setState({
          ...state,
          logginIn: false,
          error: null,
          errorCode: null,
          token: null,
          userId: null,
          expireDate: null,
        });

        // dispatch(actions.autoLogoutAfterMillisec(expiresIn * 1000));
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
          expireDate: null,
        });
      });
  };

  const signup = (email, password) => {
    setState({ ...state, saving: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
        data
      )
      .then((result) => {
        // LocalStorage ruu hadgalna
        const token = result.data.idToken;
        const email = result.data.email;

        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        setState({
          ...state,
          saving: false,
          token,
          email,
          error: null,
          errorCode: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          saving: false,
          token: null,
          email: null,
          error: err.message,
          errorCode: err.code,
        });
      });
  };

  return (
    <UserContext.Provider value={{ state, signup, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
