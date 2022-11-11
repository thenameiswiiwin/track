import Link from 'next/link';
import { usePlaylist } from '../lib/hooks';

const SidebarPlaylists = () => {
  const { playlists } = usePlaylist();

  return (
    <div className="scrollbar my-5 h-2/3">
      <ul className="space-y-2">
        {playlists.map((playlist: { id: number; name: string }) => (
          <li key={playlist.id} className="px-3 text-sm hover:text-white">
            <Link href="/">
              <div>{playlist.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarPlaylists;
