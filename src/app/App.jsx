import React from 'react';
import { Provider } from 'react-redux';

import router from './router';
import { configureStore } from '../store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore()}>
                { router() }
            </Provider>
        );
    }
}
