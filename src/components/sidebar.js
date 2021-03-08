import React, { useEffect, useState } from "react"
import { deliveryClient } from "../config";
// const FOLDER_NAME = [
//   "categoryfolder",
//   "subcategoryfolder",
//   "pagesfolder",
//   "level3folder"
// ];
// const LEAF_NAME = [
//   "categoryname",
//   "subcategories",
//   "page",
//   "level3"
// ];

const Sidebar = ({ navigationList, lookupTable }) => {
  const [NavigationList, setNavigationList] = useState({});

  const renderNavigation = (nodes, url, breadcrumb, level) => {
    console.log('gonna do stuff')
  }
  return (
    <div className="sidebar block flex-wrap list-none" >
      <ul id="mysidebar">
        {renderNavigation()}
        <div>This is where data will go</div>
      </ul>
    </div>
  )
}
export default Sidebar;