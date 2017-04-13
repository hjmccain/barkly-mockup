import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import logo from '../../public/assets/img/barklypets-logo-25.svg';
import background from '../../public/assets/img/header-background.jpg';
import '../style/signup_header.css';

class SignupHeader extends React.Component {
  constructor() {
    super();
    this.state = { showForm: 'modal hidden' }
  }

  toggleShow(boolean) {
    console.log(boolean)
    if (boolean) {
      this.setState({ showForm: 'modal visible'})
    } else {
      this.setState({ showForm: 'modal hidden'})
    }
    console.log(this.state.showForm)
  }

  render() {
    return (
      <div className="header-container">
        <img src={logo} alt="Barkly Pets"></img>
        <h2>Experience the on-demand pet care Park Slope knows and trusts!</h2>
        <p>Sign up today for a free dog walk!</p>
        <section>
          <input type="text"></input>
          <input type="text"></input>
          <button onClick={() => {this.toggleShow(true)}}>Get Started</button>
        </section>
        <div className={this.state.showForm}>
          <button onClick={() => {this.toggleShow(false)}}>Close</button>
        </div>
      </div>
    )
  }
}

export default SignupHeader;
