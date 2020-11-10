import { Theme } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";

export interface FormWrapperStyleProps {
  paper: BaseCSSProperties;
  loader: BaseCSSProperties;
}
export type FormWrapperStyleNamesProps = Record<
  keyof FormWrapperStyleProps,
  string
>;

export const formWrapperStyle = (theme: Theme): any => ({
  paper: {
    margin: theme.spacing(3, 3, 0, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.06)",
    padding: "1rem 0rem",
    borderRadius: 8,
    width: "100%",
    minHeight: "30vh",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 2, 0, 2),
    },
  },
  loader: {
    justifyContent: "center",
    margin: "auto",
  },
});

export interface FormStyleProps {
  title: BaseCSSProperties;
  subTitle: BaseCSSProperties;
  form: BaseCSSProperties;
  submit: BaseCSSProperties;
  backBtn: BaseCSSProperties;
}

export type FormStyleNamesProps = Record<keyof FormStyleProps, string>;

export const formStyle = (theme: Theme): any => ({
  title: {
    color: "#26A456",
    letterSpacing: "2px",
    fontSize: "1.75rem",
    fontWeight: "700",
    alignSelf: "flex-start",
    marginBottom: "10px",
  },
  subTitle: {
    color: "#26A456",
    letterSpacing: "2px",
    fontSize: "1.25rem",
    //@ts-ignore
    fontWeight: "700",
    alignSelf: "flex-start",
    marginBottom: theme.spacing(2),
  },
  label: {
    color: "#736f6f",
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: "1rem",
    marginBottom: "0.5 rem",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: "1.2rem",
    borderRadius: "24px",
  },
  backBtn: {
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    background:
      "linear-gradient(-90deg, rgba(150, 143, 143,1) 0%, rgba(224, 224, 224,1) 35%, rgba(209, 197, 197,1) 100%)",
    marginRight: theme.spacing(2),
    color: "#0b6fb8 !important",
    margin: theme.spacing(3, 0, 2),
    fontSize: "1.2rem",
    borderRadius: "24px",
    "&:hover": {
      color: "#0b6fb8 !important",
      background:
        "linear-gradient(-90deg, rgba(209, 197, 197,1) 0%, rgba(224, 224, 224,1) 35%, rgba(150, 143, 143,1) 100%)",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
  },
});
