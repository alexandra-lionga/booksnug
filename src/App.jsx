import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BookInfo from "./pages/BookInfo/BookInfo";
import WishList from "./pages/WishList/WishList";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="book/:id" element={<BookInfo />} />
					<Route path="wishlist" element={<WishList />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
