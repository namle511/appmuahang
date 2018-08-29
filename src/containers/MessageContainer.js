import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Message';
import PropTypes from 'prop-types';
class MessageContainer extends Component {
  render() {

    return (
      <Message message={this.props.messages}/>
    );
  }

}

MessageContainer.propTypes = {
    messages: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}



export default connect(mapStateToProps, null)(MessageContainer);
