import React from 'react'

import Action from './types/Action'
import { FirstState } from './types/FirstState'

const initialState: FirstState = {

    value: 0
}



export default function counterReducer(
    state: FirstState = initialState,
    action: Action

):FirstState {
    switch (action.type) {
        case 'changeStats':
            return {
                ...state, value: state.value + 1
            }
            case 'changeStats':
            return {
                ...state, value: state.value - 1
            }
            default:
                return state;

    }
}
