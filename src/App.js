import React, { Component } from "react";
import DisplayStudent from "./Components/DisplayStudent";
import RegisterStudent from "./Components/RegisterStudent";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentList: [],
    };
  }

  registerStudent = (student) => {
    this.setState({
      studentList: [...this.state.studentList, student],
    });
  };

  render() {
    let tableData = this.state.studentList.map((reg) => (
      <DisplayStudent student={reg} />
    ));

    return (
      <div>
        <div className="center-screen">
          <RegisterStudent registerStudentHandler={this.registerStudent} />
        </div>

        <div className="center-screen">
          <table id="students">
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Describe</th>
            </tr>
            {tableData}
          </table>
        </div>
      </div>
    );
  }
}
export default App;
