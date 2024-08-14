import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();
	const goToServices = () => {
		navigate("/services");
	};
	return (
		<>
			<h1>Home Page</h1>
			<p>Welcome to our website!</p>
			<nav>
				<Link to="/about">About Us</Link> |{" "}
				<Link to="/contact">Contact Us</Link>
			</nav>
			<button onClick={goToServices}>Go to Services</button>
		</>
	);
};

export default HomePage;
