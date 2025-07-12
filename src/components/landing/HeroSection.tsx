
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center relative overflow-hidden">
      {/* Background decoration with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-3xl transform -translate-y-12 scale-150 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 mb-8 border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm shadow-lg">
          ✨ Discover amazing deals near you
        </div>
        
        <h2 className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Discover Amazing
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Food Deals
          </span>
          <br />
          Near You
        </h2>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Find the best food deals, student discounts, and exclusive offers from restaurants around you. 
          Save money while exploring new flavors with our smart discovery platform.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg hover:scale-105" asChild>
            <Link to="/signup">Get Started Free</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 px-8 py-6 text-lg hover:scale-105 backdrop-blur-sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">10K+</div>
            <div className="text-slate-600 dark:text-slate-400">Active Users</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
            <div className="text-slate-600 dark:text-slate-400">Partner Restaurants</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">$2M+</div>
            <div className="text-slate-600 dark:text-slate-400">Money Saved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;