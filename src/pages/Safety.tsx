
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, Users, Lock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Safety = () => {
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
          Safety & Security
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Your safety and privacy are our top priorities. Learn about our commitment to keeping you secure.
        </p>
      </div>

      {/* Safety Features */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Data Protection</h4>
              <p className="text-gray-600">
                Your personal information is encrypted and stored securely.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Lock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
              <p className="text-gray-600">
                All transactions are processed through secure, encrypted channels.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Verified Partners</h4>
              <p className="text-gray-600">
                All restaurant partners are verified and regularly audited.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Report Issues</h4>
              <p className="text-gray-600">
                Easy reporting system for any safety concerns or issues.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Safety Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Guidelines</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">When Using Deals</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Always verify the restaurant's identity before visiting</li>
                <li>Check restaurant reviews and ratings before making a reservation</li>
                <li>Inform someone of your dining plans when visiting new places</li>
                <li>Trust your instincts - if something feels wrong, leave</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Protecting Your Account</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Use a strong, unique password for your SpotDeal account</li>
                <li>Never share your login credentials with others</li>
                <li>Log out of your account when using shared devices</li>
                <li>Report suspicious activity immediately</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Privacy Protection</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Review your privacy settings regularly</li>
                <li>Be cautious about sharing personal information in reviews</li>
                <li>Understand what data we collect and how it's used</li>
                <li>Contact us with any privacy concerns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-800 mb-4">Emergency & Safety Concerns</h3>
          <p className="text-red-700 mb-4">
            If you encounter any safety issues or have immediate concerns, please contact us right away:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-red-600 hover:bg-red-700">
              Report Safety Issue
            </Button>
            <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
              Emergency: Call 911
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
