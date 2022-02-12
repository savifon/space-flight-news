import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3",
});

export const getArticles = async (sort, text, limit, start) => {
  return api.get("/articles", {
    params: {
      _sort: `publishedAt:${sort}`,
      title_contains: text,
      _limit: limit,
      _start: start,
    },
  });
};
