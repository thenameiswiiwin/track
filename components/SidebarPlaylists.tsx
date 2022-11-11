import Link from "next/link";
import { usePlaylist } from "../lib/hooks";

const SidebarPlaylists = () => {
  const { playlists } = usePlaylist();

  return (
    <div className="scrollbar my-5 h-2/3">
      <ul className="space-y-2">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="px-3 text-sm hover:text-white">
            <Link
              href={{ pathname: "/playlist/[id]", query: { id: playlist.id } }}
            >
              {playlist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarPlaylists;
