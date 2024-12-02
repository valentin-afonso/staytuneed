import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface BreadcrumbProps {
  items: { url: string; title: string }[];
}

export default function BlocBreadcrumb({ items }: BreadcrumbProps) {
  const listItems = items.map((item, index) => (
    <Fragment key={index}>
      {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
      <BreadcrumbItem>
        {index === items.length - 1 ? (
          <BreadcrumbPage>{item.title}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
        )}
      </BreadcrumbItem>
    </Fragment>
  ));
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>{listItems}</BreadcrumbList>
    </Breadcrumb>
  );
}
