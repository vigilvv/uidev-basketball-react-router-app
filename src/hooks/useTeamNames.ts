import useFetch from "./useFetch";

export default function useTeamNames(): {
  response: string[];
  loading: boolean;
} {
  return useFetch("/teams", "GET");
}
