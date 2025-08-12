import ReactDOM from 'react-dom/client';
import AppRouter from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(<AppRouter />);
