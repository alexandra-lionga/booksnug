import { useState } from "react";
import "./Form.scss";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../utils.js";

function Form({ setBookList }) {
	const [checkedItems, setCheckedItems] = useState([]);

	function handleOnChange(event) {
		if (event.target.checked) {
			setCheckedItems([...checkedItems, event.target.value]);
		} else {
			const newArr = checkedItems.filter((item) => item !== event.target.value);
			setCheckedItems(newArr);
		}
	}

	const getBooks = async (keyword, genre) => {
		try {
			const response = await axios.get(
				`${API_BASE_URL}volumes?q=${keyword}+subject:${genre}&key=${API_KEY}&maxResults=10&printType=books`
			);
			setBookList(response.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	function handleSubmit(event) {
		event.preventDefault();
		//console.log(checkedItems);
		getBooks(checkedItems.join("+"), "winter");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-div">
				<label htmlFor="fantasy">
					<input
						type="checkbox"
						name="genre"
						id="fantasy"
						value="fantasy"
						onChange={handleOnChange}
					/>{" "}
					Fantasy{" "}
				</label>
				<label htmlFor="romance">
					{" "}
					<input
						type="checkbox"
						name="genre"
						id="romance"
						value="romance"
						onChange={handleOnChange}
					/>
					Romance
				</label>
				<label htmlFor="comedy">
					<input
						type="checkbox"
						name="genre"
						id="comedy"
						value="comedy"
						onChange={handleOnChange}
					/>{" "}
					Comedy
				</label>
				<label htmlFor="drama">
					<input
						type="checkbox"
						name="genre"
						id="drama"
						value="drama"
						onChange={handleOnChange}
					/>{" "}
					Drama
				</label>
				<label htmlFor="fiction">
					<input
						type="checkbox"
						name="genre"
						id="fiction"
						value="fiction"
						onChange={handleOnChange}
					/>{" "}
					Fiction
				</label>
				<label htmlFor="horror">
					<input
						type="checkbox"
						name="genre"
						id="horror"
						value="horror"
						onChange={handleOnChange}
					/>{" "}
					Horror
				</label>
				<label htmlFor="classics">
					<input
						type="checkbox"
						name="genre"
						id="classics"
						value="classics"
						onChange={handleOnChange}
					/>{" "}
					Classics
				</label>
				<label htmlFor="mystery">
					<input
						type="checkbox"
						name="genre"
						id="mystery"
						value="mystery"
						onChange={handleOnChange}
					/>{" "}
					Mystery
				</label>
				<label htmlFor="nonfiction">
					<input
						type="checkbox"
						name="genre"
						id="nonfiction"
						value="nonfiction"
						onChange={handleOnChange}
					/>
					Non-Fiction
				</label>
				<label htmlFor="graphic">
					<input
						type="checkbox"
						name="genre"
						id="graphic"
						value="graphic"
						onChange={handleOnChange}
					/>{" "}
					Graphic Novel
				</label>
			</div>
			<button>Get cozy</button>
		</form>
	);
}

export default Form;
