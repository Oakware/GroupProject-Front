import React from 'react';
import { Provider } from 'react-redux';

import router from './router';
import { store } from '../store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                { router() }
            </Provider>
        );
    }
}
