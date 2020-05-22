import React from 'react';
import Sidebar from "../Components/SideBar"
import ContentBlock from "../Components/ContentBlock"


function Dashboard() {
  return (
    <div style={{display:'flex'}} className="Dashboard">
     <Sidebar />
     <ContentBlock />
    </div>
  );
}

export default Dashboard;
