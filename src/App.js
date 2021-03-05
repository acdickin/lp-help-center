import React, { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Page from "./components/page"
import Root from "./components/root"
// import NotFound from "./components/not-found"
import { BrowserRouter, Route } from 'react-router-dom';
import "./stylesheets/main.scss"
const App = () => {
  const initalLanguage = localStorage.getItem('language') !== '' ? localStorage.getItem('language') : 'en';
  const initalMode = (localStorage.getItem('jlmode') !== '') ? localStorage.getItem('jlmode') : 'light';
  const [mode, setMode] = useState(initalMode)
  const [language, setLanguage] = useState(initalLanguage)
  // Handles setting dark/ light mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('light');
      document.body.classList.remove('dark');
      document.body.classList.add(mode);
      localStorage.setItem('jlmode', mode)
    }
  }, [mode])
  // handles language
  useEffect(() => {
    console.log("language was set to", language)
    localStorage.setItem('language', language)
  }, [language])

  return (
    <>
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>
      <div className="flex-container">
        <Header mode={mode} setMode={setMode} language={language} setLanguage={setLanguage} />
        <div className="flex grow">
          <div className="flex column w-full">
            <BrowserRouter>
              <Route exact path="/" component={Root} />
              <Route path="/:slug.html" component={(props) => <Page {...props} language={language} />} />
            </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
