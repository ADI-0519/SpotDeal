
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="px-40 py-20 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-3xl transform -translate-y-12 scale-150"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get answers to the most common questions about SpotDeal and how it works
          </p>
        </div>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-slate-200/50 dark:border-slate-700/50">
              <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-semibold py-6">
                How do I redeem a deal at a restaurant?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pb-6">
                Simply show the deal on your phone to the restaurant staff when you arrive. They'll verify the offer in our system and apply the discount to your order. Make sure to check any specific terms or conditions for each deal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-slate-200/50 dark:border-slate-700/50">
              <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-semibold py-6">
                Is SpotDeal free to use?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pb-6">
                Yes! SpotDeal is completely free for users. We partner with restaurants to bring you exclusive deals at no cost to you. There are no hidden fees, subscription charges, or premium memberships required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-slate-200/50 dark:border-slate-700/50">
              <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-semibold py-6">
                How often are new deals added?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pb-6">
                New deals are added daily! Our restaurant partners regularly update their offers, and we also feature special flash deals and limited-time promotions. Enable notifications to never miss out on the latest savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-slate-200/50 dark:border-slate-700/50">
              <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-semibold py-6">
                Can I use multiple deals at the same restaurant?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pb-6">
                This depends on the specific restaurant's policy. Most deals cannot be combined with other offers, but some restaurants may allow it. Always check the deal details and ask the restaurant staff if you're unsure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-slate-200/50 dark:border-slate-700/50">
              <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-semibold py-6">
                How do I verify my student status for student deals?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pb-6">
                To access exclusive student deals, you'll need to verify your student status through our secure verification system. Simply upload a photo of your student ID or enrollment verification, and you'll gain access to all student discounts within 24 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-slate-200/50 dark:border-slate-700/50">
              <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-semibold py-6">
                What if a restaurant doesn't honor my deal?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pb-6">
                If you encounter any issues with redeeming a deal, please contact our support team immediately through the app or website. We'll work with the restaurant to resolve the issue and ensure you receive your discount or provide alternative compensation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;