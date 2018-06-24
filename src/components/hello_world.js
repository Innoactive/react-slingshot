import React, { Component } from 'react';
import { connect } from 'react-redux';

class HelloWorld extends Component {
    render() {
        return (
            <h1>Hello World !</h1>
        );
    }
}

HelloWorld.propTypes = {

}

HelloWorld.defaultProps = {

}

export default connect()(HelloWorld);