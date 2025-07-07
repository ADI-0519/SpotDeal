
import { Button } from "@/components/ui/button";
import { MapPin, Shield, Eye, Lock, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          Privacy Policy
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Last updated: January 2025
        </p>
        <p className="text-lg text-gray-600">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="flex items-start space-x-4">
            <Database className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Personal Information:</strong> Name, email address, phone number, and location data when you create an account.</p>
                <p><strong>Usage Data:</strong> How you interact with our app, search queries, and preferences.</p>
                <p><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</p>
                <p><strong>Location Data:</strong> Your location to show nearby deals and restaurants (with your permission).</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Eye className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Provide personalized deal recommendations</p>
                <p>• Send notifications about new deals and offers</p>
                <p>• Improve our services and user experience</p>
                <p>• Communicate with you about your account</p>
                <p>• Ensure platform security and prevent fraud</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Information Sharing</h3>
              <div className="space-y-3 text-gray-600">
                <p>We do not sell your personal information. We may share information in these situations:</p>
                <p><strong>With Restaurant Partners:</strong> Basic information needed to fulfill deals and reservations.</p>
                <p><strong>Service Providers:</strong> Third-party services that help us operate our platform.</p>
                <p><strong>Legal Requirements:</strong> When required by law or to protect our rights and users.</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Lock className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Security</h3>
              <div className="space-y-2 text-gray-600">
                <p>• All data is encrypted in transit and at rest</p>
                <p>• Regular security audits and updates</p>
                <p>• Access controls and authentication measures</p>
                <p>• Secure data centers with physical protections</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h3>
            <div className="space-y-2 text-gray-600">
              <p>• <strong>Access:</strong> Request a copy of your personal data</p>
              <p>• <strong>Correction:</strong> Update or correct your information</p>
              <p>• <strong>Deletion:</strong> Request deletion of your account and data</p>
              <p>• <strong>Portability:</strong> Export your data in a standard format</p>
              <p>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cookies and Tracking</h3>
            <p className="text-gray-600 mb-3">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences in your browser settings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h3>
            <p className="text-gray-600 mb-3">
              We may update this privacy policy periodically. We'll notify you of significant changes via email or app notification.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-600 mb-3">
              If you have questions about this privacy policy or your data, contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@spotdeal.com<br />
              Address: SpotDeal Privacy Team, 123 Food Street, Taste City, TC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
