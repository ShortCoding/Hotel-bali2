"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "When is the best time to visit Bali?",
    answer: "The best time to visit Bali is during the dry season (April to October). This period offers ideal weather conditions with low humidity and minimal rainfall, perfect for outdoor activities and beach visits. July and August are peak season with higher prices and crowds."
  },
  {
    question: "Can unmarried couples stay in hotels in Bali?",
    answer: "Yes, unmarried couples can stay together in hotels in Bali. Indonesia's tourism areas, especially Bali, are very welcoming and accommodating to all tourists. Hotels don't typically ask about marital status."
  },
  {
    question: "Where should I stay in Bali with kids?",
    answer: "For families with kids, Nusa Dua is highly recommended for its safe beaches, family-friendly resorts, and calm atmosphere. Alternatively, <Link href='/hotels/ubud' className='text-primary hover:underline'>Ubud</Link> offers cultural experiences and nature activities."
  },
  {
    question: "Where's the best area for couples in Bali?",
    answer: "<Link href='/hotels/seminyak' className='text-primary hover:underline'>Seminyak</Link> is perfect for couples, offering romantic sunset beaches and luxury resorts. <Link href='/hotels/ubud' className='text-primary hover:underline'>Ubud</Link> is excellent for couples seeking a peaceful, cultural experience."
  },
  {
    question: "Which area has the best nightlife?",
    answer: "<Link href='/hotels/kuta' className='text-primary hover:underline'>Kuta</Link> is Bali's nightlife capital. <Link href='/hotels/seminyak' className='text-primary hover:underline'>Seminyak</Link> offers upscale nightlife with beach clubs, while <Link href='/hotels/canggu' className='text-primary hover:underline'>Canggu</Link> has a hip scene."
  }
];

export function FAQ() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>
        <p className="text-muted-foreground hover:text-gray-900 transition-colors">
          Everything you need to know about staying in Bali
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 hover:text-gray-900 transition-colors">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}