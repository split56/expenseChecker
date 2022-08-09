import React from 'react'

function TabNav({ id, icon, activeTab, setActiveTab }) {
    const handleClick = () => {
   setActiveTab(id);
 };
  return (
    <div onClick={handleClick} className={activeTab === id ? "active" : "tabIcon"}>
     { icon }
   </div>
  )
}

export default TabNav