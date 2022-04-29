import useSpotifyAuth from "../../hooks/useSpotifyAuth";

interface DashboardProps {
  code: string;
}

export default function Dashboard({ code }: DashboardProps) {
  const accessToken = useSpotifyAuth(code);

  return (<>
    Dashboard time baby.
  </>);
}
