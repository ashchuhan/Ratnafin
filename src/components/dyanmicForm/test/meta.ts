import { MetaDataType } from "components/dyanmicForm";

const GeneralDetailsMetaData: MetaDataType = {
  form: {
    name: "123456",
    label: "General Details",
    resetFieldOnUmnount: false,
    validationRun: "onBlur",
    submitAction: "home",
    render: {
      ordering: "auto",
      renderType: "tabs",
      groups: {
        "0": "Address Details",
      },
      gridConfig: {
        item: {
          xs: 12,
          sm: 4,
          md: 4,
        },
        container: {
          direction: "row",
          spacing: 2,
        },
      },
    },
    componentProps: {
      textField: {
        fullWidth: true,
      },
      select: {
        fullWidth: true,
      },
      datePicker: {
        fullWidth: true,
      },
      numberFormat: {
        fullWidth: true,
      },
      inputMask: {
        fullWidth: true,
      },
    },
  },
  fields: [
    {
      render: {
        //@ts-ignore
        componentType: "currency",
        group: 0,
      },
      isReadOnly: true,
      name: "dumdum",
      label: "dumdum",
      GridProps: {
        xs: 3,
        md: 3,
        sm: 12,
      },
    },
  ],
};

export default GeneralDetailsMetaData;

/*
{
      render: {
        componentType: "select",
        group: 0,
      },
      name: "dummy",
      label: "dummy",
      options: [
        { value: "1", label: "Yes" },
        { value: "2", label: "No" },
      ],
      GridProps: {
        xs: 3,
        md: 3,
        sm: 12,
      },
    },
    {
      render: {
        componentType: "datePicker",
        group: 0,
      },
      name: "fromPeriod",
      label: "From Period",
      format: "MM/yyyy",
      GridProps: {
        xs: 3,
        md: 3,
        sm: 12,
      },
    },
    {
      render: {
        componentType: "datePicker",
        group: 0,
      },
      name: "toPeriod",
      label: "To Period",
      format: "MM/yyyy",
      GridProps: {
        xs: 3,
        md: 3,
        sm: 12,
      },
    },
    {
      render: {
        componentType: "arrayField",
        group: 0,
      },
      name: "addressDetails",
      dependentFields: ["dummy", "fromPeriod", "toPeriod"],
      shouldExclude: "shouldExcludeDummy",
      fixedRows: true,
      getFixedRowsCount: "getCountForRow",
      GridProps: {
        xs: 12,
        md: 12,
        sm: 12,
      },
      _fields: [
        {
          render: {
            componentType: "textField",
          },
          name: "value1",
          label: "Value1",
          placeholder: "Value1",
          GridProps: {
            xs: 12,
            md: 3,
            sm: 3,
          },
        },
        {
          render: {
            //@ts-ignore
            componentType: "currency",
          },
          name: "value2",
          label: "Value2",
          placeholder: "Value2",
          GridProps: {
            xs: 12,
            md: 3,
            sm: 3,
          },
        },
        {
          render: {
            componentType: "textField",
          },
          name: "value3",
          label: "Value3",
          placeholder: "Value3",
          GridProps: {
            xs: 12,
            md: 3,
            sm: 3,
          },
        },
        {
          render: {
            //@ts-ignore
            componentType: "currency",
          },
          name: "total",
          label: "Total",
          placeholder: "Total",
          dependentFields: ["value1", "value2", "value3"],
          setValueOnDependentFieldsChange: "setValueOnDependentFieldsChangeOne",
          GridProps: {
            xs: 12,
            md: 3,
            sm: 3,
          },
        },
        {
          render: {
            componentType: "textField",
          },
          name: "country",
          label: "Country",
          placeholder: "Country",
          GridProps: {
            xs: 12,
            md: 3,
            sm: 3,
          },
        },
      ],
    },
*/
