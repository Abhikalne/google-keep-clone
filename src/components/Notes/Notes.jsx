import React, { useContext, useRef } from "react";
import Note from "../NoteDetail/Note";
import { DataContext } from "../../Context/DataProvider";
import "./_notes.css";

const Notes = () => {
  const { notes, deleteNotes, setNotes } = useContext(DataContext);
  const dragNote = useRef(0);
  const draggedOverNote = useRef(0);
  const handleSort = () => {
    const result = Array.from(notes);
    const [removed] = result.splice(dragNote.current, 1);
    result.splice(draggedOverNote.current, 0, removed);
    setNotes(result);
  };

  return (
    <div className="note_container">
      {notes.map((note, index) => (
        <div
          className="note"
          key={index}
          draggable
          onDragStart={() => (dragNote.current = index)}
          onDragEnter={() => (draggedOverNote.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
          style={{ backgroundColor: note.selectedColor }}
        >
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            list={note.listItem}
            onDelete={deleteNotes}
          />
        </div>
      ))}
    </div>
  );
};

export default Notes;
