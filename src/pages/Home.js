import { useSelector } from 'react-redux';
import AddBook from '../component/AddBook';
import Book from '../component/Book';

const Home = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      {books.map((book) => (
        <div className='container' key={book.id}>
          <Book title={book.title} author={book.author} id={book.id} />

        </div>
      ))}
      <AddBook />
    </>
  );
};

export default Home;
