import { useState, useEffect, Fragment, memo } from "react";
import { APISDK } from "registry/fns/sdk";
import loaderGif from "assets/images/loader.gif";
import FormWrapper, {
  isMetaDataValid,
  MetaDataType,
} from "components/dyanmicForm";
const MemoizedFormWrapper = memo(FormWrapper);
export const InquiryEditFormWrapper = () => {
  const [loading, setLoading] = useState(false);
  const [metaData, setMetaData] = useState({});
  const [formEditableValues, setFormEditableValues] = useState({});
  const [error, setError] = useState("");
  const onSubmitHandlerNew = () => {};
  useEffect(() => {
    setLoading(true);
    Promise.all([
      APISDK.getInquiryFormDataForEdit(),
      APISDK.getInquiryFormMetaDataForEditOnly(),
    ])
      .then(function (responses) {
        Promise.all(responses).then((data) => {
          if (data[0].status === "success" && data[1].status === "success") {
            setLoading(false);
            setMetaData(data[1].data);
            setFormEditableValues(data[0].data);
          } else {
            setLoading(false);
            setError(data[0].data.error_msg);
            setError(data[1].data.error_msg);
          }
        });
      })
      .catch(function (error) {
        setLoading(false);
        setError(error);
      });
  }, []);
  /*eslint-disable react-hooks/exhaustive-deps*/
  //@ts-ignore
  const result = loading ? (
    <img src={loaderGif} alt="loader" />
  ) : !isMetaDataValid(metaData as MetaDataType) ? (
    <span>"Error loading form"</span>
  ) : (
    <Fragment>
      <MemoizedFormWrapper
        key={"dataForm"}
        metaData={metaData as MetaDataType}
        initialValues={formEditableValues}
        onSubmitHandler={onSubmitHandlerNew}
      />
    </Fragment>
  );
  return result;
};
