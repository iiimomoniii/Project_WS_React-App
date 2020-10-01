import React from 'react';

export default class ShowPage extends React.Component {
    render () {
        const { notes } = this.props;
        return (
            <div>
                <h1>{ notes.title } </h1>
                <div>{ notes.body } </div>
            </div>
        )
    }
}