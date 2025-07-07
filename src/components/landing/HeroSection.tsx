
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Discover Amazing Food Deals
        <span className="text-orange-500"> Near You</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        Find the best food deals, student discounts, and exclusive offers from restaurants around you. 
        Save money while exploring new flavors with our smart discovery platform.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
          <Link to="/signup">Get Started Free</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/login">Sign In</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
