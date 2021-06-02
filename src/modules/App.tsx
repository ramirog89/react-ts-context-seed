import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/provider';

import Main from './views/common/Main';
import UseCaseList from './views/pages/UseCaseList';
import UseCaseCreate from './views/pages/UseCaseCreate';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route
            path={'/'}
            exact={true}
            render={() =>
              <Main>
                <UseCaseList />
              </Main>
            }
          />
          <Route
            path={'/create'}
            exact={true}
            render={() =>
              <Main>
                <UseCaseCreate />
              </Main>
            }
          />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
