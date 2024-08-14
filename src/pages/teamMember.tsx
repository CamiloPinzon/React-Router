import { useParams } from "react-router-dom";

const TeamMemberPage = () => {
	const { memberId } = useParams<{ memberId: string }>();
	return (
		<>
			<h2>Team Member: {memberId}</h2>
			<p>Details about team member {memberId}.</p>
		</>
	);
};

export default TeamMemberPage;
