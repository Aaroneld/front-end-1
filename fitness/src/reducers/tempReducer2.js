import { PLACEHOLDER_ACTION2 } from '../actions/tempAction2'

const initState = {
    error: "",
    loading: false,
    tempArr: []
}

export function tempReducer2(state = initState, action){
    switch(action.type){

        case PLACEHOLDER_ACTION2:
            return {
                ...state,
                tempArr: [...state.tempArr, {tempText: action.payload}]
            }

        default:
            return state
    }
}