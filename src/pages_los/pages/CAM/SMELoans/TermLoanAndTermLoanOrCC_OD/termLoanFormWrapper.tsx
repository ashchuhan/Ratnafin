import { memo, Fragment, FC } from "react";
import { useNavigate } from "react-router-dom";
import { APISDK } from "registry/fns/sdk";
import FormWrapper, {
  isMetaDataValid,
  MetaDataType,
} from "components/dyanmicForm";
import { InitialValuesType } from "packages/form";
import { TermLoanMetaData } from "./termLoanMetaData";

const MemoizedFormWrapper = memo(FormWrapper);

interface TabFormProps {
  metaData: MetaDataType;
  initialValues?: InitialValuesType;
}

const TermLoanForm: FC<TabFormProps> = ({ metaData, initialValues }) => {
  const navigate = useNavigate();

  const onSubmitHandler = async (values, submitEnd) => {};
  const result = /*!isMetaDataValid(metaData)*/ !true ? (
    <span>Error loading form</span>
  ) : (
    <Fragment>
      <MemoizedFormWrapper
        metaData={metaData}
        initialValues={initialValues}
        onSubmitHandler={onSubmitHandler}
      />
    </Fragment>
  );

  return result;
};

export const termLoanFormWrapper = () => {
  return <TermLoanForm metaData={TermLoanMetaData} />;
};
