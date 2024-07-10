import React, { useState, useEffect } from 'react';
import './MainContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import image1 from './image1.png';

const MainContent = ({ selectedGroup, onExitGroup }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    setNotes([]);
    setNoteText('');
  }, [selectedGroup]);

  const handleSendNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { id: notes.length + 1, text: noteText }]);
      setNoteText('');
    }
  };

  return (
    <div className="main-content">
      {!selectedGroup ? (
        <div className="default-view">
          <img src={image1} alt="Random Image" />
          <h2 style={{ fontSize: '40px', margin: '0' }}>Pocket Notes</h2>
          <div style={{ paddingRight: '175px', paddingLeft: '175px' }}>
            <p>
              Send and receive messages without keeping your phone online.
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
          </div>
        </div>
      ) : (
        <div className="note-taking-view">
          <div className="note-header">
            <div className="group-icon" style={{ backgroundColor: '#0047FF'}}>
              {"MN"}
            </div>
            <h2>My Notes</h2>
          </div>
          <div className="note-list">
            {notes.map(note => (
              <div key={note.id} className="note-item">
                {note.text}
              </div>
            ))}
          </div>
          <div className="note-input">
            <textarea
              placeholder="Enter your text here..........."
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
            />
            <button className="send-btn" onClick={handleSendNote}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;