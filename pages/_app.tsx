import "../styles/globals.css";
import type { AppProps } from "next/app";
import PlayerLayout from "../components/PlayerLayout";

const App = ({ Component, pageProps }: AppProps) => (
  <PlayerLayout>
    <Component {...pageProps} />
  </PlayerLayout>
);

export default App;
