
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Heart, MapPin } from "lucide-react";

const AppStoreSection = () => {
  const [activeTab, setActiveTab] = useState("map");

  const renderTabContent = () => {
    switch (activeTab) {
      case "map":
        return (
          <div className="flex-1 relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
            {/* Map background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-slate-600/20"></div>
                ))}
              </div>
            </div>
            
            {/* Map roads simulation */}
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-slate-600/40"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-600/40"></div>
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-slate-600/40"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-slate-600/40"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-600/40"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-slate-600/40"></div>
            
            {/* Map pins with deals */}
            <div className="absolute top-16 left-12">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-2 rounded-full shadow-lg animate-pulse border-2 border-white/20">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 mt-1 shadow-lg text-xs w-24 border border-white/20">
                <p className="font-semibold text-gray-800">Pizza Palace</p>
                <p className="text-green-600 font-bold">50% OFF</p>
              </div>
            </div>

            <div className="absolute top-32 right-16">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-2 rounded-full shadow-lg border-2 border-white/20">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 mt-1 shadow-lg text-xs w-24 border border-white/20">
                <p className="font-semibold text-gray-800">Burger Hub</p>
                <p className="text-green-600 font-bold">30% OFF</p>
              </div>
            </div>

            <div className="absolute bottom-32 left-20">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-2 rounded-full shadow-lg border-2 border-white/20">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 mt-1 shadow-lg text-xs w-24 border border-white/20">
                <p className="font-semibold text-gray-800">Sushi Zen</p>
                <p className="text-green-600 font-bold">40% OFF</p>
              </div>
            </div>

            <div className="absolute bottom-48 right-12">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-2 rounded-full shadow-lg border-2 border-white/20">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 mt-1 shadow-lg text-xs w-24 border border-white/20">
                <p className="font-semibold text-gray-800">Taco Express</p>
                <p className="text-green-600 font-bold">25% OFF</p>
              </div>
            </div>

            {/* User location indicator */}
            <div className="absolute bottom-40 right-20">
              <div className="bg-blue-500 border-4 border-white/80 w-4 h-4 rounded-full shadow-lg"></div>
              <div className="absolute inset-0 bg-blue-500/30 w-8 h-8 rounded-full -m-2 animate-ping"></div>
            </div>
          </div>
        );
      
      case "deals":
        return (
          <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-white/95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">Pizza Palace</h3>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">50% OFF</span>
                </div>
                <p className="text-gray-600 text-xs">Italian • 0.2km away</p>
                <p className="text-green-600 font-bold text-sm">$12.99 → $6.50</p>
              </div>
              
              <div className="bg-white/95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">Sushi Zen</h3>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">40% OFF</span>
                </div>
                <p className="text-gray-600 text-xs">Japanese • 0.5km away</p>
                <p className="text-green-600 font-bold text-sm">$24.99 → $14.99</p>
              </div>
              
              <div className="bg-white/95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">Burger Hub</h3>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">30% OFF</span>
                </div>
                <p className="text-gray-600 text-xs">American • 0.8km away</p>
                <p className="text-green-600 font-bold text-sm">$18.99 → $13.29</p>
              </div>
              
              <div className="bg-white/95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">Taco Express</h3>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">25% OFF</span>
                </div>
                <p className="text-gray-600 text-xs">Mexican • 1.2km away</p>
                <p className="text-green-600 font-bold text-sm">$16.99 → $12.74</p>
              </div>
            </div>
          </div>
        );
      
      case "saved":
        return (
          <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-white/95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">Pizza Palace</h3>
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </div>
                <p className="text-gray-600 text-xs">Italian • 0.2km away</p>
                <p className="text-green-600 font-bold text-sm">50% OFF - Valid until Dec 31</p>
              </div>
              
              <div className="bg-white/95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm">Sushi Zen</h3>
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </div>
                <p className="text-gray-600 text-xs">Japanese • 0.5km away</p>
                <p className="text-green-600 font-bold text-sm">40% OFF - Valid until Jan 15</p>
              </div>
              
              <div className="text-center text-slate-400 text-xs mt-8">
                <Heart className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Your saved deals appear here</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/8 via-transparent to-purple-500/8"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-2xl">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-inter bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Get the App
            </h2>
          </div>
          <p className="text-xl font-inter text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our mobile app puts the power of deal discovery in your pocket with real-time maps 
            and location-based deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Interactive Mobile phone mockup */}
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/90 rounded-[3rem] p-4 border border-slate-700/40 shadow-2xl backdrop-blur-sm">
              {/* Phone outer frame */}
              <div className="bg-gradient-to-br from-slate-900 to-black rounded-[2.5rem] p-2 w-80 h-[680px] flex flex-col relative overflow-hidden border border-slate-800/60">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 text-white text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">9:41</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-3 border border-white/30 rounded-sm">
                      <div className="w-4 h-1 bg-green-400 rounded-full m-0.5"></div>
                    </div>
                  </div>
                </div>
                
                {/* App header */}
                <div className="px-6 py-4 border-b border-slate-800/60 bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SpotDeal</h3>
                      <p className="text-slate-400 text-sm">Find deals near you</p>
                    </div>
                    <Heart className="h-6 w-6 text-slate-400 hover:text-red-400 transition-colors" />
                  </div>
                </div>

                {/* Tab Content */}
                {renderTabContent()}

                {/* Interactive Bottom navigation */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 flex justify-around border-t border-slate-700/60 backdrop-blur-sm">
                  <button 
                    onClick={() => setActiveTab("map")}
                    className={`flex flex-col items-center transition-all duration-200 ${
                      activeTab === "map" ? "text-orange-400 scale-105" : "text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="text-xs mt-1 font-medium">Map</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab("deals")}
                    className={`flex flex-col items-center transition-all duration-200 ${
                      activeTab === "deals" ? "text-orange-400 scale-105" : "text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    <Star className="h-5 w-5" />
                    <span className="text-xs mt-1 font-medium">Deals</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab("saved")}
                    className={`flex flex-col items-center transition-all duration-200 ${
                      activeTab === "saved" ? "text-orange-400 scale-105" : "text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    <Heart className="h-5 w-5" />
                    <span className="text-xs mt-1 font-medium">Saved</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Features and download buttons */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/25 to-red-500/25 rounded-xl flex items-center justify-center border border-orange-500/30 backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Live Map Integration</h4>
                  <p className="text-slate-300">See restaurant deals in real-time on an interactive map</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/25 to-purple-500/25 rounded-xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
                  <Heart className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Save Favorites</h4>
                  <p className="text-slate-300">Bookmark your favorite deals and restaurants for quick access</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/25 to-teal-500/25 rounded-xl flex items-center justify-center border border-green-500/30 backdrop-blur-sm">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Smart Notifications</h4>
                  <p className="text-slate-300">Get alerts when new deals appear near your location</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-xl flex items-center justify-center border border-purple-500/30 backdrop-blur-sm">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Instant Deals</h4>
                  <p className="text-slate-300">Get notified of flash deals and limited-time offers</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-16 bg-black/40 border-slate-600/60 hover:bg-slate-800/60 hover:border-slate-500/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4">
                  <svg className="w-10 h-10 text-green-400" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.19-.19-.31-.45-.31-.73V2.544c0-.28.12-.54.31-.73z" fill="currentColor"/>
                    <path d="M20.683 10.747l-2.85-1.644-4.041 2.897 4.041 2.897 2.85-1.644c.39-.225.63-.644.63-1.103s-.24-.878-.63-1.103z" fill="currentColor"/>
                    <path d="M13.792 12l-4.041-2.897L3.609 1.814c.19-.19.45-.31.73-.31.28 0 .54.12.73.31l8.724 8.186z" fill="currentColor"/>
                    <path d="M13.792 12l4.041 2.897L9.109 22.186c-.19.19-.45.31-.73.31-.28 0-.54-.12-.73-.31L13.792 12z" fill="currentColor"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-medium">GET IT ON</div>
                    <div className="font-semibold text-white text-lg">Google Play</div>
                  </div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-16 bg-black/40 border-slate-600/60 hover:bg-slate-800/60 hover:border-slate-500/60 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4">
                  <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-medium">Download on the</div>
                    <div className="font-semibold text-white text-lg">App Store</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreSection;