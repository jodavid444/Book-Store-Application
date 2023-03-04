import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({});

  const dispatch = useDispatch();

  const inputValue = (element) => {
    setBook({
      ...book,
      id: uuidv4(),
      [element.target.name]: element.target.value,
    });
  };

  return (
    <div className="form-container">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <form
        action="/action_page.php"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook(book));
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Book Title" onChange={(e) => inputValue(e)} required />
        <input type="text" name="author" placeholder="Author" onChange={(e) => inputValue(e)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
