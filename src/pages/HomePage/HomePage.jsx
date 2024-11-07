import Main from "../../components/Main/Main";
import BookList from "../../components/BookList/BookList";
import "./HomePage.scss";

function HomePage({bookList, setBookList}) {
	
	return (
		<>
			<Main setBookList={setBookList} />
			<BookList bookList={bookList} />
		</>
	);
}

export default HomePage;
