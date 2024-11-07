import Main from "../../components/Main/Main";
import BookList from "../../components/BookList/BookList";
import "./HomePage.scss";

function HomePage({ bookList, setBookList }) {
	return (
		<div className="home">
			<Main setBookList={setBookList} />
			<BookList bookList={bookList} />
		</div>
	);
}

export default HomePage;
