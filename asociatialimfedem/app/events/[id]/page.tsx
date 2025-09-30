import fs from "fs";
import path from "path";
import EventDetail from "../../components/event-detail/EventDetail";

type Params = { params: { id: string } };

type Event = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  images?: string[];
};

export async function generateStaticParams() {
  const file = path.join(
    process.cwd(),
    "public",
    "assets",
    "json",
    "events.json"
  );
  const raw = fs.readFileSync(file, "utf8");
  const events = JSON.parse(raw) as Array<{ id: string }>;
  return events.map((e) => ({ id: e.id }));
}

export default function EventPage({ params }: Params) {
  const file = path.join(
    process.cwd(),
    "public",
    "assets",
    "json",
    "events.json"
  );
  const events = JSON.parse(fs.readFileSync(file, "utf8")) as Event[];
  const id = params?.id;
  if (!id) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Invalid request (missing id)</h1>
      </main>
    );
  }

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Eveniment negăsit</h1>
      </main>
    );
  }

  return (
    <main>
      <EventDetail event={event} />
    </main>
  );
}
