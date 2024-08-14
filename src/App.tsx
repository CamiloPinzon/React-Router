import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import TeamPage from "./pages/team";
import TeamMemberPage from "./pages/teamMember";

import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />}>
					<Route path="team" element={<TeamPage />} />
					<Route path="team/:memberId" element={<TeamMemberPage />} />
				</Route>
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</>
	);
}

export default App;
