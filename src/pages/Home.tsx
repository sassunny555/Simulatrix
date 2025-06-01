import React from 'react';
import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/home/HeroSection';
import { SubjectGrid } from '../components/home/SubjectGrid';
import { SimulationCarousel } from '../components/home/SimulationCarousel';
import { useSimulations } from '../context/SimulationContext';

export const Home: React.FC = () => {
  const { getNewSimulations, getPopularSimulations } = useSimulations();
  
  const newSimulations = getNewSimulations();
  const popularSimulations = getPopularSimulations();

  return (
    <Layout>
      <HeroSection />
      
      <SubjectGrid />
      
      <SimulationCarousel 
        title="New Simulations" 
        simulations={newSimulations}
        viewAllLink="/simulations?new=true"
      />
      
      <SimulationCarousel 
        title="Popular Simulations" 
        simulations={popularSimulations}
        viewAllLink="/simulations?popular=true"
      />
      
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Explore?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Dive into our collection of interactive simulations and start your scientific journey today.
              Perfect for students, educators, and curious minds of all ages.
            </p>
            <div className="inline-flex rounded-md shadow">
              <a
                href="/simulations"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Browse All Simulations
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};