import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import logo from '../../public/assets/img/barklypets-logo-25.svg';
import background from '../../public/assets/img/header-background.jpg';
import '../style/signup_header.css';

const SignupHeader = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Barkly Pets"></img>
      <h2>Experience the on-demand pet care Park Slope knows and trusts!</h2>
      <p>Sign up today for a free dog walk!</p>
      <form>
        <input type="text"></input>
        <input type="text"></input>
        <button type="submit">Get Started</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  modalVisible: state.modalVisible
})

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => {dispatch(actions.showModal()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupHeader);
