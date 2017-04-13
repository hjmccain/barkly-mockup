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
        <div className="blur"></div>
        <img src={logo} alt="Barkly Pets"></img>
        <h2>Experience the on-demand pet care Park Slope knows and trusts!</h2>
        <p>Sign up today for a free dog walk!</p>
        <section>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <button onClick={() => {this.toggleShow(true)}}>Get Started</button>
        </section>
        <div className={this.state.showForm}>
          <button onClick={() => {this.toggleShow(false)}}>Close</button>
          <h1 className="thanks">Thanks, Barkly!</h1>
          <h3>
            Best,
            <br/>
            Hannah
          </h3>
        </div>
      </div>
    )
  }
}

export default SignupHeader;
