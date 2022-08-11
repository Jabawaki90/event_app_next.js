import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/main-header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
