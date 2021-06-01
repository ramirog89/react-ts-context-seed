import NoteList from './views/pages/NoteList';

import { ContextProvider } from './context/provider';

function App() {
  return (
	<ContextProvider>
		<div className="App">
			<header>
				Notas
			</header>
			<div>
				<NoteList />
			</div>
		</div>
	</ContextProvider>
  );
}

export default App;
