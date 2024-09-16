import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlocFaq({ items }: any) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item: any) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const faq_items = items.map((item: any) => (
    <AccordionItem key={item.id} value={item.id}>
      <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
      <AccordionContent>
        <p className="text-base">{item.answer}</p>
      </AccordionContent>
    </AccordionItem>
  ));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Accordion className="mt-4" type="single" collapsible>
        {faq_items}
      </Accordion>
    </>
  );
}
