import React from 'react'
import Link from 'gatsby-link'

import addToMailchimp from 'gatsby-plugin-mailchimp'

import validator from 'email-validator'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstNameIsNotEmpty: false,
      lastNameIsNotEmpty: false,
      emailIsNotEmpty: false,
      emailIsValid: false,
      signupIsSuccessful: false,
      retrySignup: false,
      phoneIsNotEmpty: false,
    }
  }

  _handleFirstNameChange = e => {
    if (this.fNameInput.value === '') {
      this.setState({
        firstNameIsNotEmpty: false,
      })
    } else {
      this.setState({
        firstNameIsNotEmpty: true,
      })
    }
  }

  _handleLastNameChange = e => {
    if (this.lNameInput.value === '') {
      this.setState({
        lastNameIsNotEmpty: false,
      })
    } else {
      this.setState({
        lastNameIsNotEmpty: true,
      })
    }
  }

  _verifyEmail = e => {
    let email = validator.validate(this.emailInput.value)
    if (email) {
      this.setState({
        emailIsValid: true,
      })
    } else {
      this.setState({
        emailIsValid: false,
      })
    }
  }

  _handlePhoneChange = e => {
    console.log(this.phoneInput.value)
    if (this.phoneInput.value === '') {
      this.setState({
        phoneIsNotEmpty: false,
      })
    } else {
      this.setState({
        phoneIsNotEmpty: true,
      })
    }
  }

  _handleSubmit = e => {
    e.preventDefault()
    if (this.fNameInput.value === '') {
      this.setState({
        firstNameIsNotEmpty: false,
      })
    } else {
      this.setState({
        firstNameIsNotEmpty: true,
      })
    }
    if (this.emailInput.value === '') {
      this.setState({
        emailIsNotEmpty: false,
      })
    } else {
      this.setState({
        emailIsNotEmpty: true,
      })
    }
    if (
      this.state.firstNameIsNotEmpty === true &&
      this.state.emailIsValid === true
    ) {
      let email = this.emailInput.value
      let listFields = {
        FNAME: this.fNameInput.value,
        LNAME: this.lNameInput.value,
        PHONE: this.phoneInput.value || 'No Number Supplied',
      }
      addToMailchimp(email, listFields)
        .then(data => {
          if (data.result === 'error') {
            this.setState({
              signupIsSuccessful: false,
              retrySignup: true,
            })
          } else {
            this.setState({
              signupIsSuccessful: true,
            })
          }
        })
        .catch(err => {
          this.setState({
            signupIsSuccessful: false,
            retrySignup: true,
          })
        })
    }
  }

  _handleRetry = e => {
    this.setState({
      signupIsSuccessful: false,
      retrySignup: false,
    })
  }

  render() {
    return this.state.retrySignup ? (
      <div style={{ textAlign: 'center' }}>
        <i
          className="icon fa-5x fa-times"
          style={{ color: 'tomato', width: '10em' }}
        />
        <br />
        <span>Sorry, try again</span>
        <br />
        <button className="button" onClick={this._handleRetry}>
          Try again
        </button>
      </div>
    ) : this.state.signupIsSuccessful ? (
      <div style={{ textAlign: 'center' }}>
        <i
          className="icon fa-5x fa-check"
          style={{ color: '#36bc63', width: '10em' }}
        />
        <br />
        <span>Thank You! We'll be in touch soon!</span>
        <br />
        <br />
        <Link to="/" className="button">
          Return Home
        </Link>
      </div>
    ) : (
      <div style={{ display: 'inline-block' }}>
        <form>
          <label>
            {this.state.firstNameIsNotEmpty
              ? 'First Name:'
              : 'First Name: * is required'}
            <input
              required
              type="text"
              placeholder="Sally"
              style={
                this.state.firstNameIsNotEmpty
                  ? { boxShadow: '0 0 4px #1fc28c' }
                  : { boxShadow: '0 0 4px #CC0000' }
              }
              onChange={this._handleFirstNameChange}
              ref={input => (this.fNameInput = input)}
            />
          </label>
          <label>
            {this.state.lastNameIsNotEmpty
              ? 'Last Name:'
              : 'Last Name: * is required'}
            <input
              type="text"
              placeholder="Sitwell"
              style={
                this.state.lastNameIsNotEmpty
                  ? { boxShadow: '0 0 4px #1fc28c' }
                  : { boxShadow: '0 0 4px #CC0000' }
              }
              onChange={this._handleLastNameChange}
              ref={input => (this.lNameInput = input)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              placeholder="e.g. (480)-867-5309"
              ref={input => (this.phoneInput = input)}
              style={
                this.state.phoneIsNotEmpty
                  ? { boxShadow: '0 0 4px #1fc28c' }
                  : { boxShadow: '0 0 4px #e1e1e1' }
              }
              onChange={this._handlePhoneChange}
            />
          </label>
          <label>
            {this.state.emailIsValid
              ? 'Your Email:'
              : 'Your Email: * is required'}
            <input
              style={
                this.state.emailIsValid
                  ? { boxShadow: '0 0 4px #1fc28c' }
                  : { boxShadow: '0 0 4px #CC0000' }
              }
              onChange={this._verifyEmail}
              type="email"
              placeholder="sally@bluthhomes.com"
              ref={input => (this.emailInput = input)}
            />
          </label>
          <button
            type="submit"
            style={{ width: '12.5em', margin: 'auto' }}
            className="button"
            onClick={this._handleSubmit}
          >
            {this.state.signupIsSuccessful ? 'Thank you!' : 'Request A Quote'}
          </button>
        </form>
      </div>
    )
  }
}

export default Form
