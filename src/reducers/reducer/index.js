import changeLogin from "./changeLogin";
const init = {
  isChangeLogin: true,
  isShowToTop: false,
  isShowLogin: false,
  isShowPopover: true
};
const todoApp = (store = init, action) => {
  switch (action.type) {
    case "isChangeLogin":
      return {
        ...store,
        isChangeLogin: action.isChangeLogin
      };
    case "isShowToTop":
      return {
        ...store,
        isShowToTop: action.isShowToTop
      };
    case "isShowLogin":
      return {
        ...store,
        isShowLogin: action.isShowLogin
      };
    case "isShowPopover":
      return {
        ...store,
        isShowPopover: action.isShowPopover
      };
    case "login":
      return {
        ...store,
        cookie: action.cookie
      };
    case "post_article_data":
      return {
        ...store,
        post_article_data: action.post_article_data
      };
    case "mangement":
      return {
        ...store,
        mangement_post: action.mangement_post
      };
    default:
      return {
        ...store
      };
  }
};
export default todoApp;
