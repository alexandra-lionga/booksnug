import "./BookCard.scss";

function BookCard({ book }) {
	return (
		<article>
			<img src={book.volumeInfo.imageLinks.thumbnail} />
			<p className="pages">Pages: {book.volumeInfo.pageCount}</p>
		</article>
	);
}

export default BookCard;
