import React from 'react';
import {Button, Typography} from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const useStyles = () => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    label: {
        marginBottom: "5%",
        marginTop: "5%"
    },
    font: {
        color: "#ffffff"
    }
});

const ControlLayout = (props) => {
    const {classes} = props;

    return (
        <Grid
            className={classes.root}
        >
            <Grid className={classes.label}>
                <Typography variant="h5"
                            className={classes.font}>{props.label}</Typography>
            </Grid>
            <Grid>
                <Button
                    variant="contained"
                    onClick={props.incrementDice}>
                    <Add/>
                </Button>
            </Grid>

            <Typography variant={"h4"} className={`${classes.font} ${classes.label}`}>
                {props.diceValue}
            </Typography>

            <Grid item>
                <Button
                    variant="contained"
                    onClick={props.decrementDice}>
                    <Remove/>
                </Button>
            </Grid>
        </Grid>
    );
};

export default (withStyles(useStyles)(ControlLayout));