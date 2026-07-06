import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const data = error?.response?.data;

    const message =
      data?.message ||
      (typeof data === "string" ? data : null) ||
      Object.values(data?.errors || {})
        .flat()
        ?.at(-1);

    return Promise.reject(message);
  },
);
export default api;
