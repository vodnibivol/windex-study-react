import ProjectItem from './ProjectItem';
import './Projects.scss';
import Select from './Select';

const Projects = () => {
  const categories = ['All', 'Offshore Wind Farms', 'Onshore Wind Farms'];

  return (
    <div className="projects">
      <h3 className="text-gray upper">See All Projects</h3>
      <div className="title">
        <h1>Diverse Solutions For Every Need</h1>
        <Select categories={categories} />
      </div>
      <div className="project-grid">
        <ProjectItem image="turbines-4" category="Onshore Wind Farms" title="Blue Ridge Energy Park" />
        <ProjectItem image="turbines-5" category="Offshore Wind Farms" title="Seawind Horizon Project" />
        <ProjectItem image="turbines-6" category="Educational Project" title="WindLab Educational Center" />
        <ProjectItem image="turbines-7" category="Research & Innovation" title="SkyHarvest Wind Farm" />
        <ProjectItem image="turbines-8" category="Industrial Installations" title="BlueWave Offshore Project" />
        <ProjectItem image="turbines-9" category="Educational Project" title="GreenHorizon Community Wind Park" />
      </div>
    </div>
  );
};

export default Projects;
