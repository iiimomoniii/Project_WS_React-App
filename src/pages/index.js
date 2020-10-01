import React from "react";
import NoteList from "../components/notelist";
//สร้าง IndexPage
export default class IndexPage extends React.Component {
  //
  render() {
    //props เป็นจุดที่ทำให้ React component นึง สามารถ pass ข้อมูลต่างๆ ไปอีก component นึงได้ครับ
    const notes = Object.values(this.props.notes);
    return (
      <div>
        <h1>Notes</h1>
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}
