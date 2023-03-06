import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";

const MyPaper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  padding: 20,
});

const MyIconButton = styled(IconButton)({
  background: "rgba( 255, 255, 255, 0.1 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 17px )",
  borderRadius: "10px",
  webkitBackdropFilter: " blur( 17px )",
});

export default function MyBadge({ action }) {
  return (
    <MyPaper>
      <MyIconButton onClick={action} aria-label='cart'>
        <ShoppingCartIcon color='success' />
      </MyIconButton>
    </MyPaper>
  );
}
