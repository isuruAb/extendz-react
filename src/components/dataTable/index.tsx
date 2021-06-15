import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";

import styles from "./index.module.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
import { updateRow } from "../../redux/actions/row";

interface IProps {
  data: any; //TODO: Types need to be defined
}

// Sample Column
const columns = [
  { id: "line1", label: "Line", minWidth: 170 },
  { id: "line2", label: "Line2", minWidth: 100 },
  {
    id: "city",
    label: "City",
    minWidth: 170,
    align: "right",
    format: (value: any) => value.toLocaleString("en-US"),
  },
  {
    id: "delivery",
    label: "Delivery",
    minWidth: 170,
    align: "right",
    format: (value: any) => value.toLocaleString("en-US"),
  },
  {
    id: "billing",
    label: "Billing",
    minWidth: 170,
    align: "right",
    format: (value: any) => value.toFixed(2),
  },
];

function createData(
  line1: any,
  line2: any,
  city: any,
  delivery: any,
  billing: any
) {
  return { line1, line2, city, delivery, billing };
}

const rows = [
  createData("India", "IN", 1324171354, true, false),
  createData("China", "CN", 1403500365, true, false),
  createData("Italy", "IT", 60483973, true, false),
  createData("United States", "US", 327167434, true, false),
  createData("Canada", "CA", 37602103, true, false),
  createData("Australia", "AU", 25475400, true, false),
  createData("Germany", "DE", 83019200, true, false),
  createData("Ireland", "IE", 4857000, true, false),
  createData("Mexico", "MX", 126577691, true, false),
  createData("Japan", "JP", 126317000, true, false),
  createData("France", "FR", 67022000, true, false),
  createData("United Kingdom", "GB", 67545757, true, false),
  createData("Russia", "RU", 146793744, true, false),
  createData("Nigeria", "NG", 200962417, true, false),
  createData("Brazil", "BR", 210147125, true, false),
];

const DataTable: React.FC<IProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let location: any = useLocation();
  const dispatch = useDispatch();
  const history: any = useHistory();

  useEffect(() => {
    //TODO: GET request goes here
  }, []);

  const handleEdit = (row: any) => {
    dispatch(updateRow(row));
    history.push(location?.pathname + "/update");
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: any) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column: any) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value + ""}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <EditIcon
                          onClick={() => handleEdit(row)}
                          className={styles.editButton}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Link to={location?.pathname + "/add"}>
        <Fab color="primary" aria-label="add" className="fabButton">
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};
export default DataTable;
