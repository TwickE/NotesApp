import React from "react"
import trashIcon from "../assets/trash.svg"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    // Your onClick event handler here
                    onClick={() => props.deleteNote(note.id)}
                >
                    {/* <i className="gg-trash trash-icon"></i> */}
                    <img className="trash-icon" src={trashIcon}></img>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes App</h3>
                <button className="new-note" onClick={props.newNote}>📝 Create a New Note</button>
            </div>
            {noteElements}
        </section>
    )
}
