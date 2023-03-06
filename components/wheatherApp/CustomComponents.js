const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

export const MyPaper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  maxWidth: "80%",
  margin: "auto",
});

export const MyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: 10,
  gap: 10,
});

export const MyContainer = styled("main")({
  backgroundSize: "cover",
  minHeight: "100vh",
  display: "flex",
});
