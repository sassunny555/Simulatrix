import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '../ui/Card';
import { useSimulations } from '../../context/SimulationContext';

export const SubjectGrid: React.FC = () => {
  const { subjects } = useSimulations();
  const navigate = useNavigate();

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Explore Subjects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.id} 
              className="cursor-pointer h-full flex flex-col"
              onClick={() => handleSubjectClick(subject.id)}
            >
              <CardImage src={subject.imageUrl} alt={subject.name} />
              <CardContent className="flex-grow flex flex-col">
                <CardTitle>{subject.name}</CardTitle>
                <CardDescription className="mb-4">{subject.description}</CardDescription>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {subject.simulationCount} simulation{subject.simulationCount !== 1 ? 's' : ''}
                  </span>
                  <span className="text-primary text-sm font-medium">Explore →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};