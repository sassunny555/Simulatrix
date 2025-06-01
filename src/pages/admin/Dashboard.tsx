import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { PlusCircle, Users, Box, BookOpen, BarChart3 } from 'lucide-react';
import { useSimulations } from '../../context/SimulationContext';

export const AdminDashboard: React.FC = () => {
  const { simulations, subjects } = useSimulations();

  const stats = [
    {
      name: 'Total Simulations',
      value: simulations.length,
      icon: <Box className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Total Subjects',
      value: subjects.length,
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      name: 'New Simulations',
      value: simulations.filter(sim => sim.isNew).length,
      icon: <PlusCircle className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Popular Simulations',
      value: simulations.filter(sim => sim.isPopular).length,
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <div className="flex space-x-4">
                <Link to="/admin/simulations/new">
                  <Button variant="primary" size="sm">
                    <PlusCircle size={16} className="mr-2" />
                    New Simulation
                  </Button>
                </Link>
                <Link to="/admin/subjects/new">
                  <Button variant="outline" size="sm">
                    <PlusCircle size={16} className="mr-2" />
                    New Subject
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-primary bg-opacity-10 mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recent Simulations</h2>
                  <Link to="/admin/simulations" className="text-primary text-sm hover:underline">
                    View all
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date Added
                        </th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {simulations.slice(0, 5).map((simulation) => (
                        <tr key={simulation.id}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{simulation.title}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-500 capitalize">{simulation.subjectId}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {new Date(simulation.dateAdded).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/admin/simulations/${simulation.id}`} className="text-primary hover:text-primary-dark">
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Subjects</h2>
                  <Link to="/admin/subjects" className="text-primary text-sm hover:underline">
                    View all
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Simulations
                        </th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {subjects.map((subject) => (
                        <tr key={subject.id}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{subject.name}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{subject.simulationCount}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/admin/subjects/${subject.id}`} className="text-primary hover:text-primary-dark">
                              Edit
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};