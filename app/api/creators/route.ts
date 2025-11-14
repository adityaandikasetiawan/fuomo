import { NextResponse } from "next/server";

export async function GET() {
  const creators = [
    { id: "c1", name: "Kara", title: "Illustrator", description: "Digital illustrations and concept art" },
    { id: "c2", name: "Rafi", title: "3D Artist", description: "Stylized characters and environments" },
    { id: "c3", name: "Nisa", title: "Graphic Designer", description: "Branding and posters" },
    { id: "c4", name: "Bimo", title: "Photographer", description: "Street and portrait photography" }
  ];
  return NextResponse.json(creators);
}