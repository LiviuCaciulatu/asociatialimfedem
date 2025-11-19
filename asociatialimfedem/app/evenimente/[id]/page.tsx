import events from '@/public/assets/json/events.json';
import EventDetail from '../../components/event-detail/EventDetail';

type Params = { params: { id: string } };

type Event = {
  id: string;
  title: string;
  description?: string | string[];
  image?: string;
  images?: string[];
};

export function generateStaticParams() {
  return events.map((e) => ({ id: e.id }));
}

export default function EventPage({ params }: Params) {
  const { id } = params;

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
