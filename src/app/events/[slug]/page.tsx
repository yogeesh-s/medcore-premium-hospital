import { hospitalEvents } from "@/data/events";
import { notFound } from "next/navigation";
import EventsDetailUI from "@/components/EventsDetailUI";

export async function generateStaticParams() {
  return hospitalEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = hospitalEvents.find((e) => e.slug === slug);

  if (!event) {
    return notFound();
  }

  return <EventsDetailUI event={event} />;
}
