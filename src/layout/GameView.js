import React from "react";
import {connect} from 'react-redux';
import {
    INCREMENT_DICE_COUNT,
    DECREMENT_DICE_COUNT,
    INCREMENT_DICE_FACE,
    DECREMENT_DICE_FACE,
    SET_DICE_ROLL
} from '../context/actionType';
import {Button} from '@material-ui/core';
import ControlLayout from "./ControlLayout";
import Grid from '@material-ui/core/Grid';
import DiceLayout from "./DiceLayout";

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.decrementDiceCount = this.decrementDiceCount.bind(this);
        this.incrementDiceCount = this.incrementDiceCount.bind(this);
        this.incrementSides = this.incrementSides.bind(this);
        this.decrementSides = this.decrementSides.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }

    decrementDiceCount = () => {
        this.props.dispatch({type: DECREMENT_DICE_COUNT});
    };

    incrementDiceCount = () => {
        this.props.dispatch({type: INCREMENT_DICE_COUNT});
    };

    incrementSides = () => {
        this.props.dispatch({type: INCREMENT_DICE_FACE});
    };

    decrementSides = () => {
        this.props.dispatch({type: DECREMENT_DICE_FACE});
    };

    rollDice = () => {
        const totalDice = this.props.numDice;
        let rowArray = [];
        let cellArray = [];
        let i = 0;
        let counter = 0;
        let diceCountLimit = totalDice - 1;

        while (i < totalDice) {
            if (counter < 3) {
                cellArray.push(Math.floor(Math.random() * this.props.numFace) + 1);
                counter++;
            } else {
                counter = 0;
                rowArray.push(cellArray);
                cellArray = [];
            }

            if (i === diceCountLimit) {
                if (cellArray.length < totalDice - 1) {
                    cellArray.push(Math.floor(Math.random() * this.props.numFace) + 1);
                }

                rowArray.push(cellArray);
                cellArray = [];
            }

            i++;
        }

        console.log(rowArray);
        this.props.dispatch({type: SET_DICE_ROLL, payload: rowArray});
    };

    render() {
        return (
            <React.Fragment>
                <Grid container
                      spacing={2}
                      direction="row"
                      justify="center"
                >
                    <Grid item>
                        <ControlLayout
                            decrementDice={this.decrementDiceCount}
                            incrementDice={this.incrementDiceCount}
                            diceValue={this.props.numDice}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={this.rollDice}>
                            ROLL
                        </Button>
                    </Grid>
                    <Grid item>
                        <ControlLayout
                            decrementDice={this.decrementSides}
                            incrementDice={this.incrementSides}
                            diceValue={this.props.numFace}
                        />
                    </Grid>
                </Grid>

                <Grid>
                    <DiceLayout/>
                </Grid>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        numDice: state.numDice,
        numFace: state.numFace,
        resultArray: state.resultArray,
        diceTotal: state.diceTotal,
        diceRoll: state.diceRoll
    }
}

export default connect(mapStateToProps)(GameView);
