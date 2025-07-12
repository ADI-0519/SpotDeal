
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Filter, Bell, Heart, Star, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-l from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-3xl transform translate-y-12 scale-150"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why Choose SpotDeal?
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover what makes SpotDeal the perfect companion for food lovers and deal hunters
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Location-Based Discovery</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Find deals and restaurants near you with our smart location-based search technology
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Filter className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Smart Filtering</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Filter by cuisine, dietary needs, deal types, and student discounts with precision
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bell className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Real-Time Notifications</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Get notified about flash deals and offers from your favorite spots instantly
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Save Favorites</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Save your favorite restaurants and deals for quick access anytime
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Student Discounts</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Exclusive deals and discounts verified specifically for students
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Share with Friends</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Share great deals with friends and unlock exclusive group discounts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;