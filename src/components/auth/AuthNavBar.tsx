
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b px-4 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <MapPin className="h-8 w-8 text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SpotDeal</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavBar;
