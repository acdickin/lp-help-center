import React, { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Page from "./components/page"
import Sidebar from "./components/sidebar"
import NotFound from "./components/not-found"
import Root from "./components/root"
import { deliveryClient } from "./config";
// import NotFound from "./components/not-found"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./stylesheets/main.scss"

const App = () => {
  const [mode, setMode] = useState('light')
  const [language, setLanguage] = useState('en')
  const [navigationList, setNavigationList] = useState(null);
  const [lookupTable, setLookupTable] = useState(new Map());

  // Handles setting dark/ light mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('light');
      document.body.classList.remove('dark');
      document.body.classList.add(mode);
      // localStorage.setItem('jlmode', mode)
    }
  }, [mode])

  // Handles language
  useEffect(() => {
    console.log("language was set to", language)
    getNavigation(language)
  }, [language])

  // Need to create a look up table so we can find the page id's
  useEffect(() => {
    if (navigationList !== null) {
      // clear out old table as the language has changed
      lookupTable.clear()
      createLookUptable(navigationList, '')
    }
  }, [navigationList])

  const createLookUptable = (list, breadcrumb) => {
    list.forEach(item => {
      // handles folders
      if (item.system.type === "navigation_item") {
        let newBreadcrumb = (breadcrumb === '') ? item.url.value : `${breadcrumb}-${item.url.value}`
        if (item.subitems.value) {
          return createLookUptable(item.subitems.value, newBreadcrumb)
        }
      }
      //handles leafs
      else {
        let url = breadcrumb + item.url.value
        setLookupTable(new Map(lookupTable.set(url, item.system.id)))
      }
    })
  }

  const getNavigation = (language) => {
    return deliveryClient
      .items()
      .languageParameter(language)
      .equalsFilter('items.system.language', language)
      .depthParameter(5)
      .equalsFilter("elements.title", 'root')
      .toObservable()
      .subscribe((response) => {
        setNavigationList(response.items[0].subitems.value)
      });
  };

  return (
    <>
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>
      <BrowserRouter>
        <div className="flex-container">
          <Header mode={mode} setMode={setMode} language={language} setLanguage={setLanguage} />
          <div className="flex grow">
            <Sidebar navigationList={navigationList} lookupTable={lookupTable} />
            <div className="flex column w-full">
              <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/:slug.html" component={(props) => <Page {...props} lookupTable={lookupTable} language={language} />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
