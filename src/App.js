import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import { useState } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuotes = React.lazy(() => import("./pages/NewQuotes"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Quotes = React.lazy(()=>import("./pages/Quotes"))

function App() {
  const [loadedQuotes, setLoadedQuotes] = useState([]);
  const quotes = (data) => {
    setLoadedQuotes(data);
  };
  return (
    <>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <header>
          <MainHeader />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>

            <Route exact path="/quotes">
              <Quotes quotes={quotes} />
            </Route>

            <Route path="/quotes/:quotesId">
              <QuoteDetails quotes={loadedQuotes} />
            </Route>

            <Route path="/new-quotes">
              <NewQuotes />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Suspense>
    </>
  );
}

export default App;
