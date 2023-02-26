import { Link } from 'react-router-dom';

function Note({id, title, date}) {
    return(
        <Link to={`/edit-note/${id}`} className="bg-yellow-300 rounded-lg p-4 min-h-[256px] whitespace-pre-wrap flex flex-col justify-between">
            <span>{title.length > 45 ? (title.substr(0,45)) + "..." : title }</span>
            <div className="flex flex-row-reverse">
                <small>{date}</small>
            </div>
        </Link>
    )
}

export default Note;