import { FC, useCallback, useEffect, useState } from "react";
import loaderGif from "assets/images/loader.gif";
import { InitialValuesType, SubmitFnType } from "packages/form";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import FormWrapper, { MetaDataType } from "components/dyanmicForm";
import { queryClient } from "cache";
import { useSnackbar } from "notistack";
import { cloneDeep } from "lodash-es";
import * as API from "./api";
import { useQueries, useMutation } from "react-query";

interface updateWorklogDataType {
  data: object;
  displayData?: object;
  endSubmit?: any;
  setFieldError?: any;
  serialNo: string;
}

const updateWorklogDataWrapperFn = (updateWorklogkData) => async ({
  data,
  serialNo,
}: updateWorklogDataType) => {
  return updateWorklogkData(data, serialNo);
};

export const WorklogViewEdit: FC<{
  moduleType: any;
  isDataChangedRef: any;
  closeDialog?: any;
  defaultView?: "view" | "edit";
  setEditFormStateFromInitValues?: any;
  readOnly?: boolean;
  disableCache?: boolean;
  serialNo: string;
}> = ({
  moduleType,
  isDataChangedRef,
  closeDialog,
  defaultView = "view",
  readOnly = false,
  serialNo,
  disableCache,
  setEditFormStateFromInitValues,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [formMode, setFormMode] = useState(defaultView);
  const moveToViewMode = useCallback(() => setFormMode("view"), [setFormMode]);
  const moveToEditMode = useCallback(() => setFormMode("edit"), [setFormMode]);

  const mutation = useMutation(
    updateWorklogDataWrapperFn(
      API.updateWorkLogData({ moduleType, taskID: serialNo })
    ),
    {
      onError: (error: any, { endSubmit }) => {
        let errorMsg = "Unknown Error occured";
        if (typeof error === "object") {
          errorMsg = error?.error_msg ?? errorMsg;
        }
        endSubmit(false, errorMsg, error?.error_detail ?? "");
      },
      onSuccess: (data, { endSubmit }) => {
        queryClient.refetchQueries([
          "getWorklogFormData",
          moduleType,
          serialNo,
        ]);
        endSubmit(true, "");
        enqueueSnackbar("Today's Worklog Updated Successfully", {
          variant: "success",
        });
        isDataChangedRef.current = true;
        moveToViewMode();
        if (typeof closeDialog === "function") {
          closeDialog();
        }
      },
    }
  );

  const onSubmitHandler: SubmitFnType = (
    data,
    displayData,
    endSubmit,
    setFieldError
  ) => {
    //@ts-ignore
    mutation.mutate({ data, displayData, endSubmit, setFieldError });
  };

  useEffect(() => {
    return () => {
      queryClient.removeQueries(["getWorklogFormData", moduleType, serialNo]);
      queryClient.removeQueries(["getWorklogFormMetaData", "view", serialNo]);
      queryClient.removeQueries(["getWorklogFormMetaData", "edit", serialNo]);
    };
  }, [serialNo]);

  const result = useQueries([
    disableCache
      ? {
          queryKey: ["getWorklogFormData", moduleType, serialNo],
          queryFn: () => API.getWorkLogData({ moduleType })(serialNo),
          cacheTime: 0,
        }
      : {
          queryKey: ["getTaskFormData", moduleType, serialNo],
          queryFn: () => API.getWorkLogData({ moduleType })(serialNo),
        },
    {
      queryKey: ["getTaskFormMetaData", "view", serialNo],
      queryFn: () => API.getFormMetaData(),
    },
    {
      queryKey: ["getTaskFormMetaData", "edit", serialNo],
      queryFn: () => API.getFormMetaData(),
    },
  ]);

  const dataUniqueKey = `${result[0].dataUpdatedAt}`;
  const loading =
    result[0].isLoading ||
    result[1].isLoading ||
    result[2].isLoading ||
    result[0].isFetching ||
    result[1].isFetching ||
    result[2].isFetching;
  let isError = result[0].isError || result[1].isError || result[2].isError;
  //@ts-ignore
  let errorMsg = `${result[0].error?.error_msg} ${
    //@ts-ignore
    result[1].error?.error_msg
  } ${
    //@ts-ignore
    result[2].error?.error_msg
  }`;
  errorMsg = Boolean(errorMsg.trim()) ? errorMsg : "Unknown error occured";

  let formEditData = result[0].data;

  let editMetaData: MetaDataType = {} as MetaDataType;
  let viewMetaData: MetaDataType = {} as MetaDataType;

  if (result[1].isSuccess && result[2].isSuccess && result[0].isSuccess) {
    const formStateFromInitValues =
      typeof setEditFormStateFromInitValues === "function"
        ? setEditFormStateFromInitValues(result[0].data)
        : undefined;
    viewMetaData = cloneDeep(result[1].data) as MetaDataType;
    editMetaData = cloneDeep(result[2].data) as MetaDataType;

    editMetaData.form.formState = {
      formCode: editMetaData.form.name,
      ...formStateFromInitValues,
    };
    editMetaData.form.name = `${editMetaData.form.name}-edit`;
    if (editMetaData?.form?.render?.renderType === "stepper") {
      editMetaData.form.render.renderType = "tabs";
    }
    viewMetaData.form.formState = {
      formCode: viewMetaData.form.name,
      ...formStateFromInitValues,
    };
    viewMetaData.form.name = `${viewMetaData.form.name}-view`;
    if (viewMetaData?.form?.render?.renderType === "stepper") {
      viewMetaData.form.render.renderType = "tabs";
    }
  }

  const renderResult = loading ? (
    <>
      <img src={loaderGif} alt="loader" width="50px" height="50px" />
      {typeof closeDialog === "function" ? (
        <div style={{ position: "absolute", right: 0, top: 0 }}>
          <IconButton onClick={closeDialog}>
            <HighlightOffOutlinedIcon />
          </IconButton>
        </div>
      ) : null}
    </>
  ) : isError === true ? (
    <>
      <span>{errorMsg}</span>
      {typeof closeDialog === "function" ? (
        <div style={{ position: "absolute", right: 0, top: 0 }}>
          <IconButton onClick={closeDialog}>
            <HighlightOffOutlinedIcon />
          </IconButton>
        </div>
      ) : null}
    </>
  ) : formMode === "view" ? (
    <FormWrapper
      key={`${dataUniqueKey}-${formMode}`}
      metaData={viewMetaData as MetaDataType}
      initialValues={formEditData as InitialValuesType}
      onSubmitHandler={onSubmitHandler}
      //@ts-ignore
      displayMode={formMode}
      disableGroupErrorDetection={false}
      disableGroupExclude={true}
    >
      {!readOnly ? <Button onClick={moveToEditMode}>Edit</Button> : null}
      {typeof closeDialog === "function" ? (
        <Button onClick={closeDialog}>Cancel</Button>
      ) : null}
    </FormWrapper>
  ) : formMode === "edit" ? (
    <FormWrapper
      key={`${dataUniqueKey}-${formMode}`}
      metaData={editMetaData as MetaDataType}
      initialValues={formEditData as InitialValuesType}
      onSubmitHandler={onSubmitHandler}
      //@ts-ignore
      displayMode={formMode}
      disableGroupErrorDetection={false}
      disableGroupExclude={true}
    >
      {({ isSubmitting, handleSubmit }) => (
        <>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            endIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            Save
          </Button>
          <Button onClick={moveToViewMode} disabled={isSubmitting}>
            Cancel
          </Button>
        </>
      )}
    </FormWrapper>
  ) : null;
  return renderResult;
};
