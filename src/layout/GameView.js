import React from "react";
import {connect} from 'react-redux';
import {
    INCREMENT_DICE_COUNT,
    DECREMENT_DICE_COUNT,
    INCREMENT_DICE_FACE,
    DECREMENT_DICE_FACE,
    SET_DICE_ROLL
} from '../context/actionType';
import {Button, Card} from '@material-ui/core';
import ControlLayout from "./ControlLayout";
import DiceLayout from "./DiceLayout";
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
    root: {
        display: "flex",
        minHeight: "100vh"
    },
    view: {
        display: "flex",
        flexGrow: "1",
        flexShrink: "1",
        flexBasis: "100%",
    },
    viewRight: {
        overflow: "auto"
    },
    controlWrapper: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    controlInnerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: "100px"
    }
});

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
        if (this.props.numDice > 1) {
            this.props.dispatch({type: DECREMENT_DICE_COUNT});
        }
    };

    incrementDiceCount = () => {
        this.props.dispatch({type: INCREMENT_DICE_COUNT});
    };

    incrementSides = () => {
        if (this.props.numFace < 6) {
            this.props.dispatch({type: INCREMENT_DICE_FACE});
        }
    };

    decrementSides = () => {
        if (this.props.numFace > 1) {
            this.props.dispatch({type: DECREMENT_DICE_FACE});
        }
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

        this.props.dispatch({type: SET_DICE_ROLL, payload: rowArray});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.view}>
                    <Card
                        className={classes.controlWrapper}
                        elevation={3}>
                        <div className={classes.controlInnerWrapper}>
                            <ControlLayout
                                label={"Number of Dices"}
                                decrementDice={this.decrementDiceCount}
                                incrementDice={this.incrementDiceCount}
                                diceValue={this.props.numDice}
                            />

                            <ControlLayout
                                label={"Number of Sides"}
                                decrementDice={this.decrementSides}
                                incrementDice={this.incrementSides}
                                diceValue={this.props.numFace}
                            />
                        </div>
                        <div>
                            <Button variant="outlined" onClick={this.rollDice}>
                                ROLL
                            </Button>
                        </div>


                    </Card>
                </div>

                <Card className={`${classes.view} ${classes.viewRight}`}
                      elevation={3}>
                    <DiceLayout/>
                </Card>
            </div>
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

export default connect(mapStateToProps)(withStyles(useStyles)(GameView));
