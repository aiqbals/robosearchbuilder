import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasErr: false
    }

    componentDidCatch(error, info) {
        this.setState( { hasErr: true } )
    }

    render() {
        return this.state.hasErr ? 
                <h1> Ooops! somthing wrong..</h1> :
                    this.props.children

    }
}

export default ErrorBoundry;