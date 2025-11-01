import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectItem from './ProjectItem';
import './Projects.scss';
import Select from './Select';

import turbines1 from '../../assets/img/turbines-1.png';
import turbines4 from '../../assets/img/turbines-4.png';
import turbines5 from '../../assets/img/turbines-5.png';
import turbines6 from '../../assets/img/turbines-6.png';
import turbines7 from '../../assets/img/turbines-7.png';
import turbines8 from '../../assets/img/turbines-8.png';
import turbines9 from '../../assets/img/turbines-9.png';
import turbines10 from '../../assets/img/turbines-10.png';

const Projects = () => {
  const categories = ['All', 'Offshore Wind Farms', 'Onshore Wind Farms'];

  const [category, setCategory] = useState('All');

  const projects = [
    { title: 'Blue Ridge Energy Park', category: 'Onshore Wind Farms', image: turbines4 },
    { title: 'Seawind Horizon Project', category: 'Offshore Wind Farms', image: turbines5 },
    { title: 'WindLab Educational Center', category: 'Educational Project', image: turbines6 },
    { title: 'SkyHarvest Wind Farm', category: 'Research & Innovation', image: turbines7 },
    { title: 'BlueWave Offshore Project', category: 'Offshore Wind Farms', image: turbines8 },
    { title: 'GreenHorizon Community Wind Park', category: 'Onshore Wind Farms', image: turbines9 },
    { title: 'Red North Community Area', category: 'Offshore Wind Farms', image: turbines10 },
    { title: 'Central European Research Facility', category: 'Educational Project', image: turbines1 },
  ];

  const filteredProjects = category === 'All' ? projects : projects.filter((p) => p.category === category);

  return (
    <section className="projects">
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
    </section>
  );
};

export default Projects;
