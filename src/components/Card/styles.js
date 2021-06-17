import { makeStyles } from "@material-ui/styles";
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    root: {
      maxWidth: "900px",
      margin: "20px 0 45px",
      padding: "20px",
      background: "#f5f5f5",
      display: "flex",
      "& .MuiCardContent-root": {
        padding: "15px 15px 15px 30px"
      }
    },
    media: {
      margin: " 0",
      borderRadius: "10px",
      maxHeight: "300px",
      overflow: "hidden",
      "& img": {
        objectFit: "cover",
        width: "100%",
        height: "300px"
      }
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    TitlePage: {
      fontSize: "40px",
      color: "#151756",
      margin: "25px 0 15px",
      fontWeight: "900"
    },
    subTitlePage: {
      fontSize: "20px",
      color: "#151756",
    },
    TitleCard: {
      fontSize: "25px",
      color: "#151756",
      fontWeight: "900"
    },
    subTitleCard: {
      fontSize: "15px",
      color: "#151756",
    },
    listEpisodes: {
      "& ul": {
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        "& li": {
          padding: "7px",
          listStyle: "none",
  
          "& a": {
            color: "#151756",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
            padding: "15px 20px",
            border: "1px solid #151756",
            borderRadius: "10px",
            display: "block",
            transition: "all 0.3s ease-in-out"
          },
          "&:hover": {
            transition: "all 0.3s ease-in-out",
            "& a": {
              color: "#fff",
              background: "#151756",
              transition: "all 0.3s ease-in-out"
            },
          }
        }
      }
    },
    listCard: {
      "& ul": {
        padding: "10px 15px",
      },
      "& li ": {
        fontSize: "15px"
      }
    }
  }));
 