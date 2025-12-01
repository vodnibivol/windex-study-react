import './Team.scss';

import team1 from '../assets/img/team-1.png';
import team2 from '../assets/img/team-2.png';
import team3 from '../assets/img/team-3.png';
import team4 from '../assets/img/team-4.png';
import { wipAlert } from '../helpers/Utils';

const Team = () => {
  return (
    <section className="team">
      <h3 className="text-gray upper">Meet The Team</h3>
      <div className="title">
        <h1>Experts Dedicated to a Sustainable Future</h1>
        <div className="see-more-link">
          <a href="#" onClick={wipAlert}>
            <span className="upper underline">See All Members</span>
          </a>
        </div>
      </div>

      <div className="team-grid">
        <div className="member-item slot-1">
          <img src={team1} alt="Team member" />
          <div className="text">Michael Brown</div>
        </div>
        <div className="member-item slot-2">
          <img src={team2} alt="Team member" />
          <div className="text">Rahul Mehta</div>
        </div>
        <div className="member-item slot-7">
          <img src={team3} alt="Team member" />
          <div className="text">Amanda Brown</div>
        </div>
        <div className="member-item slot-4">
          <img src={team4} alt="Team member" />
          <div className="text">Sophia Lee</div>
        </div>
      </div>
    </section>
  );
};

export default Team;
