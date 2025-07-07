
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Newspaper, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Press = () => {
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
          Press & Media
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Latest news, press releases, and media coverage about SpotDeal.
        </p>
      </div>

      {/* Press Releases */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Newspaper className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Press Kit</h4>
              <p className="text-gray-600 mb-4">
                Download our media kit with logos, screenshots, and company information.
              </p>
              <Button variant="outline">Download Kit</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Awards</h4>
              <p className="text-gray-600 mb-4">
                Recognition and awards received by SpotDeal for innovation and impact.
              </p>
              <Button variant="outline">View Awards</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Media Contact</h4>
              <p className="text-gray-600 mb-4">
                Get in touch with our media relations team for interviews and stories.
              </p>
              <Button variant="outline">Contact Us</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent News</h3>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">SpotDeal Launches Mobile App</h4>
                <span className="text-sm text-gray-500">Jan 2025</span>
              </div>
              <p className="text-gray-600">
                SpotDeal announces the launch of its mobile application, bringing food deals directly to users' smartphones.
              </p>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">Partnership with Local Restaurant Association</h4>
                <span className="text-sm text-gray-500">Dec 2024</span>
              </div>
              <p className="text-gray-600">
                New partnership brings exclusive deals from over 500 local restaurants to the platform.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">SpotDeal Reaches 10,000 Users</h4>
                <span className="text-sm text-gray-500">Nov 2024</span>
              </div>
              <p className="text-gray-600">
                The platform celebrates reaching 10,000 registered users within its first year of operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
