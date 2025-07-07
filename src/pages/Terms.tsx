
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Users, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
          Terms & Conditions
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Last updated: January 2025
        </p>
        <p className="text-lg text-gray-600">
          Please read these terms carefully before using SpotDeal.
        </p>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="flex items-start space-x-4">
            <FileText className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h3>
              <p className="text-gray-600">
                By accessing and using SpotDeal, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Users className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Accounts</h3>
              <div className="space-y-3 text-gray-600">
                <p>• You must be at least 13 years old to create an account</p>
                <p>• You are responsible for maintaining the confidentiality of your account</p>
                <p>• You agree to provide accurate and complete information</p>
                <p>• One account per person; multiple accounts may be terminated</p>
                <p>• You are responsible for all activities under your account</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Scale className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Use of Service</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Permitted Uses:</strong></p>
                <p>• Find and redeem legitimate food deals and offers</p>
                <p>• Share honest reviews and experiences</p>
                <p>• Connect with other food enthusiasts</p>
                <p><strong>Prohibited Uses:</strong></p>
                <p>• Creating fake accounts or reviews</p>
                <p>• Using the service for commercial purposes without permission</p>
                <p>• Interfering with or disrupting the service</p>
                <p>• Violating any applicable laws or regulations</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Deals and Offers</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Deals are subject to restaurant terms and availability</p>
              <p>• SpotDeal is not responsible for deal fulfillment by restaurants</p>
              <p>• Deals may expire or change without notice</p>
              <p>• One deal per customer unless otherwise specified</p>
              <p>• Deals cannot be combined with other offers unless stated</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Disclaimer of Warranties</h3>
              <p className="text-gray-600">
                SpotDeal is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted, error-free, or completely secure. Restaurant information and deals are provided by third parties and may not always be accurate or current.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-600">
              SpotDeal shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service in the past 12 months.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy</h3>
            <p className="text-gray-600">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Termination</h3>
            <p className="text-gray-600">
              We may terminate or suspend your account at any time for violations of these terms. You may also terminate your account at any time by contacting us or using the account deletion feature.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Changes to Terms</h3>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or app notification. Continued use of the service constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
            <p className="text-gray-600">
              Questions about the Terms of Service should be sent to us at legal@spotdeal.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
