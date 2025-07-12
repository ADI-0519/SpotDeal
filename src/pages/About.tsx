import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900">SpotDeal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About SpotDeal
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          We're on a mission to help food lovers discover amazing deals and save money on every meal.
        </p>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            SpotDeal was founded with a simple idea: great food shouldn't break the bank. We noticed that students and young professionals were missing out on amazing local restaurants because of budget constraints, while restaurants struggled to fill seats during off-peak hours.
          </p>
          <p className="text-gray-600">
            Our platform bridges this gap by connecting food lovers with the best deals, discounts, and offers from restaurants in their area. Whether you're craving pizza at midnight or looking for a fancy brunch spot, SpotDeal helps you discover new flavors while keeping your wallet happy.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To make great food accessible to everyone by connecting diners with the best local deals and offers.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Our Values</h4>
              <p className="text-gray-600">
                We believe in supporting local businesses, creating community connections, and making food discovery fun and affordable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              We're a passionate team of food enthusiasts, tech innovators, and community builders working together to revolutionize how people discover and enjoy local dining experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
