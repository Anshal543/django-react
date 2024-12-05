import React from "react";
import "../styles/CreateNoteForm.css";

interface CreateNoteFormProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CreateNoteForm = ({
  title,
  setTitle,
  content,
  setContent,
  onSubmit,
}: CreateNoteFormProps) => {
  return (
    <>
      <form action="" onSubmit={onSubmit}>
      <h1>Create Note</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateNoteForm;