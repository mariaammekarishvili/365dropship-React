import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const ProfilePage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };



    return (
        <div className={"profile-page"}>

            <Typography variant="h3" component="h3" align={"center"} gutterBottom>
                Loading...
            </Typography>
        </div>
    )
}

export default ProfilePage;