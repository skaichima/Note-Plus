import { Link } from 'react-router-dom';
import { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <Link to={`/edit-note/${this.props.id}`} className="bg-yellow-300 rounded-lg p-4 min-h-[256px] whitespace-pre-wrap flex flex-col justify-between">
                <span>{this.props.title.length > 45 ? (this.props.title.substr(0,45)) + "..." : this.props.title }</span>
                <div className="flex flex-row-reverse">
                    <small>{this.props.date}</small>
                </div>
            </Link>
        )
    }
}

export default Note;