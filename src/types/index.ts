export interface Subject {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  simulationCount: number;
}

export interface Simulation {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  code?: string;
  embedUrl?: string;
  thumbnailUrl: string;
  isNew?: boolean;
  isPopular?: boolean;
  dateAdded: string;
}

export interface SimulationFilters {
  subject?: string;
  difficulty?: string;
  searchQuery?: string;
}