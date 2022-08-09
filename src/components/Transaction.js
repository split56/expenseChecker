import React,{useContext,useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Popup from 'reactjs-popup';
import ModalContent from './modalForms/ModalContent';
function Transaction({transaction}) {
    const {deleteTransaction,updateTrans} = useContext(GlobalContext)
    const [newDe,setnewDe] = useState('')
    const [editing, setEditing] = useState(false)
    const sign = transaction.amount < 0 ? '-' : '+';
    function onlySpaces(str) {
        return /^\s*$/.test(str);
    }
    const smUpdate = () => {
        if(onlySpaces(newDe)) {
            alert('please enter a new title')
        } else if (newDe.length > 20) {
            alert('please enter shorter title')
        } else {

            const newTrn = {...transaction,
            text : newDe}
        updateTrans(transaction.id,newTrn)
        setEditing(false)
        }
    }
    // const handleSubmit = () => {
    //     console.log(transaction.id,editIndex)
    //     console.log(editIndex)
    //     enEdit(newValue)
    // }
    // const handleDblClick = () => {
    //     stEdit(transaction.id)
    //     setSetting(true)
    // }
    const handleDblClick = () => {
        setEditing(true)
     }
    return (
        <div className='tran-holder'>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {editing ? (<form onSubmit={smUpdate}>
                    <input className='update-inp' value={newDe} onChange={(e)=>setnewDe(e.target.value)}/>
                </form>) : (
                    <span className='transDet' onDoubleClick={handleDblClick}>{transaction.text} </span>
                )}
                <span className='transMon'>{sign}${Math.abs(transaction.amount)}</span>
                {!editing && <>
                <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x
                </button>
                <Popup modal trigger={<button className="infor-btn" >i
                </button>} position="center center">
                     {close => <ModalContent close={close} content={transaction} />}
                </Popup></>}
            </li>
        </div>
    )
}

export default Transaction