import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const getCategories = async () => {
  return await api.get("/categories");
};

const getAllArticle = async () => {
  return await api.get("/articles");
};

const getArticleByCategorie = async () => {
    return await api.get("/article/id");
};  

const getArticleByCategorieId = async () => {
    return await api.get("/install");
};

export default {
  getCategories,
  getAllArticle,
  getArticleByCategorie,
  getArticleByCategorieId,
};
