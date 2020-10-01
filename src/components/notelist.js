import React from "react";

export default class Notelist extends React.Component {
  renderNotes() {
    //รับค่า notes โดย props จาก index.js
    const notes = Object.values(this.props.notes);

    return notes.map((n) => (
      <div>
          {/* get title จาก notes*/}
        <h2>{n.title}</h2>
      </div>
    ));
  }

  //render fucntion renderNotes
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}
