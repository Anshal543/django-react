import { Note } from "../pages/Home";
import "../styles/Notes.css";

const NoteList = ({
  notes,
  onDelete,
}: {
  notes: Note[];
  onDelete: (id: number) => void;
}) => {
  return (
    <>
      {notes?.map((note) => (
        <div key={note.id} className="note-container">
          <p className="note-title">{note.title}</p>
          <p className="note-content">{note.content}</p>

          <p className="note-date">
            {new Date(note.created_at)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}
          </p>
          <button className="delete-button" onClick={() => onDelete(note.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default NoteList;
