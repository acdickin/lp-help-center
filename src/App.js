import React, { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Page from "./components/page"
import Sidebar from "./components/sidebar"
import JumpTo from "./components/jump-to"
import NotFound from "./components/not-found"
import Root from "./components/root"

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./stylesheets/main.scss"

const App = () => {
  const [mode, setMode] = useState('light')
  const [language, setLanguage] = useState('en')
  const [lookupTable, setLookupTable] = useState(new Map());
  const [title, setTitle] = useState(null)

  // Handles setting dark/ light mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("light");
      document.body.classList.remove("dark");
      document.body.classList.add(mode);
    }
  }, [mode]);

  const createLookUptable = (list, breadcrumb) => {
    list.forEach((item) => {
      let newBreadcrumb =
        breadcrumb === "" ? item.url.value : `${breadcrumb}-${item.url.value}`;
      // handles folders
      if (item.system.type === "navigation_item") {
        if (item.subitems.value) {
          return createLookUptable(item.subitems.value, newBreadcrumb);
        }
      }
      //handles leafs
      else {
        setLookupTable(new Map(lookupTable.set(newBreadcrumb, item.system.id)));
      }
    });
  };
  return (
    <>
      <Head />
      <BrowserRouter>
        <div className="lp-container">
          <Header
            mode={mode}
            setMode={setMode}
            language={language}
            setLanguage={setLanguage}
            lookupTable={lookupTable}
          />
          <div className="flex grow">
            <Sidebar language={language} handleLookupTable={createLookUptable} />
            <div className="flex column full-width">
              <Switch>
                <Route exact path="/" component={Root} />
                <Route
                  path="/:slug.html"
                  component={(props) => (
                    <Page
                      {...props}
                      handleTitle={setTitle}
                      lookupTable={lookupTable}
                      language={language}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
            <JumpTo title={title} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
