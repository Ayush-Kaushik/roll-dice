import React from 'react';
import {connect} from 'react-redux';
import Dice from '../component/Dice';
import Grid from '@material-ui/core/Grid';

const DiceLayout = (props) => {
    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                {props.resultArray.map((cellArray, index) => {
                    return (
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            {cellArray.map((cell) => {
                                return <Grid item><Dice key={index} diceValue={cell}/></Grid>
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