import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
export default class ShowPage extends React.Component {
  render() {
    const { notes } = this.props;

    if (!notes) {
      return null;
    }

    return (
      <div className="note-form">
        <div className="note-form-field">
          <label>Title</label>
          <input type="text" name="title" value={notes.title} />
        </div>
        <div className="note-form-field note-form-field-text">
          <textarea name="body" value={notes.body} />
        </div>
      </div>
    );
  }
}
