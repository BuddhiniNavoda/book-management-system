import axios from "axios";

const API_URL = "http://localhost:8080/books";

let tokenGetter = async () => null;

export const setTokenGetter = (getter) => {
  tokenGetter = getter;
};

const api = axios.create();

api.interceptors.request.use(async (config) => {
  const token = await tokenGetter();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getBooks = () => api.get(API_URL);

export const getBookById = (id) => api.get(`${API_URL}?id=${id}`);

export const createBook = (book) => api.post(API_URL, book);

export const updateBook = (id, book) => api.put(`${API_URL}?id=${id}`, book);

export const deleteBook = (id) => api.delete(`${API_URL}?id=${id}`);
