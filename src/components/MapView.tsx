

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Heart, Navigation } from "lucide-react";

interface Deal {
  id: string;
  restaurantName: string;
  dealTitle: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  cuisineType: string;
  distance: number;
  rating: number;
  image: string;
  dietaryTags: string[];
  validUntil: string;
  isStudentDeal: boolean;
}

interface MapViewProps {
  deals: Deal[];
}

const MapView = ({ deals }: MapViewProps) => {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  const toggleFavorite = (dealId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(dealId)) {
      newFavorites.delete(dealId);
    } else {
      newFavorites.add(dealId);
    }
    setFavorites(newFavorites);
  };

  if (showTokenInput) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <Card className="w-full max-w-md mx-4 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold font-inter text-gray-900 mb-2">Interactive Map</h2>
              <p className="text-gray-600">Connect your map to discover deals</p>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 text-center">
              To display the interactive map with restaurant deals, please enter your Mapbox public token. 
              Get one at{" "}
              <a 
                href="https://mapbox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline font-medium"
              >
                mapbox.com
              </a>
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Mapbox public token"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/90"
              />
              <Button onClick={handleTokenSubmit} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl">
                Load Interactive Map
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Map Container - Enhanced mockup */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Map grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-gray-300"></div>
            ))}
          </div>
        </div>
        
        {/* Map roads simulation */}
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-gray-300"></div>

        {/* Loading indicator */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Loading interactive map...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Pins - Enhanced positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {deals.map((deal, index) => (
          <div
            key={deal.id}
            className={`absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10`}
            style={{
              left: `${25 + index * 20}%`,
              top: `${30 + index * 18}%`,
            }}
            onClick={() => setSelectedDeal(deal)}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-200 border-2 border-white">
                <MapPin className="h-5 w-5" />
              </div>
              <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs font-bold animate-bounce">
                {deal.discount}
              </Badge>
              {/* Pulsing circle effect */}
              <div className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping"></div>
            </div>
          </div>
        ))}
      </div>

      {/* User location indicator */}
      <div className="absolute bottom-1/3 right-1/4 pointer-events-none">
        <div className="relative">
          <div className="bg-blue-600 border-4 border-white w-6 h-6 rounded-full shadow-lg"></div>
          <div className="absolute inset-0 bg-blue-600/30 w-12 h-12 rounded-full -m-3 animate-ping"></div>
        </div>
      </div>

      {/* Selected Deal Card - Enhanced mobile design */}
      {selectedDeal && (
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900">{selectedDeal.restaurantName}</h3>
                  <p className="text-gray-600 font-medium">{selectedDeal.cuisineType} • {selectedDeal.distance}km away</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleFavorite(selectedDeal.id)}
                    className="hover:bg-red-50"
                  >
                    <Heart className={`h-5 w-5 ${favorites.has(selectedDeal.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </Button>
                  <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-yellow-700">{selectedDeal.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-orange-600 mb-2">{selectedDeal.dealTitle}</h4>
                <p className="text-gray-700 text-sm">{selectedDeal.description}</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="destructive" className="text-sm font-bold px-3 py-1">{selectedDeal.discount} OFF</Badge>
                  {selectedDeal.isStudentDeal && (
                    <Badge variant="secondary" className="text-sm">Student Deal</Badge>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-lg line-through text-gray-500">${selectedDeal.originalPrice}</p>
                  <p className="font-bold text-2xl text-green-600">${selectedDeal.discountedPrice}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  Valid until {new Date(selectedDeal.validUntil).toLocaleDateString()}
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Navigation className="h-4 w-4" />
                    <span>Directions</span>
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Claim Deal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Favorites counter (new feature) */}
      {favorites.size > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border flex items-center space-x-2">
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{favorites.size} saved</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
