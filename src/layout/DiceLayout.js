import React from 'react';
import {connect} from 'react-redux';
import Dice from '../component/Dice';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
});

const DiceLayout = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.root}>

                {console.log(props.resultArray)}

                {props.resultArray.map((cell, index) => {
                    return (
                        <Dice key={index} diceValue={cell}/>
                    )
                })}
            </Grid>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        resultArray: state.resultArray,
    }
}

export default connect(mapStateToProps)(DiceLayout);