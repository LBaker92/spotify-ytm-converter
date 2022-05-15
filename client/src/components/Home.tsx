import { Paper } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/useHttpClient";

export const Home = () => {
  const httpClient = useHttpClient();
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getMySongs = async () => {
      const response = await httpClient.get('/me/tracks');
      setSongs(response.data);
    }

    getMySongs();
  }, [httpClient, navigate]);

  return (<>
    {
      songs.map((song, i) => {
        return (
          <Paper sx={{
            margin: '1rem 0',
            padding: '1rem 2rem',
          }}
            key={i}>
            <pre>{JSON.stringify(song, null, 2)}</pre>
          </Paper>
        )
      })
    }
  </>)
}