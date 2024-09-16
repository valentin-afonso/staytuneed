import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlocFaq({ items }: any) {
  const faq_items = items.map((item: any) => (
    <AccordionItem
      key={item.id}
      value={item.id}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <AccordionTrigger className="text-lg" itemProp="name">
        {item.question}
      </AccordionTrigger>
      <AccordionContent>
        <div
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <div itemProp="text">
            <p className="text-base">{item.answer}</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  ));
  return (
    <>
      <Accordion
        className="mt-4"
        type="single"
        collapsible
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faq_items}
      </Accordion>
    </>
  );
}
