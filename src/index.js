import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(AppRouter());
