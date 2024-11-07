import Main from "../../components/Main/Main";
import BookList from "../../components/BookList/BookList";
import { useState } from "react";
import "./HomePage.scss";

function HomePage() {
	const [bookList, setBookList] = useState(null);
	return (
		<>
			<Main setBookList={setBookList} />
			<BookList bookList={bookList} />
		</>
	);
}

export default HomePage;
