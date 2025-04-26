import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bff82b3abb844c438672ad32789807b7",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}