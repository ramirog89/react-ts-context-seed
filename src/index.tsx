import ReactDOM from 'react-dom';
import App from './modules/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// Analytics and performance
serviceWorkerRegistration.unregister();
reportWebVitals();
