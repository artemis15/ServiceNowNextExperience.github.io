import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './DevelopmentStories.module.css';

// Sample data import from a spreadsheet (assuming it's converted to a JSON format)
import storiesData from './storiesData.json';

// Custom modal styles
const customModalStyles = {
  content: {
    top: '50%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginLeft: '10%',
    marginRight: '10%',
    padding: '20px',
    borderRadius: '5px',

  },
};

const DevelopmentStories = () => {
  const [completedStories, setCompletedStories] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentHints, setCurrentHints] = useState('');

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('completedStories')) || {};
    setCompletedStories(savedState);
  }, []);

  const handleCheckboxChange = (index) => {
    const newCompletedStories = { ...completedStories, [index]: !completedStories[index] };
    setCompletedStories(newCompletedStories);
    localStorage.setItem('completedStories', JSON.stringify(newCompletedStories));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure about that?')) {
      setCompletedStories({});
      localStorage.removeItem('completedStories');
    }
  };

  const openModal = (hints) => {
    setCurrentHints(hints);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentHints('');
  };


  const listStyles = {
    listStyleType: 'disc',
    paddingLeft: '20px',
};

const listItemStyles = {
    marginBottom: '10px',
};
  return (
    <div className={styles.storiesContainer}>
      <h1 className={styles.storiesTitle}>Stories</h1>
      <p className={styles.storyHints}>
        Some stories might have an ℹ️ icon next to their title. This opens the Hints mnodal, where we might provide some resources you can use to achieve your goals. It won't necessarily be something demonstrating the specific story you're working on, but it should demonstrate concepts related to the story that should help you get started.
      </p>
      <p className={styles.storyHints}>
        Here are the You & I Builder Live livestreams where you can watch us working through the UI Builder stories:
        <ul style={listStyles}>
            <li style={listItemStyles}>
              <a href="https://www.youtube.com/live/1Hcr4odti6A?si=tP0jrwuH24Zxsj3f" target="_blank"><u>Livestream 1 - August 8th, 2024</u></a>
            </li>
            <li style={listItemStyles}>
              <a href="https://www.youtube.com/live/0e8Xkr5okbM?si=Plz-xjZP-pxJRU3d" target="_blank"><u>Livestream 2 - August 22nd, 2024</u></a>
            </li>
        </ul>
      </p>

      <button
        className={styles.clearAllButton}
        onClick={handleClearAll}
      >
        Clear All
      </button>
      <div className={styles.storiesList}>
        <div className={styles.storiesHeader}>
          <div className={styles.headerCheckbox}></div>
          <div className={styles.headerTitle}>Title</div>
          <div className={styles.headerAsA}>As a</div>
          <div className={styles.headerIWantTo}>I want to</div>
          <div className={styles.headerSoThat}>So that</div>
          <div className={styles.headerAcceptanceCriteria}>Acceptance Criteria</div>
        </div>
        {storiesData.map((story, index) => (
          <div key={index} className={`${styles.storyItem} ${index % 2 === 0 ? styles.storyItemAlt : ''} ${completedStories[index] ? styles.storyCompleted : ''}`}>
            <div className={styles.storyCheckbox}>
              <input
                type="checkbox"
                checked={!!completedStories[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
            <div className={styles.storyTitle}>
              {story.title}
              {story.hints && (
                <span
                  className={styles.hintsIcon}
                  onClick={() => openModal(story.hints)}
                  title="Hints"
                >
                  ℹ️
                </span>
              )}
            </div>
            <div className={styles.storyAsA}>{story.asA}</div>
            <div className={styles.storyIWantTo}>{story.iWantTo}</div>
            <div className={styles.storySoThat}>{story.soThat}</div>
            <div className={styles.storyAcceptanceCriteria} dangerouslySetInnerHTML={{ __html: story.acceptanceCriteria }}></div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Hints Modal"
      >
                <div className={styles.modalContent}>
        <h2>Hints</h2>
        <div dangerouslySetInnerHTML={{ __html: currentHints }} />
        <button className={styles.modalCloseButton} onClick={closeModal}>Close</button>
      </div>
      </Modal>
    </div>
  );
};

export default DevelopmentStories;