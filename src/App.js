import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import MainContent from './component/MainContent';
import './App.css'; // Define global CSS styles

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleCreateGroup = newGroup => {
    setGroups([...groups, newGroup]);
  };

  const handleSelectGroup = group => {
    setSelectedGroup(group);
  };

  return (
    <div className="app">
      <Sidebar groups={groups} onCreateGroup={handleCreateGroup} onSelectGroup={handleSelectGroup} />
      <MainContent selectedGroup={selectedGroup} />
    </div>
  );
};

export default App;