import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
//import { configureStore } from './Pages/Store';
//import logo from './logo.svg';
import { HeaderWithRouter as Header } from './Shared/Header';
import {HomePage} from './Pages/HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Shared/Styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { AskPage } from './Pages/AskPage';
// import { SearchPage } from './Pages/SearchPage';
// import { SignInPage } from './Pages/SignInPage';
// import { QuestionPage } from './Pages/QuestionPage';
// import { NotFoundPage } from './Pages/NotFoundPage';
function App() {
//going to place the main components here, we want a header, a footer, and then the center to be rendered depending on the page


  return (
      <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/search" component={SearchPage} /> */}
            <Route path="/ask">
              <Suspense
                fallback={
                  <div
                    css={css`
                      margin-top: 100px;
                      text-align: center;
                    `}
                  >
                    {' '}
                    Loading...
                  </div>
                }
              >
                {/* <AskPage /> */}
              </Suspense>
            </Route>
            {/* <Route path="/signin" component={SignInPage} />
            <Route path="/questions/:questionId" component={QuestionPage} />
            <Route component={NotFoundPage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
