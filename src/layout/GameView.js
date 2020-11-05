import React from "react";
import {connect} from 'react-redux';
import {
    INCREMENT_DICE_COUNT,
    DECREMENT_DICE_COUNT,
    INCREMENT_DICE_FACE,
    DECREMENT_DICE_FACE,
    SET_DICE_ROLL
} from '../context/types';
import labels from "../constants/labels";
import {Button, Card} from '@material-ui/core';
import ControlLayout from "./ControlLayout";
import DiceLayout from "./DiceLayout";
import {withStyles} from '@material-ui/core/styles';
import TitleLayout from "./TitleLayout";

const useStyles = () => ({
    root: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#303030"
    },
    card: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        display: "flex",
        margin: "5%",
        backgroundColor: "#424242"
    },
    title: {
        marginBottom: "2%",
        backgroundColor: "#212121"
    },
    control: {
        width: "100%",
        verticalAlign: "top",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        minHeight: "30%",
        alignItems: "center"
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
        let dices = [];
        let i = 0;

        while (i < totalDice) {
            dices.push(Math.floor(Math.random() * this.props.numFace) + 1);
            i++;
        }

        this.props.dispatch({type: SET_DICE_ROLL, payload: dices});
    };

    render() {
        const {classes} = this.props;

        return (
            <section className={classes.root}>
                <Card className={classes.title}>
                    <TitleLayout/>
                </Card>
                <Card
                    className={classes.card}>
                    <div className={classes.control}>
                        <ControlLayout
                            label={labels.NUM_DICE}
                            decrementDice={this.decrementDiceCount}
                            incrementDice={this.incrementDiceCount}
                            diceValue={this.props.numDice}
                        />
                        <div className={classes.buttonRoll}>
                            <Button variant="contained" onClick={this.rollDice}>
                                ROLL
                            </Button>
                        </div>
                        <ControlLayout
                            label={labels.NUM_SIDES}
                            decrementDice={this.decrementSides}
                            incrementDice={this.incrementSides}
                            diceValue={this.props.numFace}
                        />
                    </div>
                </Card>

                <Card className={classes.card}>
                    <DiceLayout/>
                </Card>
            </section>
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
