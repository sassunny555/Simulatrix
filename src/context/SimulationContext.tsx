import React, { createContext, useContext, useState, ReactNode } from 'react';
import { simulations as initialSimulations } from '../data/simulations';
import { subjects as initialSubjects } from '../data/subjects';
import { Simulation, Subject, SimulationFilters } from '../types';

interface SimulationContextType {
  simulations: Simulation[];
  subjects: Subject[];
  filteredSimulations: Simulation[];
  filters: SimulationFilters;
  setFilters: (filters: SimulationFilters) => void;
  getSubjectById: (id: string) => Subject | undefined;
  getSimulationsBySubject: (subjectId: string) => Simulation[];
  getNewSimulations: () => Simulation[];
  getPopularSimulations: () => Simulation[];
  getSimulationById: (id: string) => Simulation | undefined;
}

const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export const SimulationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [simulations] = useState<Simulation[]>(initialSimulations);
  const [subjects] = useState<Subject[]>(initialSubjects);
  const [filters, setFilters] = useState<SimulationFilters>({});

  const getSubjectById = (id: string) => {
    return subjects.find(subject => subject.id === id);
  };

  const getSimulationsBySubject = (subjectId: string) => {
    return simulations.filter(simulation => simulation.subjectId === subjectId);
  };

  const getNewSimulations = () => {
    return simulations.filter(simulation => simulation.isNew);
  };

  const getPopularSimulations = () => {
    return simulations.filter(simulation => simulation.isPopular);
  };

  const getSimulationById = (id: string) => {
    return simulations.find(simulation => simulation.id === id);
  };

  const getFilteredSimulations = () => {
    return simulations.filter(simulation => {
      // Filter by subject
      if (filters.subject && simulation.subjectId !== filters.subject) {
        return false;
      }
      
      // Filter by difficulty
      if (filters.difficulty && simulation.difficulty !== filters.difficulty) {
        return false;
      }
      
      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        return (
          simulation.title.toLowerCase().includes(query) ||
          simulation.description.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
  };

  const filteredSimulations = getFilteredSimulations();

  const value = {
    simulations,
    subjects,
    filteredSimulations,
    filters,
    setFilters,
    getSubjectById,
    getSimulationsBySubject,
    getNewSimulations,
    getPopularSimulations,
    getSimulationById,
  };

  return (
    <SimulationContext.Provider value={value}>
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulations = () => {
  const context = useContext(SimulationContext);
  if (context === undefined) {
    throw new Error('useSimulations must be used within a SimulationProvider');
  }
  return context;
};