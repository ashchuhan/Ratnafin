import { FC, useEffect, useState, useMemo, useCallback, useRef } from "react";
import { GridMetaDataType, GridTransformedMetaDataType } from "./types";
import {
  attachComponentsToMetaData,
  attachFilterComponentToMetaData,
  attachAlignmentProps,
  extractHiddenColumns,
  sortColumnsBySequence,
  formatSortBy,
} from "./utils";
import { APISDK } from "registry/fns/sdk";
import { DefaultHeaderColumnRenderer } from "./components";
import { DataGrid } from "./grid";

export const GridWrapper: FC<{
  metaData: GridTransformedMetaDataType;
  girdCode: string;
}> = ({ metaData, girdCode }) => {
  const columns = useMemo(() => metaData.columns, []);
  const defaultColumn = useMemo(
    () => ({
      width: 150,
      maxWidth: 400,
      minWidth: 50,
      Header: DefaultHeaderColumnRenderer,
    }),
    []
  );
  const getRowId = useCallback(
    (row) => row[metaData.gridConfig.rowIdColumn],
    []
  );

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = useRef(0);
  const prevFilters = useRef(null);
  const resetPaginationAndSorting = useRef(false);

  useEffect(() => {
    resetPaginationAndSorting.current = false;
  }, [data]);

  const fetchData = useCallback(
    ({ pageSize, pageIndex, sortBy, filters }) => {
      console.log(filters);
      if (prevFilters.current !== filters) {
        resetPaginationAndSorting.current = true;
      }
      const fetchId = ++fetchIdRef.current;
      setLoading(true);
      const startRow = Number(pageSize) * Number(pageIndex) + 1;
      const endRow = Number(startRow) + Number(pageSize) - 1;
      APISDK.fetchGridData(
        girdCode,
        startRow,
        endRow,
        formatSortBy(sortBy)
      ).then((result) => {
        if (fetchId === fetchIdRef.current) {
          if (result.status === "success") {
            setData(result?.data?.rows ?? []);
            setPageCount(
              Math.ceil(
                Number(result?.data?.total_count ?? 1) / Number(pageSize)
              )
            );
            setTotalRecords(Number(result?.data?.total_count ?? 1));
            setLoading(false);
            prevFilters.current = filters;
          }
        }
      });
    },
    [setTotalRecords, setLoading, setData]
  );
  console.log(data, totalRecords, pageCount);

  return (
    <DataGrid
      label={metaData.gridConfig?.gridLabel ?? "NO_NAME"}
      dense={true}
      getRowId={getRowId}
      columns={columns}
      defaultColumn={defaultColumn}
      loading={loading}
      data={data}
      pageCount={pageCount}
      totalRecords={totalRecords}
      resetPaginationAndSorting={resetPaginationAndSorting.current}
      filterOptions={{
        columnId: [],
      }}
      onFetchData={fetchData}
      pageSizes={metaData.gridConfig?.pageSize}
      defaultPageSize={metaData.gridConfig?.defaultPageSize}
      defaultHiddenColumns={metaData.hiddenColumns}
    />
  );
};

export const ParentGridWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const gridCode = "trn/001";
  useEffect(() => {
    APISDK.fetchGridMetaData(gridCode)
      .then((result) => {
        if (result.status === "success") {
          let finalData = transformMetaData(result.data);
          setData(finalData);
          setError(false);
          setLoading(false);
        } else {
          setData(result.data);
          setError(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(true);
        setData(err);
      });
  }, []);
  return loading ? (
    <span>{"loading..."}</span>
  ) : error ? (
    <span>{"error loading grid"}</span>
  ) : (
    <GridWrapper
      metaData={data as GridTransformedMetaDataType}
      girdCode={gridCode}
    />
  );
};

const transformMetaData = (
  metaData: GridMetaDataType
): GridTransformedMetaDataType => {
  let columns = metaData.columns as any;
  columns = attachComponentsToMetaData(columns);
  columns = attachFilterComponentToMetaData(columns);
  columns = attachAlignmentProps(columns);
  columns = sortColumnsBySequence(columns);
  const hiddenColumns = extractHiddenColumns(columns);
  return {
    columns: columns,
    gridConfig: metaData.gridConfig,
    hiddenColumns: hiddenColumns,
  };
};
