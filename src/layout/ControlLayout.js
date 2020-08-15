import React from 'react';
import {Button, InputLabel} from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    label: {
        marginBottom: "10px"
    }
});

const ControlLayout = (props) => {
    const {classes} = props;

    return (
        <Grid
            className={classes.root}
        >
            <Grid className={classes.label}>
                <InputLabel>{props.label}</InputLabel>
            </Grid>
            <Grid>
                <Button
                    variant="outlined"
                    onClick={props.incrementDice}>
                    <Add/>
                </Button>
            </Grid>

            <p>{props.diceValue}</p>

            <Grid item>
                <Button
                    variant="outlined"
                    onClick={props.decrementDice}>
                    <Remove/>
                </Button>
            </Grid>
        </Grid>
    );
};

export default (withStyles(useStyles)(ControlLayout));