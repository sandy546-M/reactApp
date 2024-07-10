import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ groups, onCreateGroup, onSelectGroup }) => {
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  
  const handleCreateGroup = () => {
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
      color: selectedColor,
    };
    onCreateGroup(newGroup);
    setGroupName('');
    setSelectedColor('');
    setShowCreateGroup(false);
  };
  const handleSelectGroup = (group) => {
    setSelectedGroupId(group.id); 
    onSelectGroup(group);
  };
  return (
    <div className="sidebar">
    <div className="sidebar-header">
      <h2>Pocket Notes</h2>
    </div>
    <div className="sidebar-content">
      {groups.map((group) => (
        <div
          key={group.id}
          className={`group-item ${selectedGroupId === group.id ? 'selected' : ''}`}
          onClick={() => handleSelectGroup(group)}
        >
          <div className="group-icon" style={{ backgroundColor: group.color }}>
            {group.name.slice(0, 2).toUpperCase()}
          </div>
          <span className="group-name">{group.name}</span>
        </div>
      ))}
    </div>
    <div className="sidebar-footer">
      <button className="add-group-btn" onClick={() => setShowCreateGroup(true)}>
        +
      </button>
    </div>
    {showCreateGroup && (
      <div className="create-group-popup">
        <h3>Create Group</h3>
        <div className="input-group">
          <label htmlFor="groupName">Group Name</label>
          <input
            type="text"
            id="groupName"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="colorOptions">Choose Color</label>
          <div id="colorOptions" className="color-options">
            {['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33FF', '#FFFF33'].map((color) => (
              <div
                key={color}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        <button className="create-btn" onClick={handleCreateGroup}>
          Create
        </button>
      </div>
    )}
  </div>
);
};

export default Sidebar;