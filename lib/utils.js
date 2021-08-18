import axios from "axios";
import {
  POSTS_API_URL,
  AUTHORS_API_URL,
  MEDIA_API_URL,
  CATEGORIES_API_URL,
  SEARCH_API_URL,
} from "./constants";

export const getAllPostsFromServer = async () => {
  //   get all posts from Server
  try {
    const { data } = await axios.get(POSTS_API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthor = async (id) => {
  try {
    const {
      data: { name },
    } = await axios.get(`${AUTHORS_API_URL}/${id}`);
    return name;
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedImage = async (id) => {
  try {
    const res = await axios.get(`${MEDIA_API_URL}/${id}`);
    return res.data.guid.rendered;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get(CATEGORIES_API_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByCategories = async (categoryId) => {
  try {
    const res = await axios.get(POSTS_API_URL + `?categories=${categoryId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const searchPost = async (term) => {
  try {
    const res = await axios.get(SEARCH_API_URL + `?search=${term}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
