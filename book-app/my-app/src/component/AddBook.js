const AddBook = () => (
    <div className="form-container">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
  
  export default AddBook;