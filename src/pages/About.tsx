import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Microscope, Atom, BookOpen, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Simulatrix</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simulatrix is a platform dedicated to interactive scientific simulations that make 
              learning engaging, intuitive, and accessible for everyone.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Simulatrix, our mission is to transform the way people learn and understand scientific 
                  concepts through interactive, visual simulations that bring abstract ideas to life.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that everyone should have access to high-quality educational resources that 
                  make complex topics approachable and engaging, regardless of their background or prior knowledge.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We envision a world where scientific literacy is universal, where curiosity is nurtured, 
                  and where anyone can explore the wonders of science through hands-on experimentation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By making learning interactive and enjoyable, we aim to inspire the next generation 
                  of scientists, engineers, and critical thinkers who will shape our future.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Simulatrix</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-full">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interactive Learning</h3>
                  <p className="text-gray-600">
                    Our simulations allow hands-on experimentation, making abstract concepts tangible 
                    and memorable in ways that traditional learning materials cannot.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-full">
                    <Atom className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scientific Accuracy</h3>
                  <p className="text-gray-600">
                    All our simulations are developed with scientific accuracy in mind, ensuring 
                    that users learn correct principles and relationships.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-600">
                    From physics to biology, chemistry to engineering, our platform covers a wide 
                    range of scientific disciplines and topics.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-full">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accessible to All</h3>
                  <p className="text-gray-600">
                    Our platform is designed to be accessible to learners of all ages and backgrounds, 
                    from students to lifelong learners.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Join Us on This Journey</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Whether you're a student, educator, or simply curious about the world around you, 
                Simulatrix is here to help you explore, experiment, and understand science in a 
                new and exciting way. Start your journey of discovery today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};