import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  return (
    <div className="books-container">
      <div className="book-info">
        <h4 className="book-category">Economy</h4>
        <h2 className="book-name">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="book-buttons-container">
          <button type="button" className="book-button">Comments</button>
          <button type="button" className="book-button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="book-button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-bar" />
        <div className="completed">
          <p>0%</p>
          <p>Completed</p>
        </div>
        <div className="current-chapter">Chapter 0</div>
        <button type="button" className="update-progress-button">Update Progress</button>
      </div>
    </div>
  );
};

export default Book;