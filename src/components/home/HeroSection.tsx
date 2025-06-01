import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/simulations?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Science for Curious Minds
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore interactive simulations across physics, chemistry, biology, mathematics, 
            and more. Discover, learn, and experiment in a fun and engaging way.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8 relative">
            <input
              type="text"
              placeholder="Search for simulations..."
              className="w-full p-4 pl-12 pr-16 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
            <Button
              type="submit"
              variant="primary"
              className="absolute right-2 top-2 rounded-full"
            >
              Search
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/simulations')}
            >
              Browse All Simulations
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};