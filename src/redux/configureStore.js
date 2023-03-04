import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/books';
import categoriesReduce from './categories/categories';

const store = configureStore({
  reducer: {
    books: BookReducer,
    categories: categoriesReduce,
  },
});

export default store;
