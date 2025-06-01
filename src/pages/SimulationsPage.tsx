import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SimulationCard } from '../components/simulations/SimulationCard';
import { SimulationFilters } from '../components/simulations/SimulationFilters';
import { useSimulations } from '../context/SimulationContext';

export const SimulationsPage: React.FC = () => {
  const { filteredSimulations, setFilters, filters } = useSimulations();
  const [searchParams] = useSearchParams();

  // Apply URL params to filters on mount and when URL changes
  useEffect(() => {
    const newFilters: Record<string, string> = {};
    
    // Handle subject filter
    const subject = searchParams.get('subject');
    if (subject) {
      newFilters.subject = subject;
    }
    
    // Handle difficulty filter
    const difficulty = searchParams.get('difficulty');
    if (difficulty) {
      newFilters.difficulty = difficulty;
    }
    
    // Handle search query
    const search = searchParams.get('search');
    if (search) {
      newFilters.searchQuery = search;
    }
    
    // Apply filters
    setFilters(newFilters);
  }, [searchParams, setFilters]);

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">All Simulations</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <SimulationFilters />
              </div>
              
              <div className="md:col-span-3">
                {filteredSimulations.length > 0 ? (
                  <>
                    <div className="mb-6 flex justify-between items-center">
                      <p className="text-gray-600">
                        Showing {filteredSimulations.length} simulation{filteredSimulations.length !== 1 ? 's' : ''}
                        {(filters.subject || filters.difficulty || filters.searchQuery) && ' matching your filters'}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredSimulations.map(simulation => (
                        <SimulationCard key={simulation.id} simulation={simulation} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">No simulations found</h3>
                    <p className="text-gray-600 mb-6">
                      {(filters.subject || filters.difficulty || filters.searchQuery) 
                        ? "Try adjusting your filters to see more results."
                        : "We couldn't find any simulations. Please check back later."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};