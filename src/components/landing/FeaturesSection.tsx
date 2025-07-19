import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Filter, Bell, Heart, Star, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description:
      "Find deals and restaurants near you with our smart location-based search technology",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description:
      "Filter by cuisine, dietary needs, deal types, and student discounts with precision",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Get notified about flash deals and offers from your favorite spots instantly",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Save your favorite restaurants and deals for quick access anytime",
  },
  {
    icon: Star,
    title: "Student Discounts",
    description:
      "Exclusive deals and discounts verified specifically for students",
  },
  {
    icon: Users,
    title: "Share with Friends",
    description:
      "Share great deals with friends and unlock exclusive group discounts",
  },
];

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border rounded-3xl border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
    <CardContent className="pt-6">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-orange-500" />
      </div>
      <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  return (
    <div className="mx-auto px-20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-3xl transform translate-y-12 scale-150"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why Choose SpotDeal?
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover what makes SpotDeal the perfect companion for food lovers and deal hunters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
