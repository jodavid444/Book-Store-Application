import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-container d-flex">
      <div className="book-info">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-name project-main-txt-color">{title}</h2>
        <p className="book-author blue-txt">{author}</p>
        <div className="book-buttons-container d-flex">
          <button type="button" className="book-button blue-txt">Comments</button>
          <button type="button" className="book-button blue-txt" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="book-button blue-txt">Edit</button>
        </div>
      </div>
      <div className="progress-container d-flex">
        <div className="circular-progress-bar d-flex">
          <div className="circular-progress" />
        </div>
        <div className="completed dark-gret-txt">
          <p className="complete-precent project-main-txt-color">75%</p>
          <p className="completed dark-gret-txt">Completed</p>
        </div>
        <div className="progress-devider" />
        <div className="chapter-container d-flex">
          <div className="current-chapter dark-gret-txt">Current Chapter</div>
          <div className="chapter project-main-txt-color">Chapter 14</div>
          <button type="button" className="update-progress-button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
