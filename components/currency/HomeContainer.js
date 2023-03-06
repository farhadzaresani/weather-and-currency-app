import { getPricesByIsoCode } from "@/pages/api/API's";
import { Button } from "@mui/material";
import { QueryClient, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Lodaing from "../Loading";
import CurrencyTable from "./CurrencyTable";
import { MyCurContainer } from "./CustomComponents";

import MyBadge from "./MyBadge";
import MyBadgeList from "./MyBadgeList";

const HomeContainer = (props) => {
  const [openBadgeList, setOpenBadgeList] = useState(false);
  const { data, isFetching } = useQuery({
    queryKey: ["data"],
    queryFn: getPricesByIsoCode,
  });

  if (isFetching) {
    return <Lodaing />;
  }

  const tableData = Object.entries(data.data).map(([code, price]) => {
    return {
      code: code,
      price: price,
    };
  });

  return (
    <MyCurContainer className='currencyApp'>
      <MyBadge action={() => setOpenBadgeList(true)} />
      <MyBadgeList open={openBadgeList} setOpen={setOpenBadgeList} />
      <CurrencyTable data={tableData} />
      <Button>test</Button>
    </MyCurContainer>
  );
};

export default HomeContainer;

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["data"], getPricesByIsoCode());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
