
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get answers to the most common questions about SpotDeal
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-gray-900 dark:text-white">
            How do I redeem a deal at a restaurant?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            Simply show the deal on your phone to the restaurant staff when you arrive. They'll verify the offer in our system and apply the discount to your order. Make sure to check any specific terms or conditions for each deal.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-gray-900 dark:text-white">
            Is SpotDeal free to use?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            Yes! SpotDeal is completely free for users. We partner with restaurants to bring you exclusive deals at no cost to you. There are no hidden fees, subscription charges, or premium memberships required.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left text-gray-900 dark:text-white">
            How often are new deals added?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            New deals are added daily! Our restaurant partners regularly update their offers, and we also feature special flash deals and limited-time promotions. Enable notifications to never miss out on the latest savings.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left text-gray-900 dark:text-white">
            Can I use multiple deals at the same restaurant?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            This depends on the specific restaurant's policy. Most deals cannot be combined with other offers, but some restaurants may allow it. Always check the deal details and ask the restaurant staff if you're unsure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left text-gray-900 dark:text-white">
            How do I verify my student status for student deals?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            To access exclusive student deals, you'll need to verify your student status through our secure verification system. Simply upload a photo of your student ID or enrollment verification, and you'll gain access to all student discounts within 24 hours.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left text-gray-900 dark:text-white">
            What if a restaurant doesn't honor my deal?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            If you encounter any issues with redeeming a deal, please contact our support team immediately through the app or website. We'll work with the restaurant to resolve the issue and ensure you receive your discount or provide alternative compensation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
