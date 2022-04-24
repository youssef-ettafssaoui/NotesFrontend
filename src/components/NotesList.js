import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotesService from "../services/NotesService";

const NotesList = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getAll()
            .then(response => {
                console.log('printing resposne', response.data);
                setNotes(response.data);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }, []);

    return (  
        <div className="main-content">
            <h2>List of Notes :</h2>
            <h5>This App is developed using ReactJs and Spring Boot</h5>
            <div className="notes-list mt-4">
                {
                    notes && notes.map(note => (
                        <div key={note.id} className="notes-preview mt-3">
                            <Link to="#">
                                <h5 className="primary-color text-capitalize">{note.title}</h5>
                                <p>{note.body}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default NotesList;