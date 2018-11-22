import { global } from "../actionType";

const changeLogin = (state, action) => {
  if (action.type === "isChangeLogin") {
    return {
      isChangeLogin: action.isChangeLogin
    };
  } else {
    return state;
  }
};
export default changeLogin;
