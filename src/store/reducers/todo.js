import * as ACTIONS from "../actions/types"

const initState = {
    doneData: [],
    undoneData: [],
    loading: false,
    error: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action = {}) => {
    switch(action.type) {
        case ACTIONS.LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }
        }
        case ACTIONS.FETCH_TODO: {
            return {
                ...state,
                doneData: action.payload.done,
                undoneData: action.payload.undone,
                loading: false
            }
        }
        case ACTIONS.DELETE_TODO: {
            return {
                ...state,
                undoneData: [...state.undoneData.slice(0, action.payload),...state.undoneData.splice(action.payload + 1)]
            }
        }
        case ACTIONS.ADD_TODO: {
            return {
                ...state,
                undoneData: action.payload.concat(state.undoneData)
            }
        }
        case ACTIONS.UPDATE_CANCEL_TODO: {
            return {
                ...state,
                undoneData: state.undoneData.map(todo => (todo.id === action.payload.id) ? action.payload : todo)
            }
        }
        case ACTIONS.UPDATE_COMPLETE_TODO: {
            return {
                ...state,
                doneData: state.doneData.map(todo => (todo.id === action.payload.id) ? action.payload : todo)
            }
        }
        case ACTIONS.ACTION_COMPLETE_TODO: {
            return {
                ...state,
                doneData: action.payload.data.concat(state.doneData),
                undoneData: [...state.undoneData.slice(0, action.payload.index),...state.undoneData.splice(action.payload.index + 1)]
            }
        }
        case ACTIONS.ACTION_CANCEL_TODO: {
            return {
                ...state,
                undoneData: action.payload.data.concat(state.undoneData),
                doneData: [...state.doneData.slice(0, action.payload.index),...state.doneData.splice(action.payload.index + 1)]
            }
        }
        default: {
            return state
        }
    }
};