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
			<div className="main-content">
				<div className="book-info">
					<h1>{selectedBook.volumeInfo.title}</h1>
					<img
						src={selectedBook.volumeInfo.imageLinks.thumbnail}
						alt="book cover"
						className="book-info__img"
					/>
					<p>{selectedBook.volumeInfo.description}</p>
				</div>
				<button onClick={clickHandler}>Add</button>
			</div>
		</>
	);
}

export default BookInfo;
