export const crossMetaData = {
  gridConfig: {
    dense: false,
    pageSize: [5, 10],
    defaultPageSize: "10",
    gridLabel: "Cross Inquiries",
    rowIdColumn: "tran_cd",
    allowColumnReordering: true,
    allowColumnHiding: true,
    allowKeyboardNavigation: true,
    allowGlobalFilter: true,
  },
  headerFilters: [
    // {
    //   accessor: "status",
    //   filterComponentType: "groupByFilter",
    //   filterComponentProps: {
    //     selectType: "single",
    //   },
    //   columnName: "Status",
    //   level: 2,
    // },
    {
      accessor: "tran_dt",
      filterComponentType: "daysFilter",
      columnName: "Inquiry Date",
      level: 1,
    },
  ],
  columns: [
    {
      accessor: "tran_cd",
      columnName: "Inquiry CD",
      sequence: 1,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "right",
      componentType: "default",
      disableSortBy: false,
      disableFilters: false,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "tran_dt",
      columnName: "Inquiry Dt.",
      sequence: 2,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "date",
      disableSortBy: false,
      disableFilters: false,
      filterComponentType: "rangeFilter",
      filterComponentProps: {
        type: "date",
      },
      isVisible: true,
      dateFormat: "dd/MM/yyyy",
    },
    {
      accessor: "product_cd",
      columnName: "Product",
      sequence: 3,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "optionsFilter",
      filterComponentProps: {
        selectType: "multiple",
      },
      isVisible: true,
    },
    {
      accessor: "sub_product1",
      columnName: "Sub Product-1",
      sequence: 4,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "sub_product2",
      columnName: "Sub Product-2",
      sequence: 5,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "entered_by",
      columnName: "Entered By",
      sequence: 6,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "branch_cd",
      columnName: "Branch",
      sequence: 7,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "first_name",
      columnName: "Customer Name",
      sequence: 8,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: false,
      disableFilters: false,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "gender",
      columnName: "Gender",
      sequence: 9,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "birth_dt",
      columnName: "Birth Dt.",
      sequence: 10,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "date",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "rangeFilter",
      isVisible: true,
      dateFormat: "dd/MM/yyyy",
    },
    {
      accessor: "mobile",
      columnName: "Mobile",
      sequence: 11,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "e_mail_id",
      columnName: "Email",
      sequence: 12,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "desire_loan_amt",
      columnName: "Loan amt.",
      sequence: 13,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "right",
      componentType: "currency",
      disableSortBy: true,
      disableFilters: true,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "postal_cd",
      columnName: "Postal Code",
      sequence: 14,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "add1",
      columnName: "Address",
      sequence: 15,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "district",
      columnName: "District",
      sequence: 16,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "valueFilter",
      isVisible: true,
    },
    {
      accessor: "fill_que",
      columnName: "Ques.Status",
      sequence: 17,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "optionsFilter",
      isVisible: true,
    },
    {
      accessor: "lead_generate",
      columnName: "Lead Status",
      sequence: 18,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "valueFilter",
      filterComponentProps: {
        selectType: "single",
      },
      isVisible: true,
    },
    {
      accessor: "priority_hold_days",
      columnName: "Priority Hold Days",
      sequence: 19,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "optionsFilter",
      isVisible: true,
    },
    {
      accessor: "priority_remarks",
      columnName: "Remarks",
      sequence: 20,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      alignment: "left",
      componentType: "default",
      disableSortBy: true,
      disableFilters: false,
      filterComponentType: "optionsFilter",
      isVisible: true,
    },
  ],
};
