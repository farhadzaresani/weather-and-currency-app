import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import BuyCurrency from "./BuyCurrency";
import { useSelector } from "react-redux";
import { allBadges } from "@/store/AddToBadgeSlicer";

const columns = [
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 170 },
];

export default function CurrencyTable({ data }) {
  const [currency, setCurrency] = React.useState();
  const [openBuyForm, setOpenBuyForm] = React.useState(false);

  const buyCurrency = (data) => {
    setCurrency(data);
    setOpenBuyForm(true);
  };

  return (
    <>
      <Paper sx={{ width: "90%", overflow: "hidden" }}>
        <TableContainer theme='dark' sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column, i) => (
                  <TableCell
                    key={column.id + i}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => {
                return (
                  <TableRow
                    hover
                    sx={{ cursor: "pointer" }}
                    tabIndex={-1}
                    key={row.code + i}
                  >
                    {columns.map((column) => {
                      const value = `${row[column.id]}`;
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                          {column.id === "price" ? "$" : ""}
                        </TableCell>
                      );
                    })}

                    <TableCell>
                      <Button color='success' onClick={() => buyCurrency(row)}>
                        Buy
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <BuyCurrency
        currency={currency}
        open={openBuyForm}
        setOpen={setOpenBuyForm}
      />
    </>
  );
}
