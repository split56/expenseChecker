import React from 'react'
import {MdPersonOutline} from 'react-icons/md'
import {FaWallet} from 'react-icons/fa'
import Popup from 'reactjs-popup';
import TargetModal from '../../modalForms/TargetModal';
function HomeTab({setActiveTab}) {
    let today=new Date();
    const newYear=new Date(today.getFullYear() + 1, 1, 1);
    if (today.getMonth()==11 && today.getDate()>25) 
    {
        newYear.setFullYear(newYear.getFullYear()+1); 
    }  
    const one_day=1000*60*60*24;
    let timeLeft = Math.ceil((newYear.getTime()-today.getTime())/(one_day)) 

  return (
    <div className='home-container'>
        <h3 className='home-header'>
            {`Don't you know, there are only ${timeLeft} day(s) left until ${today.getFullYear()+1} comes !`}
        </h3>
        <h4 className='home-subhead'>Start your saving and prepare for the future</h4>
        <div className='home-actions'>
            <div className='home-left'>
                <h5>Write a Note for yourself !</h5>
                <div className='home-left-content'>
                    <Popup modal trigger={<div className='icon-box'>
                    <MdPersonOutline/>
                </div>} position="center center">
                     {close => <TargetModal close={close} setActiveTab={setActiveTab}/>}
                </Popup>
                    
                </div>
            </div>
            <span className='seperate'></span>
            <div className='home-right' onClick={()=>setActiveTab('tab2')}>
                    <h5>Let's jump right in !</h5>
                <div className='home-right-content'>
                <div className='icon-box'>
                    <FaWallet/>
                </div>
                </div>
            </div>
        </div>
            <div className='endLine'></div>
    </div>
  )
}

export default HomeTab