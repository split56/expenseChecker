export default (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            const newDelTrans = {
                ...state,
                transactions:state.transactions.filter(transaction => transaction.id!==action.payload)
            }
            const jsonDelTransactions = JSON.stringify(newDelTrans['transactions'])
                localStorage.setItem('transactions',jsonDelTransactions)
            return newDelTrans
        case 'ADD_TRANSACTION':
            const newTrans ={
                    ...state,
                    transactions:[action.payload,
                    ...state.transactions
                    ]
                }
                const jsonTransactions = JSON.stringify(newTrans['transactions'])
                localStorage.setItem('transactions',jsonTransactions)
            return newTrans
        case 'ADD_GOAL' :
            const newGoals = {
                ...state,
                goals:[
                    action.payload,
                    ...state.goals
                ]
            }
            const jsonGoals = JSON.stringify(newGoals['goals'])
                localStorage.setItem('goals',jsonGoals)
            return newGoals
        case 'DELETE_GOAL':
            const newDelGoals ={
                ...state,
                goals:state.goals.filter(goal => goal.id!==action.payload)
            }
            const jsonDelGoals = JSON.stringify(newDelGoals['goals'])
                localStorage.setItem('goals',jsonDelGoals)
            return newDelGoals
        case 'UPDATE_TRAN' :
            const newUpTrans = {
                ...state,
                transactions:state.transactions.map(item=>(item.id===action.payload.id ? action.payload.value : item))
            }
            const jsonUpdateTransactions = JSON.stringify(newUpTrans['transactions'])
                localStorage.setItem('transactions',jsonUpdateTransactions)
            return newUpTrans
        default :
            return state 
    }
}