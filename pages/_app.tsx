import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import Template from "../template";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Template>
  );
}
export default MyApp;
