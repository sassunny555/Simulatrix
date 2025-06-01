import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SimulationCard } from '../components/simulations/SimulationCard';
import { SimulationFilters } from '../components/simulations/SimulationFilters';
import { useSimulations } from '../context/SimulationContext';

export const SubjectSimulations: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { filteredSimulations, getSubjectById, setFilters, filters } = useSimulations();
  
  const subject = getSubjectById(id || '');
  
  // Set subject filter on mount
  useEffect(() => {
    if (id) {
      setFilters({ ...filters, subject: id });
    }
  }, [id, setFilters, filters]);

  if (!subject) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Subject Not Found</h1>
          <p>The subject you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{subject.name} Simulations</h1>
              <p className="text-gray-600">{subject.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <SimulationFilters />
              </div>
              
              <div className="md:col-span-3">
                {filteredSimulations.length > 0 ? (
                  <>
                    <div className="mb-6">
                      <p className="text-gray-600">
                        Showing {filteredSimulations.length} simulation{filteredSimulations.length !== 1 ? 's' : ''}
                        {filters.difficulty && ' matching your difficulty filter'}
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
                      Try adjusting your filters to see more results.
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