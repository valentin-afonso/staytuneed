import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  items: { url: string; title: string }[];
}

export default function BlocBreadcrumb({ items }: BreadcrumbProps) {
  const listItems = items.map((item, index) => (
    <>
      {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
      <BreadcrumbItem key={index}>
        {index === items.length - 1 ? (
          <BreadcrumbPage>{item.title}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
        )}
      </BreadcrumbItem>
    </>
  ));
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>{listItems}</BreadcrumbList>
    </Breadcrumb>
  );
}
