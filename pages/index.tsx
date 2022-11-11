import GradientLayout from '../components/GradientLayout';

const Home = () => {
  return (
    <GradientLayout
      color="zinc"
      subtitle="profile"
      title="Huy Nguyen"
      description="15 public playlists"
      image="/profile.jpg"
      roundedImage={true}
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
