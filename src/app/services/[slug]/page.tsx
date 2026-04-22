import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceDetailUI from "@/components/ServiceDetailUI";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return <ServiceDetailUI service={service} allServices={servicesData} />;
}
