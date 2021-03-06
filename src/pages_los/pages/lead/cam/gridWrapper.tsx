import { useContext, useEffect, forwardRef, useImperativeHandle } from "react";
import { useQueries } from "react-query";
import { queryClient } from "cache";
import GridWrapper from "components/dataTableStatic";
import { ActionTypes, GridMetaDataType } from "components/dataTable";
import loaderGif from "assets/images/loader.gif";
import { CAMContext } from "./context";

type GridWrapperType = {
  actions: ActionTypes[];
  setAction: any;
};

export const MyGridWrapper = forwardRef<any, GridWrapperType>(
  ({ actions, setAction }, ref) => {
    const { getGridCAMMetaData, getGridCAMData } = useContext(CAMContext);

    const result = useQueries([
      {
        queryKey: ["getGridCamMetaData", getGridCAMMetaData.args],
        queryFn: () => getGridCAMMetaData.fn(getGridCAMMetaData.args),
      },
      {
        queryKey: ["getGridCamData", getGridCAMData.args],
        queryFn: () => getGridCAMData.fn(getGridCAMData.args),
      },
    ]);
    useEffect(() => {
      queryClient.removeQueries([
        "getGridCamMetaData",
        getGridCAMMetaData.args,
      ]);
      queryClient.removeQueries(["getGridCamData", getGridCAMData.args]);
    }, []);
    useImperativeHandle(ref, () => ({
      refetch: () => result[1].refetch(),
    }));
    const loading =
      result[0].isLoading ||
      result[1].isLoading ||
      result[0].isFetching ||
      result[1].isFetching;
    let isError = result[0].isError || result[1].isError;
    //@ts-ignore
    let errorMsg = `${result[0].error?.error_msg} ${result[1].error?.error_msg}`
      .trimStart()
      .trimEnd();
    errorMsg = !Boolean(errorMsg) ? "unknown error occured" : errorMsg;
    const renderResult = loading ? (
      <img src={loaderGif} alt="loader" width="50px" height="50px" />
    ) : isError === true ? (
      <span>{errorMsg}</span>
    ) : (
      <GridWrapper
        key={`camGridListing`}
        finalMetaData={result[0].data as GridMetaDataType}
        data={result[1].data ?? []}
        setData={() => null}
        actions={actions}
        setAction={setAction}
        loading={loading}
      />
    );
    return renderResult;
  }
);
MyGridWrapper.displayName = "CAMGridWrapper";
