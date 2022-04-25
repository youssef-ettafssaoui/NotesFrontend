import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router";
import NotesService from "../services/NotesService";

const NoteDetails = () => {
    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        NotesService.get(id)
            .then(note => {
                setCurrentNote(note.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

    const handleDelete = () => {
        NotesService.remove(id)
            .then(response => {
                navigate("/");
            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
    }

    const handleEdit = () => {
        navigate(`/notes/edit/${id}`);
    }

    return (  
        <div className="note-details main-content">
        {
            currentNote && 
            <div>
                <article>
                    <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                    <div className="mb-3 font-italic metadata">
                        <span className="text-info">Updated : </span>
                        <Moment className="text-info" fromNow>{currentNote.updatedAt}</Moment>
                        <span className="text-capitalize">, {currentNote.category}</span>
                    </div>
                    <div className="mb-3">{currentNote.body}</div>
                </article>
                <div className="form-group">
                    <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                </div>

            </div>
        }
    </div>
    );
}
 
export default NoteDetails;