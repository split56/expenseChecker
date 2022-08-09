import React,{useState,useEffect} from 'react'
import {AiFillHome,AiFillInfoCircle,AiOutlineHistory,AiFillCalendar} from 'react-icons/ai'
import {FaWallet} from 'react-icons/fa'
import TabNav from './TabNav'
import TabOutlet from './TabOutlet'
import useWindowDimensions from '../../customHooks/useWindowSize'
function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [newTab,setNewTab] = useState(false)
  const {height,width} = useWindowDimensions();
  useEffect(()=>{
    if(width<600) {
      setNewTab(true)
    } else {
      setNewTab(false)
      setActiveTab('tab2')
    }
  },[width])
  return (
    <div className='glass-bg tab-container'>
      <div className='tab-content'>
            <div className='icon-holder'>
              <TabNav icon={<AiFillHome/>} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNav icon={<FaWallet/>} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNav icon={<AiFillInfoCircle/>} id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
            {newTab && <TabNav icon={<AiOutlineHistory/>} id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>} 
            <TabNav icon={<AiFillCalendar/>} id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <TabOutlet activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
    </div>
    
  )
}

export default Tab