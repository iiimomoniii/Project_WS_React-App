import React from "react";
import { Link } from "react-router-dom";
export default class Notelist extends React.Component {
  renderNotes() {
    //รับค่า notes โดย props จาก index.js
    const notes = Object.values(this.props.notes);

    return notes.map((n) => (
      <div>
          {/*ทำ Link ไปยังหน้า show.js*/}
        <h2><Link to={`/notes/${n._id}`}>{n.title}</Link></h2>
      </div>
    ));
  }

  //render fucntion renderNotes
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}
