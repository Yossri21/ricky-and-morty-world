import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  mainContainerHome: {
    padding: '100px 25px',
  },
  mainContainer: {
    width: '100%',
    maxWidth: '1180px',
  },
  TitlePage: {
    fontSize: '40px',
    color: '#151756',
    margin: '25px 0 15px',
    fontWeight: '900',
  },
  btnView: {
    color: '#438845',
    border: '1px solid #438845',
    fontWeight: 'bold',
    textTransform: 'none',
    position: 'relative',
    zIndex: '9',
    '&:hover': {
      background: '#438845',
      border: '1px solid #438845',
      color: '#fff',
    },
  },
}));
