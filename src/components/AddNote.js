import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import '../css/home.css'

const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: '', description: '', tag: '' })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: '', description: '', tag: '' });
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container my-3 text-white addNote">
                <h2 className='border-bottom'>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required placeholder='Your title here (𝘮𝘪𝘯 5 𝘤𝘩𝘢𝘳𝘴)'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required placeholder='Your description here (𝘮𝘪𝘯 5 𝘤𝘩𝘢𝘳𝘴)' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} placeholder='Tag (optional)' />
                    </div>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote