import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    contentNight: {
        flexGrow: 1,
        backgroundColor: '#787772',
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
}));