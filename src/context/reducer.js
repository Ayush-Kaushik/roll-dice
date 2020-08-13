import initialState from './initialState';
import {
    INCREMENT_DICE_COUNT,
    DECREMENT_DICE_COUNT,
    INCREMENT_DICE_FACE,
    DECREMENT_DICE_FACE,
    SET_DICE_ROLL,
    RESET
} from './actionType';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_DICE_COUNT:
            return {
                ...state,
                numDice: state.numDice + 1
            };

        case DECREMENT_DICE_COUNT:
            return {
                ...state,
                numDice: state.numDice - 1
            };

        case INCREMENT_DICE_FACE:
            return {
                ...state,
                numFace: state.numFace + 1
            };

        case DECREMENT_DICE_FACE:
            return {
                ...state,
                numFace: state.numFace - 1
            };

        case SET_DICE_ROLL:
            return {
                ...state,
                resultArray: action.payload
            }

        case RESET:
            return {
                numDice: 1,
                numFace: 6,
                resultArray: [],
                diceTotal: 0,
                diceRoll: 0
            };

        default:
            return state;

    }

}

export default reducer;