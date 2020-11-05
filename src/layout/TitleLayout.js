import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from '@material-ui/core';
import Emoji from "../component/Emoji";


const useStyles = makeStyles({
    root: {
        textAlign: "center",
        padding: "0.5%"
    },
    font: {
        color: "#ffffff"
    }
});

const TitleLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={"h3"} className={classes.font}>{"ROLL DICE  "}
                <Emoji symbol={"🎲"} label={"dice"}/>
            </Typography>
        </div>
    );
};


export default TitleLayout;