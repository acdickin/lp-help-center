import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { NAVIGATION_QUERY } from '../queries/navigation'

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


const Sidebar = ({ language, handleLookupTable }) => {
  const [navigationArray, setNavigationArray] = useState([])

  const renderSubItem = (items, url, level) => {
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


  const { error, data } = useQuery(NAVIGATION_QUERY, { fetchPolicy: 'no-cache', variables: { languageCodeName: language } })

  useEffect(() => {
    if (data) {
      setNavigationArray(data.getNavigation)
      handleLookupTable(data.getNavigation, '')
    }
  }, [data])

  if (navigationArray) {
    return (
      <div className="sidebar block flex-wrap list-none" >
        <ul id="mysidebar">
          {renderSubItem(navigationArray, '', 0)}
        </ul>
      </div>
    )
  } else if (error) {
    return <div>{error}</div>
  } else {
    return null
  }
}
export default Sidebar;