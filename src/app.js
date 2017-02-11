import React from 'react';
import { render } from 'react-dom';

const APP_ELEMENT = document.querySelector('.app');

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello caritas!</p>
            </div>
        );
    }
}

render(<AppComponent/>, APP_ELEMENT);
