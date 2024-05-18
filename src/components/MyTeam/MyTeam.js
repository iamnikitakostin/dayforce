import React from 'react';
import './MyTeam.css';
import fetch from '../../constants/profile_example.json';
import Member from './Member';

function MyTeam() {
  return (
    <div className="myTeam card">
      <div className="margin__bottom">
        <h1 className="p__highlight">My Team</h1>
      </div>
      <div className="card__body">
        <div className="myTeam__body-item">
          <p className="p__highlight">Manager</p>
          <div className="myTeam__body-members">
            <Member profile={fetch.profile.team.manager} />
          </div>
        </div>
        {fetch.profile.team.reports && (
          <div className="myTeam__body-item">
            <p className="p__highlight">Direct Reports</p>
            <div className="myTeam__body-members">
              {fetch.profile.team.reports.map((item) => (
                <Member key={item.id} profile={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTeam;
