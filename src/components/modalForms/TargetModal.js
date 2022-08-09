import React ,{useState,useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'
function TargetModal({setActiveTab}) {
    const {addGoal} = useContext(GlobalContext)
    const {goals} = useContext(GlobalContext)

    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const [time,setTime] = useState('')
    function onlySpaces(str) {
        return /^\s*$/.test(str);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const d = new Date();
        const day = d.getDay()
        const month = d.getMonth()
        const years = d.getFullYear() 
        const hour = d.getHours()
        const minute = d.getMinutes() 
        const timeStamp = new Date(time)
        if(goals.length>0) {
            alert('Please finish your previous goal first')
        } else if(onlySpaces(text)) {
            alert('Please enter a real target')
        }
        else if (amount <= 0 ){
            alert('Please enter a real number')
        }else if (timeStamp.getTime()<d.getTime()) {
            alert('Please enter a future timestamp')
        } else {
        const newGoal = {
            id:Math.floor(Math.random() * 100000000),
            time:`${hour} : ${minute}${day}/${month+1}/${years}`,
            expectedTime:timeStamp.getTime(),
            text,
            amount:+amount,
        }
        addGoal(newGoal)
        setText('')
        setAmount(0)
        setTime('')
    }
        
    }
    return (
    
    <div className='modal'>
        <h3 className='tModal-header'>
            A clear target will make your journey a lot easier !
        </h3>
        <h4>
            Think clearly, finish them one by one 
        </h4>
        <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title<br /> (what you are saving for) </label>
                    <input type="text" placeholder="Enter text..."
                    value={text} onChange={(e)=>setText(e.target.value)} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(how much will you need to accomplish your goal)</label>
                    <input type="number" placeholder="Enter amount..."
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="time">Deadline </label><br/>
                    <input type="date" placeholder="Enter time..."
                    value={time}
                    onChange={(e)=>setTime(e.target.value)} required/>
                </div>
                <button className="btn" >Add goal</button>
            </form>
    </div>
  )
}

export default TargetModal