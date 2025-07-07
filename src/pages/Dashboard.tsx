
import { useState, useEffect } from "react";
import FilterPanel from "@/components/FilterPanel";
import DealCard from "@/components/DealCard";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, LogOut, User, Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PostCreator from "@/components/PostCreator";
import PostsList from "@/components/PostsList";

const Dashboard = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showPostCreator, setShowPostCreator] = useState(false);
  const [filters, setFilters] = useState({
    distance: 5,
    cuisineType: '',
    dietaryNeeds: [],
    dealType: '',
    studentOnly: false
  });

  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Mock data for now - will be replaced with real data later
  const mockDeals = [
    {
      id: '1',
      restaurantName: 'Pizza Palace',
      dealTitle: '2-for-1 Pizza Deal',
      description: 'Buy one pizza, get one free on all medium and large pizzas',
      originalPrice: 18.99,
      discountedPrice: 9.50,
      discount: '50%',
      cuisineType: 'Italian',
      distance: 0.3,
      rating: 4.5,
      image: '/placeholder.svg',
      dietaryTags: ['vegetarian'],
      validUntil: '2024-07-08T23:59:59Z',
      isStudentDeal: false
    },
    {
      id: '2',
      restaurantName: 'Burger Barn',
      dealTitle: 'Student Special',
      description: '30% off all burgers with valid student ID',
      originalPrice: 12.99,
      discountedPrice: 9.09,
      discount: '30%',
      cuisineType: 'American',
      distance: 0.8,
      rating: 4.2,
      image: '/placeholder.svg',
      dietaryTags: ['halal'],
      validUntil: '2024-07-15T23:59:59Z',
      isStudentDeal: true
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-primary">SpotDeal</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPostCreator(true)}
          >
            <Plus className="h-4 w-4" />
            Post
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/profile")}
          >
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Filter Panel */}
        <FilterPanel
          isOpen={isFilterOpen}
          filters={filters}
          onFiltersChange={setFilters}
          onClose={() => setIsFilterOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Welcome Message */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h2 className="text-lg font-semibold mb-2">
              Welcome back, {user.user_metadata?.first_name || user.email}!
            </h2>
            <p className="text-gray-600">
              Check out the latest deals and share your own discoveries.
            </p>
          </div>

          {/* Posts Section */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="text-lg font-semibold mb-4">Community Posts</h3>
            <PostsList />
          </div>

          {/* Deals Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Deals</h3>
            <div className="space-y-4">
              {mockDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Post Creator Modal */}
      {showPostCreator && (
        <PostCreator onClose={() => setShowPostCreator(false)} />
      )}
    </div>
  );
};

export default Dashboard;
