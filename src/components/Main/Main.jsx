import Form from "../Form/Form";
import "./Main.scss";

function Main({ setBookList }) {
	return (
		<main>
			<h1>What is your winter escape?</h1>
			<Form setBookList={setBookList} />
		</main>
	);
}

export default Main;
