
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const AppStoreSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Smartphone className="h-8 w-8 text-orange-500" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Get the App</h3>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Download SpotDeal on your mobile device for the best experience
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg" className="flex items-center space-x-3 px-6 py-3 h-auto">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.19-.19-.31-.45-.31-.73V2.544c0-.28.12-.54.31-.73z" fill="#32BBFF"/>
              <path d="M20.683 10.747l-2.85-1.644-4.041 2.897 4.041 2.897 2.85-1.644c.39-.225.63-.644.63-1.103s-.24-.878-.63-1.103z" fill="#32BBFF"/>
              <path d="M13.792 12l-4.041-2.897L3.609 1.814c.19-.19.45-.31.73-.31.28 0 .54.12.73.31l8.724 8.186z" fill="#32BBFF"/>
              <path d="M13.792 12l4.041 2.897L9.109 22.186c-.19.19-.45.31-.73.31-.28 0-.54-.12-.73-.31L13.792 12z" fill="#32BBFF"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500 dark:text-gray-400">GET IT ON</div>
              <div className="font-semibold text-gray-900 dark:text-white">Google Play</div>
            </div>
          </Button>
          <Button variant="outline" size="lg" className="flex items-center space-x-3 px-6 py-3 h-auto">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000" className="dark:fill-white"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500 dark:text-gray-400">Download on the</div>
              <div className="font-semibold text-gray-900 dark:text-white">App Store</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppStoreSection;
