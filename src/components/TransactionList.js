import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
function TransactionList() {
    const {transactions} = useContext(GlobalContext)
    return (
        <div className='trans-list'>
            <h3 className='history-title'>History</h3>
            <ul id="list" className="list">
                {transactions.length > 0 ? transactions.map((transaction)=>(
                    <Transaction key={transaction.id} transaction={transaction} />
                )) : <h4>Your list is empty !</h4>}
            </ul>
        </div>
    )
}

export default TransactionList