import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link className="mx-2" to="/signup">
						<button className="btn btn-primary">Sign Up</button>
					</Link>
					<Link to="/Login">
						<button className="btn btn-primary">login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};