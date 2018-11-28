// import {windowScroll} from '../actionType'
export const showToTop = flag => {
  return {
    type: "isShowToTop",
    isShowToTop: flag
  };
};
export const showLogin = flag => {
  return {
    type: "isShowLogin",
    isShowLogin: flag
  };
};
export const showPopover = flag => {
  return {
    type: "isShowPopover",
    isShowPopover: flag
  };
};

export const SetCookie = flag => {
  return {
    type: "login",
    cookie: flag
  };
};
