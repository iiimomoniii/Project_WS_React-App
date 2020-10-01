import React from 'react';
import { Link } from 'react-router-dom';
import './form.css';
export default class ShowPage extends React.Component {
    render () {
        const { notes } = this.props;

        if (!notes) {
            return null;
        }

        return (
            <div>
                <h1>{ notes.title } </h1>
                <div className="note-created">{ notes.body } </div>
            </div>
        )
    }
}