
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Heart } from "lucide-react";

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

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Map Setup Required</h2>
            <p className="text-sm text-muted-foreground mb-4">
              To display the interactive map, please enter your Mapbox public token. 
              You can get one at{" "}
              <a 
                href="https://mapbox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
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
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button onClick={handleTokenSubmit} className="w-full">
                Load Map
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 relative">
      {/* Map Container - Placeholder for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-600">Interactive Map Loading...</p>
          <p className="text-sm text-gray-500">Real map integration will be added with your Mapbox token</p>
        </div>
      </div>

      {/* Deal Pins - Simulated positions */}
      <div className="absolute inset-0 pointer-events-none">
        {deals.map((deal, index) => (
          <div
            key={deal.id}
            className={`absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
            style={{
              left: `${30 + index * 25}%`,
              top: `${40 + index * 15}%`,
            }}
            onClick={() => setSelectedDeal(deal)}
          >
            <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
              <MapPin className="h-4 w-4" />
            </div>
            <Badge variant="secondary" className="mt-1 text-xs">
              {deal.discount}
            </Badge>
          </div>
        ))}
      </div>

      {/* Selected Deal Card */}
      {selectedDeal && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{selectedDeal.restaurantName}</h3>
                  <p className="text-sm text-muted-foreground">{selectedDeal.cuisineType} • {selectedDeal.distance}km away</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mb-3">
                <h4 className="font-medium text-primary">{selectedDeal.dealTitle}</h4>
                <p className="text-sm text-gray-600">{selectedDeal.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="destructive">{selectedDeal.discount} OFF</Badge>
                  {selectedDeal.isStudentDeal && (
                    <Badge variant="secondary">Student</Badge>
                  )}
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs">{selectedDeal.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm line-through text-gray-500">${selectedDeal.originalPrice}</p>
                  <p className="font-semibold text-green-600">${selectedDeal.discountedPrice}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  Valid until {new Date(selectedDeal.validUntil).toLocaleDateString()}
                </div>
                <Button size="sm">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MapView;
