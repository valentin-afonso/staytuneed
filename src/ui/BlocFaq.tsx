import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlocFaq({ items }: any) {
  const faq_items = items.map((item: any) => (
    <AccordionItem key={item.id} value={item.id}>
      <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
      <AccordionContent>
        <p className="text-base">{item.answer}</p>
      </AccordionContent>
    </AccordionItem>
  ));
  return (
    <Accordion className="mt-4" type="single" collapsible>
      {faq_items}
    </Accordion>
  );
}
