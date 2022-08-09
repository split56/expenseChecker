import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
function AddTransaction() {
    const {addTransaction,transactions} = useContext(GlobalContext)
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    function onlySpaces(str) {
        return /^\s*$/.test(str);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(onlySpaces(text)) {
            alert('please enter a title first')
        } else if (text.length > 20) {
            alert('please enter shorter title') 
        } else if(amount === 0) {
            alert('please enter a real amount')
        } else {
            
        const d = new Date();
        const day = d.getDay()
        const month = d.getMonth()
        const years = d.getFullYear() 
        const hour = d.getHours()
        const minute = d.getMinutes() 
        const newTransaction = {
            id:Math.floor(Math.random() * 100000000),
            time:`${hour} : ${minute} ${day}/${month+1}/${years}`,
            text,
            amount:+amount,
            desc:[],
        }
        addTransaction(newTransaction)
        setText('')
        setAmount(0)
        }
    }
    return (
        <div>
            <h3 >Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" placeholder="Enter text..."
                    value={text} onChange={(e)=>setText(e.target.value)} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" placeholder="Enter amount..."
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)} required/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction