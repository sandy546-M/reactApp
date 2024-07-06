import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Popup from './components/Popup';

const App = () => {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem('groups')) || []
  );
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('#ffffff');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const renderNotes = () => {
    if (selectedGroupId !== null) {
      const group = groups.find((group) => group.id === selectedGroupId);
      return group.notes;
    }
    return [];
  };

  const selectGroup = (groupId) => {
    setSelectedGroupId(groupId);
  };

  const createGroup = () => {
    if (groupName.trim()) {
      const newGroup = {
        id: Date.now(),
        name: groupName,
        color: groupColor,
        notes: [],
      };
      setGroups([...groups, newGroup]);
      setShowPopup(false);
      setGroupName('');
      setGroupColor('#ffffff');
    }
  };

  const addNote = () => {
    if (noteText.trim() && selectedGroupId !== null) {
      const newGroups = groups.map((group) => {
        if (group.id === selectedGroupId) {
          const newNote = {
            text: noteText,
            date: new Date().toLocaleString(),
          };
          return {
            ...group,
            notes: [...group.notes, newNote],
          };
        }
        return group;
      });
      setGroups(newGroups);
      setNoteText('');
    }
  };

  return (
    <div id="app">
      <Sidebar groups={groups} selectGroup={selectGroup} />
      <MainContent
        groupTitle={
          selectedGroupId !== null
            ? groups.find((group) => group.id === selectedGroupId).name
            : ''
        }
        notes={renderNotes()}
        noteText={noteText}
        setNoteText={setNoteText}
        addNote={addNote}
      />
      {showPopup && (
        <Popup
          groupName={groupName}
          setGroupName={setGroupName}
          groupColor={groupColor}
          setGroupColor={setGroupColor}
          createGroup={createGroup}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default App;