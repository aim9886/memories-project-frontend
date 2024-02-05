import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        container:{
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },  
}));