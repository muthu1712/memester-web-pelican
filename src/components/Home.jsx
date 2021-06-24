// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { message } = this.props;
    return (
      <h1>{message}</h1>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    message: state.defaultReducer.message,
  };
}

export default connect(mapStateToProps)(Home);
