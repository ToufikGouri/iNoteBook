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
            "_id": "658d1fec4a8700e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
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
            "_id": "658d1fec4a8700e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
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
            "_id": "658d1fec4a8700e0560cabdb",
            "user": "658976dc4ca9079dd1daa7be",
            "title": "New Note",
            "description": "This is my new note",
            "tag": "check",
            "date": "2023-12-28T07:12:44.790Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;