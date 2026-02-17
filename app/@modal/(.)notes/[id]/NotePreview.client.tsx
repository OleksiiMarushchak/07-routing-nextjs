"use client";
import Modal from "@/components/Modal/Modal";

export default function NotePreview({ note }: { note: any }) {
  return (
    <Modal onClose={() => window.history.back()}>
      <h2>{note.title}</h2>
      <p><b>Tag:</b> {note.tag}</p>
      <p>{note.content}</p>
      <p style={{fontSize:12, color:'#888'}}>Created: {note.createdAt}</p>
    </Modal>
  );
}
