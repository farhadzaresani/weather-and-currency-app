import React, { useState } from "react";
import { getWeatherByLocation } from "@/pages/api/API's";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import SearchInput from "./SearchInput";
import { Container } from "@mui/material";
import TopSection from "./TopSection";
import Content from "./Content";
import styled from "@emotion/styled";
import { MyContainer } from "./CustomComponents";
import Lodaing from "../Loading";

const WeatherAppContainer = styled("div")({
  backgroundColor: "red",
  width: "50%",
  margin: "auto",
  background: "rgba( 255, 255, 255, 0.1 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 17px )",
  borderRadius: "10px",
  webkitBackdropFilter: " blur( 17px )",
});

function WeatherHomePage(props) {
  const [location, setLocation] = useState("tehran");

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      refetch();
      setLocation("");
    }
  };
  const { data, refetch, isLoading } = useQuery({
    queryFn: () => getWeatherByLocation(location),
    queryKey: ["weather"],
    onSuccess: (res) => {
      console.log("re", res);
    },
  });

  if (isLoading) {
    return <Lodaing />;
  }

  return (
    <MyContainer variant='main' className='weatherApp'>
      <WeatherAppContainer>
        <SearchInput
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />

        <Container className='container'>
          <TopSection data={data} />
          <Content data={data} />
        </Container>
      </WeatherAppContainer>
    </MyContainer>
  );
}

export default WeatherHomePage;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["weather"], getWeatherByLocation);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
