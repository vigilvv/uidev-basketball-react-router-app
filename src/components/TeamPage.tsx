import { useParams } from "react-router";

export default function TeamPage() {
  const { teamId } = useParams();

  return <div>Team page for {teamId}</div>;
}
