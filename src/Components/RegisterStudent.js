import React, { Component } from "react";
import "./register.css";

export class RegisterStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", country: "US", describe: "--", };
  }

  handleNameChange = (event) => this.setState({ name: event.target.value });
  handleCountryChange = (event) =>
    this.setState({ country: event.target.value });
  handleDescribeChange = (event) =>
    this.setState({ describe: event.target.value });

  handleFormSubmission = (event) => {
    if (this.validateForm()) {
      this.props.registerStudentHandler(this.state);
      this.setState({ name: "", country: "US", describe: "--" });
    }
    event.preventDefault();
  };

  validateForm = () =>  this.state.name || this.state.country || this.state.describe;
  
  render() {
    const { name, country, describe } = this.state;
    return (
      <form onSubmit={this.handleFormSubmission}>
        <table>
          <caption>Registration Form</caption>
          <tr>
            <th>Name</th>
            <td><input type="text" value={name} onChange={this.handleNameChange} /></td>
          </tr>
          <tr>
            <th>Country</th>
            <td>
              <select value={country} onChange={this.handleCountryChange}>
                <option value="India">India</option>
                <option value="US">US</option>
                <option value="Spain">Spain</option>
                <option value="other">Other</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Describe</th>
            <td><textarea value={describe} onChange={this.handleDescribeChange}></textarea> </td>
          </tr>
          <tr className="center"><td colSpan="2"><button type="submit">Register</button></td></tr>
        </table>
      </form>
    );
  }
}
export default RegisterStudent;
