import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({});

  const dispatch = useDispatch();

  const inputValue = (e) => {
    setBook({
      ...book,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <form
        className="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook(book));
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Book Title" className="add-book-input" onChange={(e) => inputValue(e)} required />
        <input type="text" name="author" placeholder="Author" className="add-book-input" onChange={(e) => inputValue(e)} required />
        <input type="text" name="category" placeholder="Category" className="add-book-input" onChange={(e) => inputValue(e)} required />
        <button className="submit-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
