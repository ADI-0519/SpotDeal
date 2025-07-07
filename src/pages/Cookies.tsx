
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Cookie, Settings, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
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
          Cookie Policy
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Last updated: January 2025
        </p>
        <p className="text-lg text-gray-600">
          Learn about how we use cookies and similar technologies to enhance your SpotDeal experience.
        </p>
      </div>

      {/* Cookie Types */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Cookie className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Essential</h4>
              <p className="text-gray-600">
                Required for basic site functionality and security.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Settings className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Functional</h4>
              <p className="text-gray-600">
                Remember your preferences and personalize your experience.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Analytics</h4>
              <p className="text-gray-600">
                Help us understand how you use our service to improve it.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Marketing</h4>
              <p className="text-gray-600">
                Show you relevant ads and measure campaign effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cookie Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h3>
            <p className="text-gray-600 mb-4">
              Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit, like your preferred language and other settings, which can make your next visit easier and more useful.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies are necessary for the website to function and cannot be switched off. They include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Authentication cookies to keep you logged in</li>
              <li>Security cookies to protect against fraud</li>
              <li>Load balancing cookies for site performance</li>
              <li>Cookies that remember your cookie preferences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Functional Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies enhance functionality and personalization:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Remember your location preferences</li>
              <li>Save your favorite restaurants and deals</li>
              <li>Store your language and display preferences</li>
              <li>Remember items in your wishlist</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies help us understand how visitors interact with our website:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Google Analytics to measure site usage</li>
              <li>Heatmap tracking to improve user experience</li>
              <li>Performance monitoring for site optimization</li>
              <li>Error tracking to fix issues quickly</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies are used to deliver relevant advertisements:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Show you personalized deals and offers</li>
              <li>Limit the number of times you see an ad</li>
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Social media integration cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Managing Your Cookie Preferences</h3>
            <p className="text-gray-600 mb-4">
              You can control cookies through your browser settings or our cookie preference center:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-orange-800 font-medium mb-2">Cookie Preference Center</p>
              <p className="text-orange-700 text-sm mb-3">
                You can update your cookie preferences at any time using our preference center.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Manage Cookie Preferences
              </Button>
            </div>
            
            <div className="space-y-2 text-gray-600">
              <p><strong>Browser Settings:</strong></p>
              <p>• Chrome: Settings → Privacy and Security → Cookies</p>
              <p>• Firefox: Settings → Privacy & Security → Cookies</p>
              <p>• Safari: Preferences → Privacy → Cookies</p>
              <p>• Edge: Settings → Cookies and Site Permissions</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Third-Party Cookies</h3>
            <p className="text-gray-600 mb-3">
              We work with trusted third-party services that may set their own cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing features</li>
              <li>Payment processors for secure transactions</li>
              <li>Customer support tools for live chat</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-600">
              If you have questions about our use of cookies, please contact us at privacy@spotdeal.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
