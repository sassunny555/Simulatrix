import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Simulation } from '../../types';
import { useSimulations } from '../../context/SimulationContext';

interface SimulationCardProps {
  simulation: Simulation;
}

export const SimulationCard: React.FC<SimulationCardProps> = ({ simulation }) => {
  const navigate = useNavigate();
  const { getSubjectById } = useSimulations();
  const subject = getSubjectById(simulation.subjectId);

  const handleClick = () => {
    navigate(`/simulations/${simulation.id}`);
  };

  return (
    <Card
      className="h-full flex flex-col cursor-pointer transform transition hover:-translate-y-1"
      onClick={handleClick}
    >
      <CardImage src={simulation.thumbnailUrl} alt={simulation.title} />
      <CardContent className="flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {subject && (
            <Badge variant="secondary">{subject.name}</Badge>
          )}
          <Badge variant="primary">{simulation.difficulty}</Badge>
          {simulation.isNew && <Badge variant="new">New</Badge>}
          {simulation.isPopular && <Badge variant="popular">Popular</Badge>}
        </div>
        <CardTitle>{simulation.title}</CardTitle>
        <CardDescription className="line-clamp-2 mb-3">{simulation.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {new Date(simulation.dateAdded).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <span className="text-primary text-sm font-medium">View →</span>
      </CardFooter>
    </Card>
  );
};