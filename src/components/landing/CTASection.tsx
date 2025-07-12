
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white py-20 relative overflow-hidden">
      {/* Enhanced Background Effects - matching AppStoreSection */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/8 via-transparent to-purple-500/8"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
          Ready to Start Saving?
        </h3>
        <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
          Join thousands of food lovers who are already saving money on their favorite meals
        </p>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-white/95 text-slate-900 hover:bg-white hover:scale-105 shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg font-semibold backdrop-blur-sm border border-white/20" 
          asChild
        >
          <Link to="/signup">Create Your Free Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;