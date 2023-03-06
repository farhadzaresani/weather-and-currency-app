import WeatherHomePage from "@/components/wheatherApp/WeatherHomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name='Weather app' content='Weather app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WeatherHomePage />
    </>
  );
}
