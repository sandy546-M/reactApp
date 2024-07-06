import React from 'react';

const Sidebar = ({ groups, selectGroup }) => {
  return (
    <div className="sidebar">
      <button id="create-group-btn">Create Group</button>
      <ul id="group-list">
        {groups.map((group) => (
          <li
            key={group.id}
            style={{ backgroundColor: group.color }}
            onClick={() => selectGroup(group.id)}
          >
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;