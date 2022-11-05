import Link from "next/link";

const Playlists = new Array(50).fill(1).map((_, i) => `Playlist ${i + 1}`);

const SidebarPlaylists = () => {
  return (
    <div className="scrollbar my-5 h-2/3">
      <ul className="space-y-2">
        {Playlists.map((playlist) => (
          <li key={playlist} className="px-3 text-sm hover:text-white">
            <Link href="/">{playlist}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarPlaylists;
