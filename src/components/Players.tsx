import { useSearchParams } from "react-router";

export default function Players() {
  const [searchParams] = useSearchParams();
  const teamId = searchParams.get("teamId");

  return <div className="container">Players for team {teamId}</div>;
}
