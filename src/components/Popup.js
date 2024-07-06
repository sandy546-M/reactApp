import React from 'react';

const Popup = ({
  groupName,
  setGroupName,
  groupColor,
  setGroupColor,
  createGroup,
  closePopup,
}) => {
  return (
    <div id="group-popup" className="popup">
      <div className="popup-content">
        <span id="close-popup" onClick={closePopup}>
          &times;
        </span>
        <input
          type="text"
          id="group-name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
        />
        <input
          type="color"
          id="group-color"
          value={groupColor}
          onChange={(e) => setGroupColor(e.target.value)}
        />
        <button id="create-group-confirm" onClick={createGroup}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Popup;