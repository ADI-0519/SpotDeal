
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, BookOpen, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
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
          SpotDeal Blog
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Food tips, restaurant reviews, and money-saving strategies from our team.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">10 Best Budget-Friendly Restaurants in Downtown</h3>
              <p className="text-gray-600 mb-4">
                Discover amazing local eateries that won't break the bank, all within walking distance of the city center.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Sarah Chen</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
              <Button variant="outline" size="sm">Read More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Dining: How to Eat Well on $50 a Week</h3>
              <p className="text-gray-600 mb-4">
                Practical tips and tricks for college students to maintain a healthy diet while staying within budget.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Mike Rodriguez</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>7 min read</span>
              </div>
              <Button variant="outline" size="sm">Read More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">The Art of Happy Hour: Best Deals by Day</h3>
              <p className="text-gray-600 mb-4">
                Your complete guide to scoring the best happy hour deals throughout the week at local restaurants.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Emma Davis</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>4 min read</span>
              </div>
              <Button variant="outline" size="sm">Read More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Food Trends 2025: What to Expect</h3>
              <p className="text-gray-600 mb-4">
                From plant-based alternatives to fusion cuisines, explore the food trends shaping this year.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Alex Thompson</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>6 min read</span>
              </div>
              <Button variant="outline" size="sm">Read More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Supporting Local: Why It Matters</h3>
              <p className="text-gray-600 mb-4">
                Learn about the impact of supporting local restaurants and how SpotDeal helps strengthen communities.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Lisa Park</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
              <Button variant="outline" size="sm">Read More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Date Night on a Dime: Romantic & Affordable</h3>
              <p className="text-gray-600 mb-4">
                Creative ideas for romantic date nights that won't strain your budget but will still impress.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">James Wilson</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>8 min read</span>
              </div>
              <Button variant="outline" size="sm">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
