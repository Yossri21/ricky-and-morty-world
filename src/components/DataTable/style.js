import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    TableRoot: {
        position: "relative",
        padding: "15px 10px",
        "& .MuiTableCell-head": {

            fontWeight: "bold",
            fontSize: " 15px",
        },
        "& .MuiTableBody-root": {
            fontSize: " 15px",
        },
        "& .MuiTableRow-root": {
            position: "relative",
            "& .MuiTableCell-body:first-child": {
                position: "relative",
                "&:before": {
                    content: `""`,
                    position: "absolute",
                    left: "-5px",
                    top: 0,
                    bottom: 0,
                    width: " 100%",
                    borderRadius: " 10px",
                    borderLeft: "2px solid rgba(224, 224, 224, 1)",
                },

            },
            "& .MuiTableCell-body:last-child": {
                position: "relative",

                "&:after": {
                    content: `""`,
                    position: "absolute",
                    right: "-5px",
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    borderRadius: " 10px ",
                    borderRight: "2px solid rgba(224, 224, 224, 1)",
                }
            }
        }
    },



}));