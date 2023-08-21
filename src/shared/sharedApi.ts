import axios from "axios";
import baseUrls from "./baseUrls";

export const getUsers = async () => {
  const response = await axios.get(baseUrls.getInfiniteScrollItems);
  const { data } = response;
  return data;
};
