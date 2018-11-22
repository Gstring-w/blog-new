import { getData } from "../axios/index";

const getData1 = () => {
  return dispatch => {
    dispatch({ type: "mangement" });
    return getData("/management/post").then(response => {
      dispatch({ type: "mangement", mangement_post: response.data });
    });
  };
};
export default getData1;
