// pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header"; // Importando o cabeçalho

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> {/* Adicionando o cabeçalho */}
      <Component {...pageProps} />
    </>
  );
}
