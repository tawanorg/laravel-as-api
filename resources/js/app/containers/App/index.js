import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import GlobalStyles from '../../styles/global-styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  )
}

export default App;
