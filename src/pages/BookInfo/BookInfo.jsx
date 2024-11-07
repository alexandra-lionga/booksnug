import { useNavigate, useParams } from "react-router-dom";
import "./BookInfo.scss";

function BookInfo({ bookList, wishList, setWishList }) {
	let Navigate = useNavigate();
  let { bookId } = useParams();

  let selectedBook = bookList.find((book) => {
    return book.id === bookId;

  });


  function clickHandler(event) {
    setWishList([...wishList, selectedBook]);
	Navigate("/");
  }

  return (
    <>
      <div className="book-info">
        <h1>{selectedBook.volumeInfo.title}</h1>
		<div className="content">
		<img
          src={selectedBook.volumeInfo.imageLinks.thumbnail}
          alt="book cover"
          className="book-info__img"
        />
		<div className="book-info__description"> <p > Description: {selectedBook.volumeInfo.description}</p></div>
		</div>
        
      </div>
      <button onClick={clickHandler} className="book-info_button">Add</button>
    </>
  );
}

export default BookInfo;
