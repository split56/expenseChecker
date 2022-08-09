import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import {ImFileEmpty} from 'react-icons/im'
import CdTimer from '../../cdClock/CdTimer'
import ProgressB from '../../ProgressB'
function GoalTab({setActiveTab}) {
    let [finish,setFinish] = useState(false) 
    const {transactions,goals,deleteGoal} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const achieved = goals[0] ? +goals[0].amount : 0
    let progress =  Math.floor((+total/achieved) * 100)
    useEffect(()=>{
        if(progress>=100) {
            setFinish(true)
        }
    },[progress, goals])
    return (
    <div className='goal-Tab'>
        {goals.length === 0 ? (
            <div className='empty_list'>
            <h3>You have not added any personal goal</h3>
            <h5 className='goal-lead'>Not ready yet ? How about checking the calendar first ?</h5>
            <ImFileEmpty/>
            <div className='goal-btns'>
                <button className='empty-btn' onClick={()=>setActiveTab('tab1')}>
                Set it
            </button>
            <button className='cal-btn' onClick={()=>setActiveTab('tab5')}>
                Check it 
            </button>
            </div>
            </div>
        ) : (
            <div className='goal-detail'>
            <h3>Some detail information about your goal</h3>
            <h4>{finish?'congrat !! you have finish this task, lets replace it !':''}</h4>
            <div className='detail-block'>
                <h4 className='goal-name'>{`Title : ${goals[0].text}`}</h4>
                <h4 className='goal-amount'>{`Amount : ${goals[0].amount}$`}</h4>
                <h4 className='goal-start'>{`From : ${goals[0].time}`}</h4>

                {!finish && (<><h4>Time left :</h4>
                <span className='goal-dl'>{<CdTimer targetDate={goals[0].expectedTime}/>}</span></>)}
                <div>
                    <h4>Your progress :</h4>
                    <ProgressB progress={progress}/>
                    <button className={`goalBtn ${finish?'fnish':'unfnish'}`} onClick={()=>deleteGoal(goals[0].id)}>remove </button>
                </div>
            </div>
            </div>
        )}
    </div>
  )
}

export default GoalTab