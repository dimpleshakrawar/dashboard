import { PropTypes } from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function ToggleTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Cosmetics</TableCell>
            <TableCell align="right">Serums</TableCell>
            <TableCell align="right">Facewash</TableCell>
            <TableCell align="right">Shampoos</TableCell>
            <TableCell align="right">Conditioners</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, id) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Cosmetics}
              </TableCell>
              <TableCell align="right">{row.Serums}</TableCell>
              <TableCell align="right">{row.Facewash}</TableCell>
              <TableCell align="right">{row.Shampoos}</TableCell>
              <TableCell align="right">{row.conditioners}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ToggleTable.propTypes = {
  data: PropTypes.array,
  rows: PropTypes.array,
};
