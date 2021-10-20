import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import TrayPartner from "./parceiro-tray";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>E-Adapt | Parceiro Tray</title>
        <meta
          property="og:site_name"
          content="E-adapt Configurações em E-commerce"
        />
        <meta
          property="og:title"
          content="E-adapt Configurações em E-commerce"
        />
        <meta
          property="og:description"
          content="Somos especializados em e-commerce, configurações Plataformas de E-commerce, ERP e integrações com os Marketplaces"
        />
        <meta property="og:url" content="http://e-adapt.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/logo.png" />
        <meta property="og:image:width" content="64" />
        <meta property="og:image:height" content="64" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="language" content="pt-BR" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Somos especializados em e-commerce, configurações Plataformas de E-commerce, ERP e integrações com os Marketplaces"
        />
      </Head>

      <TrayPartner />
    </div>
  );
};

export default Home;
