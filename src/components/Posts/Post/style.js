
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ({
    media: {
        height: 0,
        paddingTop: '70%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard:{
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        height: '80% !important',
        position: 'relative',
        width:'100%',
        backgroundColor:'#e9eef5',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between', 
        width: '100%',
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        top: '10px',
        left: '15px',
        color: 'white',
    },
    overlay2: {
        color: 'white',
        right: '10px',
        position: 'absolute',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        marginBottom: '0px',
        color: 'purple',
        fontWeight: 'bold',
    },
    title: {
        padding: '0px 10px',
    },
    messages: {
        padding: '8px 10px',
        fontSize: '',
    },
    cardActions: {
        // padding: '0 16px 8px 16px',
        paddingTop:'12px',
        display: 'flex',
        justifyContent: 'space-around',
        color: 'red',
    }
});
