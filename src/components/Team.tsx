import './Team.scss';

const Team = () => {
  return (
    <section className="team">
      <h3 className="text-gray upper">Meet The Team</h3>
      <div className="title">
        <h1>Experts Dedicated to a Sustainable Future</h1>
        <div className="see-more-link">
          <a href="">
            <span className="upper underline">See All Members</span>
            {/* <i>&gt;</i> */}
          </a>
        </div>
      </div>

      <div className="team-grid">
        <div className="member-item slot-1">
          <img src="/img/team-1.png" alt="Team member" />
        </div>
        <div className="member-item slot-2">
          <img src="/img/team-2.png" alt="Team member" />
        </div>
        <div className="member-item slot-7">
          <img src="/img/team-3.png" alt="Team member" />
        </div>
        <div className="member-item slot-4">
          <img src="/img/team-4.png" alt="Team member" />
        </div>
      </div>
    </section>
  );
};

export default Team;
