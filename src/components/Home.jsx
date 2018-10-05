import React from 'react';
import {connect} from 'react-redux'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = 'Hi'
    }

    render() {
        return (
            <h2>{this.state} - {this.props.propvalue}</h2>
        )
    }
}
function mapStateToProps(state) {
    return {
        propvalue: state,
    };
}


export default connect(mapStateToProps)(Home);