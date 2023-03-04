import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookApi from '../../service/BooksService';

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

export const loadBooks = createAsyncThunk(LOAD_BOOKS, async () => {
  try {
    const res = await BookApi.getBookApi();
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const addBook = createAsyncThunk(ADD_BOOK, async (payload, thunkAPI) => {
  try {
    await BookApi.postBookApi(payload);
    thunkAPI.dispatch(loadBooks());
  } catch (error) {
    throw new Error(error);
  }
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (payload, thunkAPI) => {
  try {
    await BookApi.removeBookApi(payload);
    thunkAPI.dispatch(loadBooks());
  } catch (error) {
    throw new Error(error);
  }
});

const booksSlice = createSlice({
  name: 'book-store',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(loadBooks.fulfilled, (state, action) => action.payload);
  },
});

export default booksSlice;