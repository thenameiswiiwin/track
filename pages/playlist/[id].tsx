import GradientLayout from "../../components/GradientLayout";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import { getColors } from "./getColors";

const Playlist = ({ playlist }) => {
  const color = getColors(playlist.id);

  return (
    <GradientLayout
      gradient={color.gr}
      background={color.bg}
      roundedImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <div>playlist</div>
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRACK_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};
export default Playlist;
