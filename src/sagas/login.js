import { postData } from "../axios/index";
export const LoginUser = data => {
  return dispatch => {
    dispatch({ type: "login" });
    return postData(data, "/login").then(response => {
      console.log(data);
      dispatch({ type: "login", cookie: response });
    });
  };
};
export const RegisterUser = data => {
  return dispatch => {
    dispatch({ type: "register" });
    return postData(data, "/register").then(response => {
      console.log(data);
      dispatch({ type: "register", register: response });
    });
  };
};
export const PostArticle = data => {
  console.log(11122);
  return dispatch => {
    dispatch({ type: "PostArticle" });
    return postData(data, "/post").then(response => {
      console.log(data);
      dispatch({ type: "PostArticle", post: response });
    });
  };
};
