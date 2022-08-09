import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'
const storageTrans = JSON.parse(localStorage.getItem('transactions'))
const storageGoals = JSON.parse(localStorage.getItem('goals'))
const initialState = {
    transactions:storageTrans??[],
    goals:storageGoals??[],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction (id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction (transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
        
    }
    function addGoal (goal){
        dispatch({
            type:'ADD_GOAL',
            payload:goal
        })
    }
    function deleteGoal (id){
        dispatch({
            type:'DELETE_GOAL',
            payload:id
        })
    }
    function updateTrans (id,value){
        dispatch({
            type:'UPDATE_TRAN',
            payload:{id,value}
        })
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        goals:state.goals,
        deleteTransaction,
        addTransaction,
        addGoal,
        deleteGoal,
        updateTrans
    }}>
        {children}
    </GlobalContext.Provider>)
}