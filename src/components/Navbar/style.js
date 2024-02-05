import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles ((theme)=> ({
    appBar:{
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading:{
        color:'rgba(0,183,255,1)',
        textDecoration:'none',
    },
    image:{
        marginLeft: '15px',
        height: '60px',
    },
    profile: {
        display: 'flex',
        // justifyContent: 'space-between',
        width: '400px',
        justifyContent: 'end',
        gap: '16px',
    },
    toolbar:{
        display: 'flex',
        
        justifyContent: 'flex-end',
        width:'400px',
    },
    userName:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
            padding: '10px 12px',
        },
        heading: {
            fontSize: '32px',

        },
        image: {
            height: '40px',
            marginLeft: '6px'
        },
        profile: {
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '50px',
            alignItems: 'center', 
            gap: '8px'     
        },
        userName:{
            display: 'none',
        },
        toolbar: {
            alignItems: 'center',
        },
        logout: {
            fontSize: '12px',

        }
    },
}));