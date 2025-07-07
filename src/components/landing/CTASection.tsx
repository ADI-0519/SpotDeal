
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-orange-500 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Saving?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of food lovers who are already saving money on their favorite meals
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/signup">Create Your Free Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
