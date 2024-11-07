import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
	return (
		<nav>
			<ul>
				<NavLink to="/" className="link">
					<li>Home</li>
				</NavLink>
				<NavLink to="wishlist" className="link">
					<li>Wishlist</li>
				</NavLink>
			</ul>
		</nav>
	);
}

export default Header;
