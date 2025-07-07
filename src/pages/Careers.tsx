
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
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
          Join Our Team
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Help us build the future of food discovery and make dining more accessible for everyone.
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Fast-Paced Growth</h4>
              <p className="text-gray-600">
                Join a rapidly growing startup where your work directly impacts thousands of users.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Amazing Team</h4>
              <p className="text-gray-600">
                Work alongside passionate, talented individuals who care about making a difference.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Great Benefits</h4>
              <p className="text-gray-600">
                Competitive salary, flexible work arrangements, and unlimited food deal testing!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Open Positions</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-lg font-semibold">Senior Frontend Developer</h4>
              <p className="text-gray-600">Help us build beautiful, responsive user interfaces that delight our users.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-lg font-semibold">Product Marketing Manager</h4>
              <p className="text-gray-600">Drive user acquisition and engagement through creative marketing strategies.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-lg font-semibold">Business Development Associate</h4>
              <p className="text-gray-600">Build relationships with restaurants and expand our partner network.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
