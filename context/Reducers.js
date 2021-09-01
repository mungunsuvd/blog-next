// import { ACTIONS } from "./Actions";

// const reducers = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.AUTH:
//       return {
//         ...state,
//         auth: action.payload,
//       };
//     case ACTIONS.MENUS:
//       return {
//         ...state,
//         menus: action.payload,
//       };
//     case ACTIONS.PERMISSIONS:
//       return {
//         ...state,
//         permissions: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default reducers;
const initialState = {
  saving: false,
  logginIn: false,
  firebaseError: null,
  firebaseErrorCode: null,
  token: null,
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.data.idToken,
        userId: action.data.localId,
      };

    default:
      return state;
  }
};

export default reducer;
