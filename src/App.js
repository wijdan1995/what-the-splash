import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import configStore from './store' 

const store = configStore()
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <ImageGrid />
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
