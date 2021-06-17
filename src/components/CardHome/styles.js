import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
      padding: '0',
      background: '#fff',
      boxShadow: 'none',
      borderRadius: '10px',
      overflow: 'hidden',
      height: '250px',
      '& .MuiCardContent-root': {
        padding: '15px 15px 15px 30px',
      },
    },
    media: {
      position: 'relative',
      '& img': {
        objectFit: 'cover',
        height: '250px',
        width: ' 100%',
      },
      '&:before': {
        content: `""`,
        position: 'absolute',
        background: 'rgba(0,0,0,.55)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover': {
        '&:before': {
          background: 'rgba(0,0,0,.05)',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    LinkCard: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '3px solid #fff',
      padding: '12px 25px',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#fff',
      textDecoration: 'none',
      zIndex: '99',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        background: '#fff',
        color: '#000',
        transition: 'all 0.3s ease-in-out',
      },
    },
  }));