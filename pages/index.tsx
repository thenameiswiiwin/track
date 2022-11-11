import Image from "next/image";
import GradientLayout from "../components/GradientLayout";
import { useUser } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useUser();

  return (
    <GradientLayout
      gradient="from-zinc-800"
      background="bg-zinc-800"
      subtitle="profile"
      title={`${user?.username}`}
      description={`${user?.playlistsCount} public playlists`}
      image="/profile.jpg"
      roundedImage
    >
      <div className="px-10 text-white">
        <div className="mb-10 space-y-2">
          <p className="text-2xl font-semibold">Top artist this month</p>
          <p className="text-sm text-gray-400">Only visible to you</p>
        </div>
        <div className="flex">
          {artists.map((artist) => (
            <div key={artist.id} className="w-1/5 px-2.5">
              <div className="w-full rounded-lg bg-black/20 p-4 hover:bg-gray-500/10">
                <Image
                  src="/avatar.png"
                  height={144}
                  width={144}
                  alt="avatar"
                  className="h-36 w-36 rounded-full"
                />
                <div className="mt-3 space-y-1">
                  <p className="text-lg">{artist.name}</p>
                  <p className="text-sm text-gray-400">Artist</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
