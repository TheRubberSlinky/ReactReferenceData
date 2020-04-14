import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './Pages/Store';
//import logo from './logo.svg';
import { HeaderWithRouter as Header } from './Header';
import HomePage from './HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { AskPage } from './Pages/AskPage';
import { SalesPage } from './Pages/SalesPage';
import { SearchPage } from './Pages/SearchPage';
import { HuntingPage } from './Pages/HuntingPage';
import { ItemForm } from './Components/Forms/ItemForm';
import { SignInPage } from './Pages/SignInPage';
import { QuestionPage } from './Pages/QuestionPage';
import { NotFoundPage } from './Pages/NotFoundPage';
const store = configureStore();
const App: React.FC = () => {
  return (
    <Provider store={store}>
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
            <Route path="/Sale" component={SalesPage} />
            <Route path="/Components/Forms/ItemForm" component={ItemForm} />
            <Route path="/search" component={SearchPage} />
            <Route path="/Hunt" component={HuntingPage} />
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
            <Route path="/signin" component={SignInPage} />
            <Route path="/questions/:questionId" component={QuestionPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

const AskPage = lazy(() => import('./Pages/AskPage'));

export default App;
