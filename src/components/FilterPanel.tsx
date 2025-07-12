

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, MapPin } from "lucide-react";

interface FilterPanelProps {
  isOpen: boolean;
  filters: {
    distance: number;
    cuisineType: string;
    dietaryNeeds: string[];
    dealType: string;
    studentOnly: boolean;
  };
  onFiltersChange: (filters: any) => void;
  onClose: () => void;
}

const FilterPanel = ({ isOpen, filters, onFiltersChange, onClose }: FilterPanelProps) => {
  const cuisineTypes = ['Italian', 'American', 'Asian', 'Mexican', 'Indian', 'Mediterranean', 'Thai', 'Japanese'];
  const dietaryOptions = ['vegetarian', 'vegan', 'gluten-free', 'halal', 'kosher', 'keto'];
  const dealTypes = ['percentage', 'buy-one-get-one', 'happy-hour', 'student-special', 'loyalty-reward'];

  const updateFilters = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleDietaryNeed = (dietary: string) => {
    const updated = filters.dietaryNeeds.includes(dietary)
      ? filters.dietaryNeeds.filter(d => d !== dietary)
      : [...filters.dietaryNeeds, dietary];
    updateFilters('dietaryNeeds', updated);
  };

  if (!isOpen) return null;

  return (
    <div className="w-80 bg-white border-r shadow-lg overflow-y-auto">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Distance Filter */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Distance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="px-2">
              <Slider
                value={[filters.distance]}
                onValueChange={(value) => updateFilters('distance', value[0])}
                max={25}
                min={0.5}
                step={0.5}
                className="w-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Within {filters.distance}km
            </p>
          </CardContent>
        </Card>

        {/* Cuisine Type */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Cuisine Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {cuisineTypes.map((cuisine) => (
                <Badge
                  key={cuisine}
                  variant={filters.cuisineType === cuisine ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => updateFilters('cuisineType', 
                    filters.cuisineType === cuisine ? '' : cuisine
                  )}
                >
                  {cuisine}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dietary Needs */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Dietary Needs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((dietary) => (
                <Badge
                  key={dietary}
                  variant={filters.dietaryNeeds.includes(dietary) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleDietaryNeed(dietary)}
                >
                  {dietary}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Deal Type */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Deal Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {dealTypes.map((deal) => (
                <Badge
                  key={deal}
                  variant={filters.dealType === deal ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => updateFilters('dealType', 
                    filters.dealType === deal ? '' : deal
                  )}
                >
                  {deal.replace('-', ' ')}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Only */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="student-only">Student Deals Only</Label>
              <Switch
                id="student-only"
                checked={filters.studentOnly}
                onCheckedChange={(checked) => updateFilters('studentOnly', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Clear Filters */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onFiltersChange({
            distance: 5,
            cuisineType: '',
            dietaryNeeds: [],
            dealType: '',
            studentOnly: false
          })}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
