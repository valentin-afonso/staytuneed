import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IconPlusCircle from "@/ui/svg/IconPlusCircle";
import IconMinusCircle from "@/ui/svg/IconMinusCircle";

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
    <AccordionItem key={item.id} value={item.id} className="border-none">
      <AccordionTrigger className="flex justify-between items-center text-left w-full text-base sm:text-lg [&[data-state=open]>svg>path.line]:opacity-0">
        {item.question} <IconPlusCircle />
      </AccordionTrigger>
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
