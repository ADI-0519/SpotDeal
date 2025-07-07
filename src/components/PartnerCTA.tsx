
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Store, TrendingUp, Users, Star } from 'lucide-react';

const PartnerCTA = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Are You a Restaurant Owner?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of restaurants already growing their business with SpotDeal
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h4 className="text-lg font-semibold mb-2">Reach New Customers</h4>
              <p className="text-sm opacity-90">Connect with food lovers in your area</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h4 className="text-lg font-semibold mb-2">Increase Sales</h4>
              <p className="text-sm opacity-90">Fill seats during off-peak hours</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Store className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h4 className="text-lg font-semibold mb-2">Easy Management</h4>
              <p className="text-sm opacity-90">Simple dashboard to manage your deals</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h4 className="text-lg font-semibold mb-2">Build Your Brand</h4>
              <p className="text-sm opacity-90">Get reviews and build customer loyalty</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            Become a Partner Restaurant
          </Button>
          <p className="text-sm mt-4 opacity-90">
            It's free to get started • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerCTA;
