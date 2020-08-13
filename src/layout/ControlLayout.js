import React from 'react';
import {Paper, Button} from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const ControlLayout = (props) => {
    return (
        <Paper elevation={3}>
            <Grid container
                  direction="column"
                  justify="space-between"
                  alignItems="center"
                  spacing={2}
            >
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
        </Paper>
    );
};

export default ControlLayout;