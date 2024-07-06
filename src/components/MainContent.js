import React from 'react';

const MainContent = ({ groupTitle, notes, noteText, setNoteText, addNote }) => {
  return (
    <div className="main-content">
      <div className="notes-header">
        <h2 id="group-title">{groupTitle}</h2>
      </div>
      <div id="notes-list">
        {notes.map((note, index) => (
          <div key={index}>{`${note.text} (${note.date})`}</div>
        ))}
      </div>
      <div className="note-input">
        <textarea
          id="note-text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="My first assignment"
        />
        <button
          id="send-note-btn"
          onClick={addNote}
          disabled={!noteText.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MainContent;