import { fetchNoteById } from "@/lib/api";
import NotePreview from "./NotePreview.client";

export default async function NotePreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return <NotePreview note={note} />;
}
