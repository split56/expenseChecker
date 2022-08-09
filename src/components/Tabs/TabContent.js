import React from "react";
 
const TabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="tab-content-container glass-bg">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;