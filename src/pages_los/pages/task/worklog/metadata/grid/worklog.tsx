export const worklogGridMetaData = {
  gridConfig: {
    dense: true,
    gridLabel: "Todays Worklog",
    rowIdColumn: "tranID",
    defaultColumnConfig: { width: 150, maxWidth: 250, minWidth: 100 },
    allowColumnReordering: true,
    disableSorting: true,
    hideHeader: false,
    disableGroupBy: true,
    containerHeight: { min: "40vh", max: "50vh" },
  },
  columns: [
    {
      columnName: "Serial No",
      componentType: "default",
      accessor: "tranID",
      sequence: 0,
      alignment: "left",
    },
    {
      columnName: "Date",
      componentType: "date",
      accessor: "tranDate",
      sequence: 1,
      alignment: "center",
      dateFormat: "dd/MM/yyyy",
    },
    {
      columnName: "Type",
      componentType: "default",
      accessor: "type",
      sequence: 2,
      alignment: "left",
    },
    {
      columnName: "Billable",
      componentType: "default",
      accessor: "billable",
      sequence: 3,
      alignment: "left",
    },
    {
      columnName: "Description",
      componentType: "default",
      accessor: "description",
      sequence: 4,
      alignment: "left",
    },
    {
      columnName: "Start Time",
      componentType: "date",
      accessor: "startTime",
      sequence: 5,
      alignment: "center",
      dateFormat: "hh:mm aaaa",
    },
    {
      columnName: "End Time",
      componentType: "date",
      accessor: "endTime",
      sequence: 6,
      alignment: "center",
      dateFormat: "hh:mm aaaa",
    },
    {
      columnName: "Modified Date",
      componentType: "default",
      accessor: "lastModifiedDate",
      sequence: 9,
      alignment: "center",
      isVisible: false,
    },
  ],
};
