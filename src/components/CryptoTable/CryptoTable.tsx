import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Box } from "@mui/material";
import CryptoTableToolbar from "../CryptoTableToolbar/CryptoTableToolbar";
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CryptoTable() {
  const [isExpanded, setIsExpanded] = useState(true);

  const buyOrders: any = useSelector((state: any) => state.order.buyOrders);
  const sellOrders: any = useSelector((state: any) => state.order.sellOrders);
  console.log(buyOrders);
  console.log(sellOrders);
  const buyPrices = Object.keys(buyOrders);
  const sellPrices = Object.keys(sellOrders);

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <CryptoTableToolbar
          isExpanded={isExpanded}
          handleClick={handleExpansion}
        ></CryptoTableToolbar>
        {isExpanded && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Count</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                  <StyledTableCell align="right">Total</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sellPrices.map((price: string, i: number) => (
                  <StyledTableRow key={`price-${i}`}>
                    <StyledTableCell component="th" scope="row" align="right">
                      {sellOrders[price].count}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {sellOrders[price].amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {sellOrders[price].count + sellOrders[price].amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">{price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>

              <TableBody>
                {buyPrices.map((price: string, i: number) => (
                  <StyledTableRow key={`price-${i}`}>
                    <StyledTableCell component="th" scope="row" align="right">
                      {buyOrders[price].count}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {buyOrders[price].amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {buyOrders[price].count + buyOrders[price].amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">{price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
}
