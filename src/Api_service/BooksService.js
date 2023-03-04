import http from '../request';

const getBookApi = () => http.get();
const postBookApi = (book) => http.post('', book);
const removeBookApi = (id) => http.delete(`/${id}`);

const BookApi = {
  getBookApi,
  postBookApi,
  removeBookApi,
};

export default BookApi;