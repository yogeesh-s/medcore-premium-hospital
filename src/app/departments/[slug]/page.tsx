import { departmentsData } from "@/data/departments";
import { notFound } from "next/navigation";
import DepartmentDetailUI from "@/components/DepartmentDetailUI";

export async function generateStaticParams() {
  return departmentsData.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DepartmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = departmentsData.find((d) => d.slug === slug);

  if (!department) {
    return notFound();
  }

  return <DepartmentDetailUI department={department} allDepartments={departmentsData} />;
}
