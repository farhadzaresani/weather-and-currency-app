import HomeContainer from "@/components/currency/HomeContainer";
import Head from "next/head";
import React from "react";

const currency = () => {
  return (
    <>
      <Head>
        <title>Currency</title>
        <meta name='Currency app' content='Currency app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </>
  );
};

export default currency;
