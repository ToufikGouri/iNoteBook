import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "658a8a687834b5c50e14f80d",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-12-26T08:10:16.208Z",
            "__v": 0
        },
        {
            "_id": "658d1fec4a8700e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
        {
            "_id": "658d1fec4a8700e0560csabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
        {
            "_id": "658d1ffec4a8700e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
        {
            "_id": "658d1fec4a870f0e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
        {
            "_id": "658d1fec4a8f700e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
        {
            "_id": "658d1fec4a8700ef0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "658d1fec4a8700ef0560cdsabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }   

    // Delete a note
    const deleteNote = () => {

    }
    // Edit a note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;