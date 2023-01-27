import React from "react";

function DisplayStudent(props) {
  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.country}</td>
      <td>{props.student.describe}</td>
    </tr>
  );
}

export default DisplayStudent;
