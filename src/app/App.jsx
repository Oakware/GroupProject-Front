import React from 'react';
import { Provider } from 'react-redux';

import router from './router';
import { configureStore } from '../store';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
    }

    componentDidMount() {
        // this.store.dispatch();
    }

    render() {
        return (
            <Provider store={this.store}>
                { router() }
            </Provider>
        );
    }
}
