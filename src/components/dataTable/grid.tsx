import { useEffect } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useResizeColumns,
  useBlockLayout,
  useRowSelect,
  useFilters,
  useAsyncDebounce,
} from "react-table";
import Paper from "@material-ui/core/Paper";
import { TableHeaderToolbar } from "./tableHeaderToolbar";
import { TableHeaderFilterToolbar } from "./tableHeaderFilterToolbar";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import { StickyTableHead } from "./stickyTableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import { TablePaginationActions } from "./tablePaginationToolbar";

import LinearProgress from "@material-ui/core/LinearProgress";
import { LinearProgressBarSpacer } from "./linerProgressBarSpacer";

import { CustomBackdrop } from "./backdrop";
import { useCheckboxColumn } from "./components";
import { HeaderCellWrapper } from "./headerCellWrapper";
import { RowCellWrapper } from "./rowCellWrapper";

const maxWidth = 998;

export const DataGrid = ({
  gridCode,
  label,
  dense,
  headerFilters,
  headerFilterManager,
  localFilterManager,
  columns,
  defaultColumn,
  data,
  onFetchData,
  loading,
  getRowId,
  totalRecords: controlledTotalRecords,
  pageCount: controlledPageCount,
  resetPaginationAndSorting,
  resetFilters,
  pageSizes,
  defaultPageSize,
  defaultHiddenColumns,
  filterTypes,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    selectedFlatRows,
    totalColumnsWidth,
    gotoPage,
    setPageSize,
    state: tableState,
    setAllFilters,
    setSortBy,
  } = useTable(
    {
      columns,
      defaultColumn,
      data,
      getRowId,
      filterTypes,
      initialState: {
        pageIndex: 0,
        pageSize: defaultPageSize,
        hiddenColumns: defaultHiddenColumns,
      },
      gridCode,
      manualPagination: true,
      pageCount: controlledPageCount,
      autoResetPage: resetPaginationAndSorting,
      manualSortBy: true,
      autoResetSortBy: resetPaginationAndSorting,
      manualFilters: true,
      autoResetFilters: resetFilters,
      localFilterManager,
      headerFilterState: headerFilterManager.state,
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    useResizeColumns,
    useBlockLayout,
    useCheckboxColumn
    //useSequenceColumn
  );

  const { pageIndex, pageSize, sortBy, filters } = tableState;
  const cellSize = dense ? 34 : 54;
  const emptyRows = pageSize - Math.min(pageSize, page.length);
  const onFetchDataDebounced = useAsyncDebounce(onFetchData, 500);

  useEffect(() => {
    onFetchDataDebounced({ pageIndex, pageSize, sortBy, filters });
  }, [onFetchDataDebounced, pageIndex, pageSize, sortBy, filters]);

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <Paper
      style={{
        width: totalColumnsWidth < maxWidth ? totalColumnsWidth : maxWidth,
      }}
    >
      <TableHeaderToolbar
        label={label}
        dense={dense}
        getRowId={getRowId}
        selectedFlatRows={selectedFlatRows}
      />
      <TableHeaderFilterToolbar
        dense={dense}
        filters={headerFilters}
        headerFilterManager={headerFilterManager}
        setAllFilters={setAllFilters}
        setSortBy={setSortBy}
        gotoPage={gotoPage}
        localFilterManager={localFilterManager}
      />
      {loading ? <LinearProgress /> : <LinearProgressBarSpacer />}
      <TableContainer style={{ position: "relative" }}>
        <Table
          component="div"
          {...getTableProps()}
          size={dense ? "small" : "medium"}
        >
          {/*@ts-ignore*/}
          <StickyTableHead component="div">
            {headerGroups.map((headerGroup) => {
              return (
                <TableRow
                  component="div"
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => {
                    return (
                      <HeaderCellWrapper
                        column={column}
                        key={column.getHeaderProps().key}
                      >
                        {column.render("Header")}
                      </HeaderCellWrapper>
                    );
                  })}
                </TableRow>
              );
            })}
          </StickyTableHead>
          <TableBody
            component="div"
            {...getTableBodyProps([
              {
                style: {
                  display: "block",
                  maxHeight: "calc(100vh - 42*8px)",
                },
              },
            ])}
          >
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <TableRow
                  component="div"
                  selected={row.isSelected}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <RowCellWrapper
                        key={cell.getCellProps().key}
                        cell={cell}
                        index={index}
                      >
                        {cell.render("Cell", { index: index })}
                      </RowCellWrapper>
                    );
                  })}
                </TableRow>
              );
            })}
            {emptyRows > 0 ? (
              <TableRow
                component="div"
                style={{ height: emptyRows * cellSize }}
              >
                <TableCell component="div" />
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
        <CustomBackdrop open={loading} />
      </TableContainer>
      <TablePagination
        style={{ display: "flex" }}
        variant="body"
        component="div"
        rowsPerPageOptions={pageSizes}
        colSpan={3}
        count={controlledTotalRecords}
        rowsPerPage={Number(pageSize)}
        page={Number(pageIndex)}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </Paper>
  );
};
