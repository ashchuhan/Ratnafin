import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  wrapper: {
    marginTop: "120px",
    maxWidth: "1260px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
    },
  },
  customCol: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  productName: {
    color: "#555",
    fontSize: "1.15rem",
    fontWeight: 700,
    marginTop: "20px",
    minHeight: "40px",
    marginBottom: "4px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  productWrapper: {
    maxWidth: "218px",
    minHeight: "180px",
    padding: "10px 4px",
    backgroundColor: "#fff",
    border: "1px solid #E8FFF1",
    borderRadius: "20px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    marginBottom: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    "&:hover": {
      boxShadow: "0 5px 10px rgba(38,164,86,0.9)",
    },
    [theme.breakpoints.down("md")]: {
      padding: "4px 4px",
      minHeight: "166px",
    },
  },
  productTag: {
    width: "150px",
    height: "30px",
    lineHeight: "30px",
    paddingLeft: "15px",
    position: "absolute",
    left: "-8px",
    bottom: "8px",
    background: "#E8894A",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 500,
    "&::before": {
      content: "''",
      position: "absolute",
      height: "0",
      width: "0",
      top: "-8.5px",
      left: "0.1px",
      borderBottom: "9px solid #E8894A",
      borderLeft: "9px solid transparent",
    },
  },
}));
