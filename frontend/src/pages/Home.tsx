import { useEffect, useState } from "react";
import api from "../api";
import CreateNoteForm from "../components/CreateNoteForm";
import NoteList from "../components/NoteList";

export interface Note {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  author: string;
}

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await api.get("/api/notes/");
    if (response.status === 200) {
      setNotes(response.data);
    } else {
      alert("Error");
    }
  };

  const deleteNote = async (id: number) => {
    const response = await api.delete(`/api/notes/${id}`);
    if (response.status === 200) {
      getNotes();
    } else {
      alert("Error");
    }
  };

  const createNote = async () => {
    const response = await api.post("/api/notes/", { title, content });
    if (response.status === 201) {
      getNotes();
    } else {
      alert("Error");
    }
  };

  return (
    <div>
      <CreateNoteForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        onSubmit={createNote}
      />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default Home;
