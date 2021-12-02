import * as ACTIONS from "./types"
import { BASE_URL } from "../../utils"

const sortAscDate = (a, b) => {
    var dateA = new Date(a.created_at)
    var dateB = new Date(b.created_at)
    return dateB > dateA ? 1 : -1
}

const sortDescDate = (a, b) => {
    var dateA = new Date(a.created_at)
    var dateB = new Date(b.created_at)
    return dateA > dateB ? 1 : -1
}

export const getInitData = () => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.LOADING
        })
        fetch(BASE_URL)
            .then(res => res.json())
            .then((data) => {
                let doneList = []
                let undoneList = []
                data.forEach(element => {
                    if(element.status == 1) {
                        doneList.push(element)
                    }else{
                        undoneList.push(element)
                    }
                });
                doneList.sort(sortAscDate)
                undoneList.sort(sortDescDate)
                dispatch({
                    type: ACTIONS.FETCH_TODO,
                    payload: {
                        done: doneList,
                        undone: undoneList
                    }
                })
            })
            .catch((e) => {
                dispatch({
                    type: ACTIONS.ERROR
                })
            })
    }
}

export const removeTodoData = (index) => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: index
        })
    }
}

export const addTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: data
        })
    }
}

export const updateUndoneTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.UPDATE_CANCEL_TODO,
            payload: data
        })
    }
}

export const updateDoneTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.UPDATE_COMPLETE_TODO,
            payload: data
        })
    }
}

export const doneActionTodo = (index, data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.ACTION_COMPLETE_TODO,
            payload: {
                index,
                data: [data]
            }
        })
    }
}

export const undoneActionTodo = (index, data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTIONS.ACTION_CANCEL_TODO,
            payload: {
                index,
                data: [data]
            }
        })
    }
}