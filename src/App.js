import React, { useState, useEffect } from 'react';
import Sidebar from './component/Sidebar';
import MainContent from './component/MainContent';
import './App.css';

const App = () => {
  const initialGroups = JSON.parse(localStorage.getItem('groups')) || [];
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const handleCreateGroup = newGroup => {
    setGroups([...groups, newGroup]);
  };

  const handleSelectGroup = group => {
    setSelectedGroup(group);
  };

  const handleAddMessageToGroup = (groupId, message) => {
    const updatedGroups = groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          messages: [...(group.messages || []), message],
        };
      }
      return group;
    });
    setGroups(updatedGroups);
    localStorage.setItem('groups', JSON.stringify(updatedGroups));
  };

  const handleLoadMessages = (groupId) => {
    const group = groups.find(g => g.id === groupId);
    return group ? group.messages || [] : [];
  };

  return (
    <div className="app">
      <Sidebar
        groups={groups}
        onCreateGroup={handleCreateGroup}
        onSelectGroup={handleSelectGroup}
        selectedGroupId={selectedGroup?.id}
      />
      <MainContent
        selectedGroup={selectedGroup}
        onAddMessageToGroup={handleAddMessageToGroup}
        loadMessages={handleLoadMessages} 
      />
    </div>
  );
};

export default App;