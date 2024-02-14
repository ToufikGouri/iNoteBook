import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import '../css/notes.css'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    if (note.tag.length < 1) {
        note.tag = "none"
    }
    return (
        <>
            <div className="modal fade" id={`exampleModal${note._id}`} tabIndex="-1" aria-labelledby={`exampleModal${note._id}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#212121" }}>
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Remove Item</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ filter: "invert(1)" }}></button>
                        </div>
                        <div className="modal-body mb-1">
                            Are you sure you want to remove this note?
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "danger"); }} type="button" className="btn btn-primary" data-bs-dismiss="modal">Remove</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card my-2 note-body">
                    <div className="card-body text-white">
                        <div className="d-flex align-items-center position-relative">
                            <h5 className="card-title text-uppercase" style={{ marginRight: "60px" }}>{note.title}</h5>
                            <div className='d-flex position-absolute end-0 top-0 '>
                                <i className="fa-regular fa-trash-can mx-2" data-bs-toggle="modal" data-bs-target={`#exampleModal${note._id}`}></i>
                                <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                            </div>
                        </div>
                        <p className="card-text text-capitalize fst-italic">{note.description}</p>
                        <p className="card-text">Tag: <span className={`fw-semibold text-capitalize text-${note.tag === 'none' ? '' : 'info'}`}>{note.tag}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem