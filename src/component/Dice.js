import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: '0.5px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 50,
        width: 50
    },
});


const Dice = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div key={props.diceValue}>
                <img className={classes.root} src={require(`../../assets/dice0${props.diceValue}.png`)}
                     alt={props.diceValue}/>
            </div>
        </React.Fragment>
    )
}

export default (Dice);