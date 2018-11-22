import axios from "axios";
import { baseUrl } from "../configSeverUrl";
export const postData = (data, url) => {
  let path = baseUrl + url;
  return new Promise((res, rej) => {
    axios
      .post(path, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        res(response);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
export const getData = url => {
  let path = baseUrl + url;
  return new Promise((res, rej) => {
    axios
      .get(path)
      .then(response => {
        res(response);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export const getManagementData = totol => {
  const basePath = "http://localhost:4000/management/post?totol=" + totol;
  return axios.get(basePath).then(response => {
    return response;
  });
};

export const getHomeData = totol => {
  const basePath = "http://localhost:4000/home?totol=" + totol;
  return axios.get(basePath).then(response => {
    return response;
  });
};
export const getArticleComment = id => {
  const basePath = "http://localhost:4000/home/comment?id=" + id;
  return axios.get(basePath).then(response => {
    return response;
  });
};
