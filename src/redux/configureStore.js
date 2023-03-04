import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksSlice from './books/books';
import categoriesReduce from './categories/categories';

const rootReduce = {
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesReduce,
  },
};

const store = configureStore(rootReduce, applyMiddleware(thunk));

export default store;
