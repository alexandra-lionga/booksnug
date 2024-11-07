import "./BookList.scss";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";

function BookList({ bookList }) {
	if (!bookList) {
		return <div>Loading...</div>;
	} else {
		return (
			<ul>
				{bookList.map((book) => (
					<Link to={`book/${book.id}`} key={book.id} className="link">
						<li>
							<BookCard book={book} />
						</li>
					</Link>
				))}
			</ul>
		);
	}
}

export default BookList;
