import { Link, Outlet } from "react-router-dom";
const AboutPage = () => {
	return (
		<>
			<h1>About Us</h1>
			<p>This is the about page of our website.</p>
			<nav>
				<Link to={"team"}>Our Team</Link>
			</nav>
			<Outlet />
		</>
	);
};

export default AboutPage;
