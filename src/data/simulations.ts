import { Simulation } from '../types';

export const simulations: Simulation[] = [
  {
    id: 'pendulum-motion',
    title: 'Simple Pendulum Motion',
    description: 'Explore the periodic motion of a simple pendulum and understand the factors affecting its period.',
    subjectId: 'physics',
    difficulty: 'beginner',
    embedUrl: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    isPopular: true,
    dateAdded: '2025-03-15'
  },
  {
    id: 'acid-base-reactions',
    title: 'Acid-Base Reactions',
    description: 'Visualize acid-base reactions and understand pH indicators through interactive experiments.',
    subjectId: 'chemistry',
    difficulty: 'intermediate',
    embedUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    dateAdded: '2025-03-10'
  },
  {
    id: 'cell-structure',
    title: 'Cell Structure and Function',
    description: 'Explore the intricate structures within cells and understand their functions.',
    subjectId: 'biology',
    difficulty: 'beginner',
    embedUrl: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isPopular: true,
    dateAdded: '2025-02-28'
  },
  {
    id: 'projectile-motion',
    title: 'Projectile Motion',
    description: 'Understand how objects move through the air under the influence of gravity.',
    subjectId: 'physics',
    difficulty: 'intermediate',
    embedUrl: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isPopular: true,
    dateAdded: '2025-02-20'
  },
  {
    id: 'geometric-optics',
    title: 'Geometric Optics',
    description: 'Explore how light rays interact with mirrors and lenses to form images.',
    subjectId: 'physics',
    difficulty: 'intermediate',
    embedUrl: 'https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/3845162/pexels-photo-3845162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dateAdded: '2025-02-15'
  },
  {
    id: 'probability-distributions',
    title: 'Probability Distributions',
    description: 'Visualize and explore different probability distributions and their properties.',
    subjectId: 'mathematics',
    difficulty: 'advanced',
    embedUrl: 'https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    dateAdded: '2025-03-05'
  },
  {
    id: 'circuit-construction',
    title: 'Circuit Construction',
    description: 'Build and analyze DC circuits with batteries, resistors, and light bulbs.',
    subjectId: 'engineering',
    difficulty: 'beginner',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isPopular: true,
    dateAdded: '2025-01-30'
  },
  {
    id: 'solar-system',
    title: 'Solar System Exploration',
    description: 'Journey through our solar system and learn about planets, moons, and other celestial bodies.',
    subjectId: 'astronomy',
    difficulty: 'beginner',
    embedUrl: 'https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    dateAdded: '2025-03-01'
  },
  {
    id: 'molecular-shapes',
    title: 'Molecular Shapes and Polarity',
    description: 'Discover how electron pairs determine molecular shapes and polarity.',
    subjectId: 'chemistry',
    difficulty: 'advanced',
    embedUrl: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dateAdded: '2025-02-10'
  },
  {
    id: 'calculus-visualizer',
    title: 'Calculus Concepts Visualizer',
    description: 'Visualize important calculus concepts like derivatives and integrals.',
    subjectId: 'mathematics',
    difficulty: 'advanced',
    embedUrl: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_en.html',
    thumbnailUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isPopular: true,
    dateAdded: '2025-01-15'
  }
];