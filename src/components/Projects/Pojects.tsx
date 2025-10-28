import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectItem from './ProjectItem';
import './Projects.scss';
import Select from './Select';

const Projects = () => {
  const categories = ['All', 'Offshore Wind Farms', 'Onshore Wind Farms'];

  const [category, setCategory] = useState('All');

  const projects = [
    { title: 'Blue Ridge Energy Park', category: 'Onshore Wind Farms', image: 'turbines-4' },
    { title: 'Seawind Horizon Project', category: 'Offshore Wind Farms', image: 'turbines-5' },
    { title: 'WindLab Educational Center', category: 'Educational Project', image: 'turbines-6' },
    { title: 'SkyHarvest Wind Farm', category: 'Research & Innovation', image: 'turbines-7' },
    { title: 'BlueWave Offshore Project', category: 'Offshore Wind Farms', image: 'turbines-8' },
    { title: 'GreenHorizon Community Wind Park', category: 'Onshore Wind Farms', image: 'turbines-9' },
    { title: 'Red North Community Area', category: 'Offshore Wind Farms', image: 'turbines-10' },
    { title: 'Central European Research Facility', category: 'Educational Project', image: 'turbines-1' },
  ];

  const filteredProjects = category === 'All' ? projects : projects.filter((p) => p.category === category);

  return (
    <div className="projects">
      <h3 className="text-gray upper">See All Projects</h3>
      <div className="title">
        <h1>Diverse Solutions For Every Need</h1>
        <Select categories={categories} category={category} setCategory={setCategory} />
      </div>
      <div className="project-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 50,
              }}
            >
              <ProjectItem {...project} key={project.title} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
