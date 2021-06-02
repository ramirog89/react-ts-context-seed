import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/provider';

import NoteList from './views/pages/NoteList';

function App() {
  return (
		<ContextProvider>
			<Router>
				<Switch>
					<Route
						path={'/'}
						exact={true}
						render={() => <NoteList />}
					/>
				</Switch>
			</Router>
		</ContextProvider>
  );
}

export default App;
