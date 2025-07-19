import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "500+", label: "Partner Restaurants" },
  { value: "$2M+", label: "Money Saved" },
];

const HeroSection = () => {
  return (
    <div className="relative mx-auto px-4 py-24 text-center overflow-hidden">
      
      <div className="absolute inset-0 rounded-full blur-3xl scale-150 -translate-y-12 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 animate-pulse"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-medium text-orange-700 dark:text-orange-300 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200/50 dark:border-orange-800/50 rounded-full backdrop-blur-sm shadow-lg">
          ✨ Discover amazing deals near you
        </div>

        <h2 className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
          Discover Amazing<br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Food Deals
          </span><br />
          Near You
        </h2>

        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Find the best food deals, student discounts, and exclusive offers from restaurants around you.
          Save money while exploring new flavors with our smart discovery platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl px-8 py-6 text-lg hover:scale-105 transition-all"
            asChild
          >
            <Link to="/signup">Get Started Free</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 backdrop-blur-sm px-8 py-6 text-lg hover:scale-105 transition-all"
            asChild
          >
            <Link to="/login">Sign In</Link>
          </Button>
        </div>

        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg"
            >
              <div className="text-3xl font-bold text-slate-900 dark:text-white">{value}</div>
              <div className="text-slate-600 dark:text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
