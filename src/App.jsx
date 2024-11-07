import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BookInfo from "./pages/BookInfo/BookInfo";
import WishList from "./pages/WishList/WishList";

function App() {

	const [bookList, setBookList] = useState(null);
	const [wishList, setWishList] = useState([]);

	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage bookList={bookList} setBookList={setBookList}/>} />
					<Route path="book/:bookId" element={<BookInfo  bookList={bookList} setWishList={setWishList} wishList={wishList}/>} />
					<Route path="wishlist" element={<WishList />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
