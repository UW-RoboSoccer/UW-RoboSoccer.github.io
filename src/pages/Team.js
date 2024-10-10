import React, { useState, useEffect, useRef } from 'react';
import { subteam_descriptions, team_members } from '../constants';
import Footer from '../components/Footer';

const Team = () => {
  const [expandedTeams, setExpandedTeams] = useState({});
  const [maxButtonWidth, setMaxButtonWidth] = useState(0);
  const buttonRefs = useRef([]);

  const handleExpand = (teamId) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [teamId]: !prev[teamId],
    }));
  };

  useEffect(() => {
    const widths = buttonRefs.current.map(ref => ref.offsetWidth);
    setMaxButtonWidth(Math.max(...widths));
  }, []);

  return (
    <div className="team-page">
      <section className="py-20 bg-rsBack">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl font-bold">Meet The Team</h2>

          {/* Team Leads */}
          <div className="mt-8">
            {/* First Row - Fixed 4 Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {team_members.slice(0, 4).map((member, index) => (
                <div key={index} className="team-lead">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  />
                  <h3 className="text-xl mt-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      {member.name}
                    </a>
                  </h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>

            {/* Second Row - Use Flex to Center a Single Item on Small Screens */}
            <div className="flex flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
              {team_members.slice(4).map((member, index) => (
                <div key={index} className="team-lead">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  />
                  <h3 className="text-xl mt-4">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Team Details */}
          <div className="mt-10">
            <div className="flex flex-wrap justify-center gap-4">
              {subteam_descriptions.map((subteam, index) => (
                <div key={subteam.id} className="flex flex-col items-center mb-6 w-full max-w-4xl">
                  <button
                    ref={el => buttonRefs.current[index] = el}
                    onClick={() => handleExpand(subteam.id)}
                    className="bg-rs-purple text-white py-2 px-4 rounded shadow-md transition hover:bg-custom-hover"
                    style={{ minWidth: maxButtonWidth }}
                  >
                    {subteam.title}
                  </button>
                  {expandedTeams[subteam.id] && (
                    <div className="bg-gray-100 p-4 mt-4 w-full max-w-4xl">
                      <p>{subteam.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;