import { useEffect, useState } from "react";
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
        <div>
            <h1>List of Notes</h1>
            {
                notes && notes.map(note => (
                    <div key={note.id}>
                        <p>{note.title}</p>
                        <p>{note.body}</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default NotesList;