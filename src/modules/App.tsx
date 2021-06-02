import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/provider';

import Main from './views/common/Main';
import UseCaseList from './views/pages/UseCaseList';

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
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
