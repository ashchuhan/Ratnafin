import {
  useContext,
  useEffect,
  Fragment,
  useState,
  useRef,
  useCallback,
} from "react";
import { useQuery } from "react-query";
import { ClearCacheContext } from "cache";
import loaderGif from "assets/images/loader.gif";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FormNew } from "./formNew";
import { CRUDContext } from "./context";
import { cacheWrapperKeyGen } from "cache";

export const FormNewExistsIfNotCreate = ({
  isProductEditedRef,
  successAction,
  formState,
}) => {
  const removeCache = useContext(ClearCacheContext);
  const { checkFormDataExist } = useContext(CRUDContext);
  const { insertFormData } = useContext(CRUDContext);
  const wrapperKey = useRef<any>(null);
  if (wrapperKey.current === null) {
    wrapperKey.current = cacheWrapperKeyGen(Object.values(insertFormData.args));
  }
  let result = useQuery(
    ["checkFormDataExist", wrapperKey.current],
    () => checkFormDataExist.fn(checkFormDataExist.args)(),
    {
      cacheTime: 100000000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  useEffect(() => {
    removeCache?.addEntry(["checkFormDataExist", wrapperKey.current]);
  }, []);
  const loading = result.isFetching || result.isLoading;
  const isError = result.isError;
  //const errorMsg = result.error;
  const dataExist =
    result.data?.exists === "YES"
      ? true
      : result.data?.exists === "NO"
      ? false
      : false;

  useEffect(() => {
    if (dataExist) {
      if (typeof successAction === "function") {
        successAction();
      }
    }
  }, [dataExist]);

  return loading ? (
    <img src={loaderGif} alt="loader" width="50px" height="50px" />
  ) : isError ? (
    //@ts-ignore
    <div>{result?.error?.error_msg ?? "Unknown error occured"} </div>
  ) : !dataExist ? (
    <CreateFormConfirmation
      successAction={successAction}
      isProductEditedRef={isProductEditedRef}
      formState={formState}
    />
  ) : null;
};

export const CreateFormConfirmation = ({
  successAction,
  isProductEditedRef,
  formState,
}) => {
  const [showAsk, setShowAsk] = useState(true);
  const cancleFormSubmit = useCallback(() => {
    setShowAsk(true);
  }, [setShowAsk]);
  return showAsk ? (
    <Fragment>
      <Typography variant="h6">No Data Found</Typography>
      <Button onClick={() => setShowAsk(false)}>Click Here to Add</Button>
    </Fragment>
  ) : (
    <FormNew
      isProductEditedRef={isProductEditedRef}
      cancelAction={cancleFormSubmit}
      successAction={successAction}
      formState={formState}
    />
  );
};
