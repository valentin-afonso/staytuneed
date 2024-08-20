import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlocFaq({ items }: any) {
  const faq_items = items.map((item: any) => (
    <AccordionItem key={item.id} value={item.id}>
      <AccordionTrigger>{item.question}</AccordionTrigger>
      <AccordionContent>{item.answer}</AccordionContent>
    </AccordionItem>
  ));
  return (
    <Accordion type="single" collapsible>
      {faq_items}
    </Accordion>
  );
}
