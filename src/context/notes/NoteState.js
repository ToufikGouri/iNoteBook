import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4OTc2ZGM0Y2E5MDc5ZGQxZGFhN2JlIn0sImlhdCI6MTcwMzUxMzQ5N30.qvKsz1b3i7BbKTf-oCgnngA_VL2ODW5z8CAZ9CVMcnA"
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4OTc2ZGM0Y2E5MDc5ZGQxZGFhN2JlIn0sImlhdCI6MTcwMzUxMzQ5N30.qvKsz1b3i7BbKTf-oCgnngA_VL2ODW5z8CAZ9CVMcnA"
            },
            body: JSON.stringify({ title, description, tag }),
        });

        const json = await response.json()

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
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4OTc2ZGM0Y2E5MDc5ZGQxZGFhN2JlIn0sImlhdCI6MTcwMzUxMzQ5N30.qvKsz1b3i7BbKTf-oCgnngA_VL2ODW5z8CAZ9CVMcnA"
            },
        });
        const json = await response.json();
        // console.log(json);

        const newNotes = notes.filter((note) => note._id !== id)
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4OTc2ZGM0Y2E5MDc5ZGQxZGFhN2JlIn0sImlhdCI6MTcwMzUxMzQ5N30.qvKsz1b3i7BbKTf-oCgnngA_VL2ODW5z8CAZ9CVMcnA"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i];
            if (element._id === id) {
                newNotes[i].title = title
                newNotes[i].description = description
                newNotes[i].tag = tag
                break;
            }
        }
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;