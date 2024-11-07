import "./WishList.scss";

function WishList({ wishList }) {
	return (
		<>
			<h1 className="wish-name">Wishlist</h1>
			<div className="wishList">
				{wishList.map((wish) => {
					return (
						<article key={wish.id}>
							<img src={wish.volumeInfo.imageLinks.thumbnail} />
						</article>
					);
				})}
			</div>
		</>
	);
}

export default WishList;
