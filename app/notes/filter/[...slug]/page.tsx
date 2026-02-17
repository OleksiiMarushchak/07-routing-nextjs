import NotesClient from "../../Notes.client";

type Props = {
  params: { tag?: string[] };
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  // Якщо "all" — не передавати тег у NotesClient
  const tag = resolvedParams.tag?.[0] === "all" ? undefined : resolvedParams.tag?.[0];
  return <NotesClient tag={tag} />;
}
