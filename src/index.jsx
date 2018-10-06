import React    from 'react';
import ReactDOM from 'react-dom';
import { hot }  from 'react-hot-loader';

import './index.scss';
import App from './app/App';


let HotApp = App;
if (process.env.NODE_ENV === 'development') {
    HotApp = hot(module)(App);
}

window.addEventListener('load', function() {
    ReactDOM.render(<HotApp/>, document.getElementById('app-root'));
});
