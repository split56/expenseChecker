import React from 'react'
import TabContent from './TabContent'
import WalletTab from './tabs/WalletTab';
import HomeTab from './tabs/HomeTab';
import GoalTab from './tabs/GoalTab'
import HistoryTab from './tabs/HistoryTab';
import CalendarTab from './tabs/CalendarTab';
function TabOutlet({activeTab,setActiveTab}) {
  return (
    <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <HomeTab setActiveTab={setActiveTab}/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <WalletTab/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <GoalTab setActiveTab={setActiveTab}/>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <HistoryTab setActiveTab={setActiveTab}/>
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <CalendarTab setActiveTab={setActiveTab}/>
        </TabContent>
      </div>
  )
}

export default TabOutlet