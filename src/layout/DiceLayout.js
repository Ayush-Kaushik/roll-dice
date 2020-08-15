import React from 'react';
import {connect} from 'react-redux';
import Dice from '../component/Dice';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    }
});

const DiceLayout = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid className={classes.root}>
                {console.log(props.resultArray)}
                {props.resultArray.map((cellArray, index) => {
                    return (
                        <Grid
                            className={classes.row}
                            key={index}
                        >
                            {cellArray.map((cell) => {
                                return <Grid item>
                                    <Dice
                                        key={index}
                                        diceValue={cell}/>
                                </Grid>
                            })}

                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    );
};


const mapStateToProps = (state) => {
    return {
        resultArray: state.resultArray,
    }
}

export default connect(mapStateToProps)(DiceLayout);