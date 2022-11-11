import "../styles/globals.css";
import PlayerLayout from "../components/PlayerLayout";

const App = ({ Component, pageProps }) => {
  return Component.authPage ? (
    <Component {...pageProps} />
  ) : (
    <PlayerLayout>
      <Component {...pageProps} />
    </PlayerLayout>
  );
};

export default App;
