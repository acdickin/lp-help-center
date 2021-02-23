
import './App.css';
import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Page from "./components/page"
import NotFound from "./components/not-found"
import { BrowserRouter, Route } from 'react-router-dom';

const getLanguage = () => {
  const location = navigator.language;
  console.log(location.pathname);
}
const getPageData = () => {

}
const App = () => {
  getLanguage()
  let location = useLocation();

  return (
    <>
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>
      <div className="flex-container">
        <Header />
        <div className="flex grow">
          <div className="flex column p-6 w-full">
            <BrowserRouter>
              <Route path="/">
                <Page ...pageData(index) />
              </Route>

              <Route path="/*">
                <Page />
              </Route>

              <Route component={NotFound} />

            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
