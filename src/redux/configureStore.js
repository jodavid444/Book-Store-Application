import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import thunk from 'redux-thunk';
import categoriesReduce from './categories/categories';

const rootReduce = {
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesReduce,
  },
};

const store = configureStore(rootReduce, applyMiddleware(thunk));

export default store;