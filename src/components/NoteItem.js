import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import '../css/notes.css'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    if(note.tag.length < 1){
        note.tag = "none"
    }
    return (
        <>
            <div className="col-md-3">
                <div className="card my-2 note-body">
                    <div className="card-body text-white">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title text-capitalize">{note.title}</h5>
                            <i className="fa-regular fa-trash-can mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "danger"); }}></i>
                            <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                        </div>
                        <p className="card-text text-capitalize fst-italic">{note.description}</p>
                        <p className="card-text">Tag: <span className={`fw-semibold text-capitalize text-${note.tag ==='none' ? '' : 'info' }`}>{note.tag}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem