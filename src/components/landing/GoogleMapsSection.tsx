import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, MapPin, Search, Star, Clock, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// Extend the Window interface to include google
declare global {
  interface Window {
    google: typeof google;
  }
}

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  distance: string;
  deal: string;
  dealTitle: string;
  originalPrice: number;
  discountedPrice: number;
  validUntil: string;
  lat: number;
  lng: number;
}

const GoogleMapsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  // Sample restaurant data
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.5,
      distance: "0.3 km",
      deal: "50% OFF",
      dealTitle: "2-for-1 Pizza Deal",
      originalPrice: 18.99,
      discountedPrice: 9.50,
      validUntil: "Valid until 8pm today",
      lat: 40.7128,
      lng: -74.0060
    },
    {
      id: 2,
      name: "Burger Barn",
      cuisine: "American",
      rating: 4.2,
      distance: "0.5 km",
      deal: "30% OFF",
      dealTitle: "Double Burger Special",
      originalPrice: 15.99,
      discountedPrice: 11.19,
      validUntil: "Valid until 10pm today",
      lat: 40.7589,
      lng: -73.9851
    },
    {
      id: 3,
      name: "Sushi Zen",
      cuisine: "Japanese",
      rating: 4.8,
      distance: "0.8 km",
      deal: "40% OFF",
      dealTitle: "Sushi Platter Deal",
      originalPrice: 24.99,
      discountedPrice: 14.99,
      validUntil: "Valid until 9pm today",
      lat: 40.7505,
      lng: -73.9934
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const initializeMap = async () => {
    if (!googleMapsApiKey || !mapRef.current) return;

    try {
      const loader = new Loader({
        apiKey: googleMapsApiKey,
        version: "weekly",
        libraries: ["places"]
      });

      await loader.load();

      // Initialize map centered on New York City
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      mapInstance.current = map;
      setMapLoaded(true);

      // Add markers for restaurants
      addRestaurantMarkers(map);
    } catch (error) {
      console.error("Error loading Google Maps:", error);
    }
  };

  const addRestaurantMarkers = (map: google.maps.Map) => {
    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    filteredRestaurants.forEach(restaurant => {
      const marker = new window.google.maps.Marker({
        position: { lat: restaurant.lat, lng: restaurant.lng },
        map: map,
        title: restaurant.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#ea580c",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2
        }
      });

      // Add click listener to marker
      marker.addListener("click", () => {
        setSelectedRestaurant(restaurant);
      });

      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    if (mapLoaded && mapInstance.current) {
      addRestaurantMarkers(mapInstance.current);
    }
  }, [filteredRestaurants, mapLoaded]);

  const handleApiKeySubmit = () => {
    if (googleMapsApiKey.trim()) {
      setShowApiKeyInput(false);
      initializeMap();
    }
  };

  if (showApiKeyInput) {
    return (
      <div className="bg-white dark:bg-gray-900 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Map className="h-8 w-8 text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Find Deals Near You</h3>
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Google Maps Setup Required</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  To display the interactive map, please enter your Google Maps API key. 
                  You can get one at{" "}
                  <a 
                    href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Google Cloud Console
                  </a>
                </p>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter your Google Maps API key"
                    value={googleMapsApiKey}
                    onChange={(e) => setGoogleMapsApiKey(e.target.value)}
                  />
                  <Button onClick={handleApiKeySubmit} className="w-full bg-orange-500 hover:bg-orange-600">
                    Load Map
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Map className="h-8 w-8 text-orange-500" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Find Deals Near You</h3>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Discover food deals in your area with our interactive map
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search restaurants or cuisine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Google Map Container */}
        <div className="relative rounded-lg h-96 border-2 border-gray-200 dark:border-gray-600 overflow-hidden">
          <div ref={mapRef} className="w-full h-full" />

          {/* No results message */}
          {filteredRestaurants.length === 0 && searchQuery && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
              <div className="text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 dark:text-gray-300">No restaurants found matching "{searchQuery}"</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            </div>
          )}

          {/* Selected Restaurant Card */}
          {selectedRestaurant && (
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <Card className="shadow-lg border-2 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">{selectedRestaurant.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedRestaurant.cuisine} • {selectedRestaurant.distance} away</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{selectedRestaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="font-medium text-orange-600">{selectedRestaurant.dealTitle}</h5>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="destructive" className="text-xs">{selectedRestaurant.deal}</Badge>
                      <div className="text-right">
                        <p className="text-sm line-through text-gray-500">${selectedRestaurant.originalPrice}</p>
                        <p className="font-semibold text-green-600 text-lg">${selectedRestaurant.discountedPrice}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {selectedRestaurant.validUntil}
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" onClick={() => setSelectedRestaurant(null)}>
                        Close
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Info Text */}
        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-300">
            Click on the restaurant markers to see deal details. Search by restaurant name or cuisine type.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsSection;
