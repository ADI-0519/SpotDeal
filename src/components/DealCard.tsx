
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Heart, MapPin, Clock, Share2 } from "lucide-react";

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

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({ deal }: DealCardProps) => {
  const timeLeft = new Date(deal.validUntil).getTime() - new Date().getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="w-full sm:w-48 flex-shrink-0">
            <AspectRatio ratio={16 / 9} className="sm:aspect-square">
              <img
                src={deal.image}
                alt={deal.restaurantName}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{deal.restaurantName}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{deal.cuisineType}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {deal.distance}km away
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    {deal.rating}
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Deal Info */}
            <div className="mb-3">
              <h4 className="font-medium text-primary mb-1">{deal.dealTitle}</h4>
              <p className="text-sm text-gray-600">{deal.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="destructive">{deal.discount} OFF</Badge>
              {deal.isStudentDeal && (
                <Badge variant="secondary">Student Deal</Badge>
              )}
              {deal.dietaryTags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Price and Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-sm line-through text-gray-500">${deal.originalPrice}</p>
                  <p className="font-semibold text-lg text-green-600">${deal.discountedPrice}</p>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {daysLeft > 0 ? `${daysLeft} days left` : 'Expires today!'}
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">
                  Directions
                </Button>
                <Button size="sm">
                  Claim Deal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealCard;