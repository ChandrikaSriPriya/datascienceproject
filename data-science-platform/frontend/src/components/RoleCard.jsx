import React from 'react';

const RoleCard = ({ role, onClick }) => {
  return (
    <button className="ds-role-card" onClick={onClick} aria-label={role.title}>
      <div className="ds-role-icon">{role.icon}</div>
      <h3 className="ds-role-title">{role.title}</h3>
      <p className="ds-role-desc">{role.description}</p>
      <div className="ds-role-skills">
        {role.keySkills.slice(0, 3).map((skill) => (
          <span key={skill} className="skill-chip">{skill}</span>
        ))}
      </div>
    </button>
  );
};

export default RoleCard;