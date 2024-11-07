import { useState } from "react";
import "./Form.scss";

function Form() {
	const [checkedItems, setCheckedItems] = useState([]);

	function handleOnChange(event) {
		if (event.target.checked) {
			setCheckedItems([...checkedItems, event.target.value]);
		} else {
			const newArr = checkedItems.filter((item) => item !== event.target.value);
			setCheckedItems(newArr);
		}
	}
	function handleSubmit(event) {
		event.preventDefault();
		console.log(checkedItems);
	}

	return (
		<form onSubmit={handleSubmit}>
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
			<button>Get cozy</button>
		</form>
	);
}

export default Form;
