import AddBook from "../component/AddBook";
import Book from "../component/Book";


const Home = () => {
    const books = [
      {
        id: 0,
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
      },
      {
        id: 1,
        title: 'Dune',
        author: 'Frank Herbet',
      },
    ];
  
    return (
      <>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <AddBook />
      </>
    );
  };

export default Home;