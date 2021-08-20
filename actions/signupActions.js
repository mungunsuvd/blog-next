export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());
  };
};

export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};
export const signupUserSuccess = () => {
  return {
    type: "SIGNUP_USER_SUCCESS",
  };
};
export const signupUserError = () => {
  return {
    type: "SIGNUP_USER_ERROR",
  };
};
