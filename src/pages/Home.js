import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../component/AddBook';
import Book from '../component/Book';
import { loadBooks } from '../redux/books/books';

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <>
      {Object.keys(books).map((id) => (
        <Book
          key={id}
          id={id}
          title={books[id][0].title}
          author={books[id][0].author}
          category={books[id][0].category}
        />
      ))}
      <AddBook />
    </>
  );
};

export default Home;
