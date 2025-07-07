
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Zap } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        How It Works
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-orange-500" />
              <span className="absolute -mt-8 -mr-8 w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">1</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Discover</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Browse through hundreds of restaurants and food deals near your location
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-orange-500" />
              <span className="absolute -mt-8 -mr-8 w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">2</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Filter</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Use our smart filters to find exactly what you're craving and within your budget
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <span className="absolute -mt-8 -mr-8 w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">3</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Save</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Claim your deals and start saving money on delicious food instantly
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorksSection;
