
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, MessageSquare, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
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
          Join Our Community
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Connect with fellow food lovers, share experiences, and discover hidden gems together.
        </p>
      </div>

      {/* Community Features */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Food Groups</h4>
              <p className="text-gray-600">
                Join groups based on cuisine preferences and dietary needs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Reviews & Tips</h4>
              <p className="text-gray-600">
                Share your dining experiences and help others discover great spots.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Local Events</h4>
              <p className="text-gray-600">
                Organize and join food-related meetups and events in your area.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Rewards</h4>
              <p className="text-gray-600">
                Earn points and badges for active community participation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Stats</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">15,000+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">50,000+</div>
              <div className="text-gray-600">Reviews Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Local Groups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Guidelines</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Be Respectful</h4>
              <p className="text-gray-600">
                Treat all community members with kindness and respect. Personal attacks, harassment, or discriminatory language will not be tolerated.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Share Authentic Reviews</h4>
              <p className="text-gray-600">
                Write honest, helpful reviews based on your actual dining experiences. Fake reviews harm both businesses and fellow diners.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Keep It Food-Related</h4>
              <p className="text-gray-600">
                Keep discussions focused on food, restaurants, and dining experiences. Off-topic content may be removed.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">No Spam or Self-Promotion</h4>
              <p className="text-gray-600">
                Don't use the community for excessive self-promotion or spam. Share genuinely helpful content and recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-orange-500 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-xl mb-6 opacity-90">
            Connect with food lovers, share your experiences, and discover amazing local spots together.
          </p>
          <Button size="lg" variant="secondary">
            Join the Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;
