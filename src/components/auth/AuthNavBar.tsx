
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700 px-4 py-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            SpotDeal
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" asChild>
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavBar;