import React from 'react';

class SomeComponent extends React.Component {

    componentDidMount(){
        document.title = 'SomeComponent'
    }

    render(){
        return(
            <h1>SomeComponent</h1>
        )
    }
}

export default SomeComponent