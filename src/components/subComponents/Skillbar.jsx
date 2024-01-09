import React from 'react';

const SkillBar = ({name, rating }) => {
  const gradientStyle = {
    width: `${rating}%`,
    height: 10,
    background: `linear-gradient(to right, lightblue, green)`,
  };

  return (
    <div className="skill-bar" style={{ width: '120px', height: '50px', overflow: 'hidden' }}>
      <div style={{ padding: '4px', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>{name}</div>
      <div className="colored-bar" style={gradientStyle}></div>
    </div>
  );
};

export default SkillBar;