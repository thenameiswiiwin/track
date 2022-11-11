import useSWR from "swr";
import fetcher from "./fetcher";

export const useUser = () => {
  const { error, data } = useSWR("/user", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { error, data } = useSWR("/playlist", fetcher);

  return {
    playlists: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
