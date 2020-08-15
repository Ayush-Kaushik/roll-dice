import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        borderRadius: "5px",
        margin: "10px"
    },
    image: {
        height: "100px",
        width: "100px"
    }
});


const Dice = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card
                className={classes.card}
                key={props.diceValue}
                elevation={2}>
                <img className={classes.image}
                     src={require(`../../assets/dice0${props.diceValue}.png`)}
                     alt={props.diceValue}/>
            </Card>
        </React.Fragment>
    )
}

export default (Dice);