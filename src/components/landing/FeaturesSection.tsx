
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Filter, Bell, Heart, Star, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Why Choose SpotDeal?
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Location-Based Discovery</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Find deals and restaurants near you with our smart location-based search
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Filter className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Smart Filtering</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Filter by cuisine, dietary needs, deal types, and student discounts
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Bell className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Real-Time Notifications</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Get notified about flash deals and offers from your favorite spots
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Save Favorites</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Save your favorite restaurants and deals for quick access
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Student Discounts</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Exclusive deals and discounts verified for students
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Share with Friends</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Share great deals with friends and unlock group discounts
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesSection;
