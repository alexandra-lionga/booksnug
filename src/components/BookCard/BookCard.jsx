import "./BookCard.scss";

function BookCard({ book }) {
	return (
		<article>
			<img src={book.volumeInfo.imageLinks.thumbnail} />
			<h2>
				{book.volumeInfo.title} by {book.volumeInfo.authors}
			</h2>
			<p>Genre: {book.volumeInfo.categories}</p>
			<p>Pages: {book.volumeInfo.pageCount}</p>
		</article>
	);
}

export default BookCard;
