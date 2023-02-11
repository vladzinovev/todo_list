import axios from "axios";

const API_URL =
  "https://newsapi.org/v2/everything?q=tesla&" +
  "from=2023-01-11&" +
  "sortBy=publishedAt&" +
  "apiKey=871c399c168b49c883daae36ba6aaa50";

axios.defaults.baseURL = API_URL;

export const NewsService = {
  async getAll() {
    return axios.get("/news");
  },
};
