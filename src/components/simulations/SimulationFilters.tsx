import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSimulations } from '../../context/SimulationContext';

export const SimulationFilters: React.FC = () => {
  const { subjects, filters, setFilters } = useSimulations();
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);

  const difficultyLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const handleSubjectChange = (subjectId: string) => {
    setFilters({ ...filters, subject: subjectId === filters.subject ? undefined : subjectId });
  };

  const handleDifficultyChange = (difficulty: string) => {
    setFilters({ ...filters, difficulty: difficulty === filters.difficulty ? undefined : difficulty });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: e.target.value });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const hasActiveFilters = filters.subject || filters.difficulty || filters.searchQuery;

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={16} className="mr-1" />
              Clear
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFilters}
            className="md:hidden"
          >
            <Filter size={16} className="mr-1" />
            {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
      </div>

      <div className={`space-y-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div>
          <input
            type="text"
            placeholder="Search simulations..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={filters.searchQuery || ''}
            onChange={handleSearchChange}
          />
        </div>

        <div>
          <h3 className="font-medium mb-2">Subject</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectChange(subject.id)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.subject === subject.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Difficulty</h3>
          <div className="flex flex-wrap gap-2">
            {difficultyLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => handleDifficultyChange(level.id)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.difficulty === level.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};