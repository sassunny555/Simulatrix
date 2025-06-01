import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Simulation } from '../../types';

interface SimulationCarouselProps {
  title: string;
  simulations: Simulation[];
  viewAllLink?: string;
}

export const SimulationCarousel: React.FC<SimulationCarouselProps> = ({
  title,
  simulations,
  viewAllLink,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClick = (simulationId: string) => {
    navigate(`/simulations/${simulationId}`);
  };

  if (simulations.length === 0) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
            {viewAllLink && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(viewAllLink)}
              >
                View All
              </Button>
            )}
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 space-x-6 no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {simulations.map((simulation) => (
            <Card
              key={simulation.id}
              className="flex-none w-72 cursor-pointer h-full flex flex-col"
              onClick={() => handleCardClick(simulation.id)}
            >
              <CardImage src={simulation.thumbnailUrl} alt={simulation.title} />
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {simulation.isNew && <Badge variant="new">New</Badge>}
                  {simulation.isPopular && <Badge variant="popular">Popular</Badge>}
                  <Badge variant="primary">{simulation.difficulty}</Badge>
                </div>
                <CardTitle>{simulation.title}</CardTitle>
                <CardDescription className="line-clamp-2">{simulation.description}</CardDescription>
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
          ))}
        </div>
      </div>
    </section>
  );
};