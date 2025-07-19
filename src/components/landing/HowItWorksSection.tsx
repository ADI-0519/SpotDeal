import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: 1,
    title: "Discover",
    description:
      "Browse through hundreds of restaurants and food deals near your location with our smart discovery system",
  },
  {
    icon: Filter,
    number: 2,
    title: "Filter",
    description:
      "Use our smart filters to find exactly what you're craving and within your budget preferences",
  },
  {
    icon: Zap,
    number: 3,
    title: "Save",
    description:
      "Claim your deals and start saving money on delicious food instantly with just a tap",
  },
];

const StepCard = ({ icon: Icon, number, title, description }: any) => (
  <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
    <CardContent className="pt-6">
      <div className="relative w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-10 w-10 text-orange-500" />
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold flex items-center justify-center shadow-lg">
          {number}
        </div>
      </div>
      <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const HowItWorksSection = () => {
  return (
    <div className="mx-auto px-20 py-20 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-3xl transform -translate-y-12 scale-150"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How It Works
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get started in three simple steps and start saving on delicious meals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
