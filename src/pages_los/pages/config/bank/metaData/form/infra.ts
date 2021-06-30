export const infraFormMetaData = {
  form: {
    name: "bankMasterInfra",
    label: "Bank Master for Infra",
    resetFieldOnUmnount: false,
    validationRun: "onBlur",
    submitAction: "home",
    render: {
      ordering: "auto",
      renderType: "simple",
      gridConfig: {
        item: { xs: 12, sm: 4, md: 4 },
        container: { direction: "row", spacing: 2 },
      },
    },
    componentProps: {
      textField: { fullWidth: true },
      select: { fullWidth: true },
      datePicker: { fullWidth: true },
      numberFormat: { fullWidth: true },
      inputMask: { fullWidth: true },
    },
  },
  fields: [
    {
      render: { componentType: "autocomplete" },
      name: "branchID",
      label: "Name of Bank - Branch",
      placeholder: "Select Name of Bank - Branch",
      required: true,
      defaultValue: "00",
      options: "getBankBranchList",
      validate: "getValidateValue",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "select" },
      name: "bankBranch",
      label: "Bank Branch",
      placeholder: "Branch Select",
      defaultValue: "00",
      options: "getBranchList",
      multiple: true,
      freeSolo: true,
      enableVirtualized: true,
      showCheckbox: true,
      required: true,
      validate: "getValidateValue",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "textField" },
      name: "departmentName",
      label: "Department of the Bank",
      placeholder: "Department of the Bank",
      maxLength: 150,
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "select" },
      name: "projectType",
      label: "Project Type",
      placeholder: "Project Type",
      defaultValue: "00",
      options: "getPropertyType",
      required: true,
      validate: "getValidateValue",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "select" },
      name: "productId",
      label: "Product Name",
      placeholder: "Product Name",
      defaultValue: "00",
      options: "getProductTypeForBank",
      required: true,
      validate: "getValidateValue",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "select" },
      name: "subProduct1",
      label: "Sub Product 1",
      defaultValue: "00",
      placeholder: "Sub Product 1",
      dependentFields: ["productId"],
      options: "getBankSubProductType",
      disableCaching: true,
      required: true,
      validate: "getValidateValue",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "select" },
      name: "subProduct2",
      label: "Sub Product 2",
      defaultValue: "00",
      placeholder: "Sub Product 2",
      dependentFields: ["subProduct1"],
      shouldExclude: "shouldExcludeShowInfraSubProduct2TypeField",
      options: "getBankSubProductType2",
      disableCaching: true,
      multiple: true,
      showCheckbox: true,
      required: true,
      validate: "getValidateValue",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "textField" },
      name: "consTillDateSanction",
      label:
        "Experience in terms of Total Sq.Ft. Constructed till date of Sanction",
      placeholder:
        "Experience in terms of Total Sq.Ft. Constructed till date of Sanction",
      maxLength: 50,
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "marketLandValue",
      label: "Land Value(Market Value Lacs)",
      placeholder: "Land Value(Market Value Lacs)",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "constructionCost",
      label: "Construction Cost (Lacs)",
      placeholder: "Construction Cost (Lacs)",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "rateOfInt" },
      name: "totalUnit",
      label: "Total no. of Units",
      placeholder: "Total no. of Units",
      required: true,
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "squareFeetFormat" },
      name: "totalSaleableArea",
      label: "Total Saleable Area",
      placeholder: "Total Saleable Area",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "totalSalesValue",
      label: "Total Sales Value",
      placeholder: "Total Sales Value",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "otherCollateralValue",
      label: "Additional Collateral Value (Lacs)",
      placeholder: "Additional Collateral Value (Lacs)",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "rateOfIntWithoutValidation" },
      name: "collateralCoverage",
      label: "Collateral Coverage",
      placeholder: "Collateral Coverage",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "roiLB",
      label: "ROI (Min)",
      placeholder: "ROI (Min)",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "roiUB",
      label: "ROI (Max)",
      placeholder: "ROI (Max)",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "currency" },
      name: "pf",
      label: "PF",
      placeholder: "PF",
      maxLength: 100,
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "rateOfIntWithoutValidation" },
      name: "fromPayoutRate",
      label: "From Rate of Payout",
      placeholder: "From Rate of Payout",
      defaultValue: "0.00",
      GridProps: { xs: 12, md: 3, sm: 3 },
    },
    {
      render: { componentType: "rateOfIntWithoutValidation" },
      name: "toPayoutRate",
      label: "To Rate of Payout",
      placeholder: "To Rate of Payout",
      GridProps: { xs: 12, md: 3, sm: 3 },
      defaultValue: "0.00",
      dependentFields: ["fromPayoutRate"],
      runValidationOnDependentFieldsChange: true,
      validate: {
        conditions: {
          all: [
            {
              fact: "dependentFields",
              path: "$.fromPayoutRate.value",
              operator: "lessThanInclusiveString",
              value: { fact: "currentField", path: "$.value" },
            },
          ],
        },
        success: "",
        failure:
          "To Rate of Payout should be greater than From Rate of Payout.",
      },
    },
  ],
};
