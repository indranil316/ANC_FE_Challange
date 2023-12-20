import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './store.ts';
import { Provider } from 'react-redux';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
