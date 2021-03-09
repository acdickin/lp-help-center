import React from "react"
import { Link } from "react-router-dom"
const FOLDER_NAME = [
  "categoryfolder",
  "subcategoryfolder",
  "pagesfolder",
  "level3folder"
];
const LEAF_NAME = [
  "categoryname",
  "subcategories",
  "page",
  "level3"
];

const Sidebar = ({ navigationList }) => {

  const renderSubItem = (items, url, level) => {
    if (items) {
      return items.map(node => {
        let newUrl = (level > 0) ? url + "-" + node.url.value : node.url.value;
        if (node.system.type === "navigation_item") {
          return (
            <li key={FOLDER_NAME[level] + node.title.value} className={FOLDER_NAME[level]}>
              <div className="itemdetails canOpen">
                <span>{node.title.value}</span>
              </div>
              <ul>
                {renderSubItem(node.subitems.value, newUrl, level + 1)}
              </ul>
            </li>
          )
        } else {
          return (
            <li key={FOLDER_NAME[level] + node.title.value} className={LEAF_NAME[level]}>
              <span><Link to={"/" + newUrl + ".html"}>{node.title.value}</Link></span>
            </li >
          )
        }
      })
    }
  }
  return (
    <div className="sidebar block flex-wrap list-none" >
      <ul id="mysidebar">
        {renderSubItem(navigationList, '', 0)}
      </ul>
    </div>
  )
}
export default Sidebar;