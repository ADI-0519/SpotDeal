
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, HelpCircle, Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
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
          Help Center
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Find answers to common questions and get the help you need.
        </p>
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <HelpCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Getting Started</h4>
              <p className="text-gray-600 mb-4">
                Learn how to create an account, find deals, and navigate the app.
              </p>
              <Button variant="outline">View Guides</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Search className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Finding Deals</h4>
              <p className="text-gray-600 mb-4">
                Tips on how to search, filter, and discover the best food deals near you.
              </p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Account & Settings</h4>
              <p className="text-gray-600 mb-4">
                Manage your profile, preferences, and notification settings.
              </p>
              <Button variant="outline">Get Help</Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">How do I redeem a deal?</h4>
              <p className="text-gray-600">
                Simply show the deal on your phone to the restaurant staff. They'll verify the offer and apply the discount to your order.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Are there any fees to use SpotDeal?</h4>
              <p className="text-gray-600">
                No, SpotDeal is completely free for users. We partner with restaurants to bring you exclusive deals at no cost to you.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">How often are new deals added?</h4>
              <p className="text-gray-600">
                New deals are added daily! We work continuously with restaurant partners to ensure fresh offers are always available.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Can I use multiple deals at once?</h4>
              <p className="text-gray-600">
                This depends on the specific restaurant's policy. Check the deal details for any restrictions or limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
