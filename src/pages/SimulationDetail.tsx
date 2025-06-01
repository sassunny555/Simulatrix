import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SimulationEmbed } from '../components/simulations/SimulationEmbed';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useSimulations } from '../context/SimulationContext';

export const SimulationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getSimulationById, getSubjectById } = useSimulations();
  
  const simulation = getSimulationById(id || '');
  
  if (!simulation) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Simulation Not Found</h1>
          <p className="mb-6">The simulation you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary" onClick={() => navigate('/simulations')}>
            Browse All Simulations
          </Button>
        </div>
      </Layout>
    );
  }
  
  const subject = getSubjectById(simulation.subjectId);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {simulation.embedUrl && (
              <SimulationEmbed 
                embedUrl={simulation.embedUrl} 
                title={simulation.title}
              />
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{simulation.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {subject && (
                  <Badge variant="secondary">{subject.name}</Badge>
                )}
                <Badge variant="primary">{simulation.difficulty}</Badge>
                {simulation.isNew && <Badge variant="new">New</Badge>}
                {simulation.isPopular && <Badge variant="popular">Popular</Badge>}
              </div>
              
              <p className="text-gray-600 mb-6">{simulation.description}</p>
              
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <Clock size={16} className="mr-1" />
                <span>Added on {new Date(simulation.dateAdded).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-4">Difficulty Level</h2>
              <div className="flex items-center mb-6">
                <BarChart size={18} className="text-primary mr-2" />
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ 
                        width: simulation.difficulty === 'beginner' ? '33%' : 
                               simulation.difficulty === 'intermediate' ? '66%' : '100%' 
                      }}
                    ></div>
                  </div>
                </div>
                <span className="ml-2 text-sm font-medium capitalize">{simulation.difficulty}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <p className="text-gray-600 mb-4">
                Interact with the simulation using your mouse or touchscreen. Experiment with different 
                parameters to see how they affect the results and deepen your understanding of the underlying 
                scientific concepts.
              </p>
              <p className="text-gray-600">
                For the best experience, use the fullscreen option by clicking the expand icon in 
                the top-right corner of the simulation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related simulations could be added here */}
      </div>
    </Layout>
  );
};