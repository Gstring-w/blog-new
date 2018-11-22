const saveData = data => {
  return {
    type: "post_article_data",
    post_article_data: data
  };
};
export default saveData;
